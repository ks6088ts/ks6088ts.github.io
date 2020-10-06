---
title: ［Go 言語入門］ cobra で Slack API を叩く CLI ツールを実装してみた
date: "2020-04-03T09:00:00.000Z"
description: "GitHub Actions を使って GitHub Pages に GatsbyJS のサイトをデプロイ"
---

これまで使い捨ての社内ツールは「慣れているから」という理由ですべて Python で実装してきた。  
しかしながら、実行環境のセットアップが必要になり、他の人に環境を共有するのが困難で、属人化しがちなデメリットが顕在化してきた。  
今回これらの悩みを解決するため、 
* マルチプラットフォーム対応が容易
* シングルバイナリでデプロイが容易
* OSS が充実していてツールの実装コストが低い

な特徴を持つ Go 言語を採用し、社内ツールを置き換えることを目指して勉強してみる。  
ソースコード一式は [ks6088ts/slack-client-go](https://github.com/ks6088ts/slack-client-go) にある。 


# Go Modules 入門

Go 言語の依存モジュール管理方法として dep を使っていたが、  
[The Go Blog / Using Go Modules](https://blog.golang.org/using-go-modules) によると、

> Starting in Go 1.13, module mode will be the default for all development.

とあり、Go 1.13 からは Go modules がデフォルトになるとのこと。  
使い方は [2019-10-10 Go言語の依存モジュール管理ツール Modules の使い方](https://blog.mmmcorp.co.jp/blog/2019/10/10/go-mod/) を参考に、下記の作業作業ログにある通り使用開始できた。

```bash
# Go のバージョンを確認
$ go version
go version go1.13.5 windows/amd64

# go.mod ファイルを生成
$ go mod init
go: creating new go.mod: module github.com/ks6088ts/slack-client-go

# 適当なアプリケーションを実装
$ vi main.go

# コードを確認
$ cat main.go
package main

import (
        "fmt"

        "github.com/slack-go/slack"
)

func main() {
        api := slack.New("YOUR_TOKEN_HERE")
        // If you set debugging, it will log all requests to the console
        // Useful when encountering issues
        // slack.New("YOUR_TOKEN_HERE", slack.OptionDebug(true))
        groups, err := api.GetGroups(false)
        if err != nil {
                fmt.Printf("%s\n", err)
                return
        }
        for _, group := range groups {
                fmt.Printf("ID: %s, Name: %s\n", group.ID, group.Name)
        }
}

# go build で依存モジュールを自動インストール
# go.mod に記載された依存モジュールの情報が更新される
$ go build

# go list -m all で、現在の依存モジュールを表示
$ go list -m all
go: finding github.com/go-test/deep v1.0.4
go: finding github.com/nlopes/slack v0.6.0
github.com/ks6088ts/slack-client-go
github.com/davecgh/go-spew v1.1.1
github.com/go-test/deep v1.0.4
github.com/gorilla/websocket v1.2.0
github.com/nlopes/slack v0.6.0
github.com/pkg/errors v0.8.0
github.com/pmezard/go-difflib v1.0.0
github.com/slack-go/slack v0.6.3
github.com/stretchr/testify v1.2.2

# go mod tidy で、使われていない依存モジュールを削除
# go.mod の内容が更新される
$ go mod tidy
```

# cobra による CLI ツール

[spf13/cobra](https://github.com/spf13/cobra) は kubectl 等でも利用実績のある Go 言語製 CLI ライブラリ。  
GitHub スター数も多く、CLI のための雛形を自動生成する [Cobra Generator](https://github.com/spf13/cobra/blob/master/cobra/README.md) 等もあるため利用することにした。  
簡単に使い始められたので、作業ログを以下に残す。  

```bash
# CLI ツールをインストール
go get -u github.com/spf13/cobra/cobra

# cobra generator でコード生成
cobra init \
    --pkg-name github.com/ks6088ts/slack-client-go \
    --config .cobra.yml

# cobra generator でコマンド追加
cobra add hello \
    --config .cobra.yml \
    --parent rootCmd
```

なお、cobra の自動生成コードだと root コマンドにすべてのコマンドが渡される設計で、サブコマンド向け単体テストが追加しづらい。  
[Document a best practice for testing a cobra app](https://github.com/spf13/cobra/issues/770#issue-371676093) でもこの件は少し話題に上がっているが、kubectl 等の OSS を読むと良さそう。  
参考になりそうなコードはこのあたり。
* [kubernetes/kubectl](https://github.com/kubernetes/kubernetes/blob/master/cmd/kubectl/kubectl.go)

# Slack API

詳細は [Slack API Methods](https://api.slack.com/methods) にあるが、API 呼び出しは簡単で、例えば [chat.postMessage](https://api.slack.com/methods/chat.postMessage) にあるように、

```bash
curl -XPOST \
  -d "token=TOKEN" \
  -d "channel=#test" \
  -d "text=Hello <@ks6088ts>" \
  -d "username=bot" \
  "https://slack.com/api/chat.postMessage"
```

でメッセージ投稿ができる。  
都度アドホックに実装するのも非効率なので、ここでは車輪の再発明を避けるため、[slack-go/slack](https://github.com/slack-go/slack) を使うことにした。  
channel, message, token 等を CLI に引数指定できるようにすれば良い。  
特に token はバージョン管理システムに残したくないので引数指定を必須化したい。  
cobra のサブコマンドにおけるオプション指定を必須にするためには、[Required flags are not enforced in subcommands #723](https://github.com/spf13/cobra/issues/723#issuecomment-418826503) にある通り、```MarkPersistentFlagRequired()``` を呼び出せば良い。

```go
// bar フラグの指定を必須にする
func init() {
    fooCmd.MarkPersistentFlagRequired("bar")
	fooCmd.AddCommand(frobozzCmd)
}
```

# Makefile でルーチンワークを自動化

Go 言語利用者は GNU Make を使うことが多いらしい。  
個人的に読んだ良記事はこちら：

* [Golang を使うなら Makefile を恐れるな](https://frasco.io/golang-dont-afraid-of-makefiles-785f3ec7eb32)
  * 基礎的なことがまとまっている。
* [gin-gonic/gin:Makefile](https://github.com/gin-gonic/gin/blob/master/Makefile)
  * gin の Makefile。スター数の多いライブラリの実装は参考になる。
* [Self-Documented Makefile](https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html)
  * help オプションを自己文書化する


# GitHub Actions

GitHub Actions を用いて簡単な CI も実行できるようにした。  
[.github/workflows/ci.yml](https://github.com/ks6088ts/slack-client-go/blob/master/.github/workflows/ci.yml) にある通り、lint, build を実行するようにした。  
導入時、GitHub Actions で ```golint``` をインストールしたのに golint が見つからない問題に嵌ったのだが、GitHub Actions で GOPATH を通して解決した。
[Add $GOPATH/bin to $PATH #14](https://github.com/actions/setup-go/issues/14)

ついでに以下のパッジも貼ってまともな OSS っぽくした。

* ![](https://github.com/ks6088ts/slack-client-go/workflows/CI/badge.svg)
* [![Go Report Card](https://goreportcard.com/badge/github.com/ks6088ts/slack-client-go)](https://goreportcard.com/report/github.com/ks6088ts/slack-client-go)
* [![GoDoc](http://img.shields.io/badge/go-documentation-blue.svg?style=flat-square)](http://godoc.org/github.com/ks6088ts/slack-client-go)

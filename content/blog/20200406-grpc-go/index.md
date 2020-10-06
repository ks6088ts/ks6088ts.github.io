---
title: ［gRPC 入門］Go 言語で gRPC サーバを実装して Docker コンテナにマルチステージビルドしてデプロイする
date: "2020-04-06T13:00:00.000Z"
description: "［gRPC 入門］Go 言語で gRPC サーバを実装して Docker コンテナにマルチステージビルドしてデプロイする"
---

[ks6088ts/sandbox-grpc-go](https://github.com/ks6088ts/sandbox-grpc-go) に本記事に関連するコードを置いた。

# gRPC 基礎

**gRPC とは**  

Protocol Buffers を使ってデータをシリアライズし、
HTTP/2の上に定義されたRPCのための規格。  
高速な通信を実現できる点が特長。

* [What is gRPC?](https://grpc.io/docs/guides/)

![What is gRPC?](https://grpc.io/img/landing-2.svg)

**Protocol Buffers とは**

データの通信・永続化のためのシリアライズフォーマット。  
プロセス内部の簡素なデータ構造をシリアライズするためにスキーマ定義用のドメイン固有言語があり、  
「protoファイル」で構造化データを定義し、コンパイルすることで各言語のコードが生成される。

* [Protocol buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data.](https://developers.google.com/protocol-buffers)

# Go 言語で実装してみる

[Quick Start](https://grpc.io/docs/quickstart/) に各言語向けの入門ドキュメントがある。  
ここでは [Go Quick Start](https://grpc.io/docs/quickstart/go/) を参考に、Go で簡単なサーバ・クライアントを実装してみる。  

## セットアップ

```bash
# protoc のインストールを GNU Make のコマンドとして定義
# ref. http://google.github.io/proto-lens/installing-protoc.html
PROTOC_VERSION ?= 3.7.1
PROTOC_ZIP ?= protoc-$(PROTOC_VERSION)-linux-x86_64.zip
.PHONY: install-protoc
install-protoc:
	@hash protoc > /dev/null 2>&1; if [ $$? -ne 0 ]; then \
		curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v$(PROTOC_VERSION)/$(PROTOC_ZIP); \
		sudo unzip -o $(PROTOC_ZIP) -d /usr/local bin/protoc; \
		sudo unzip -o $(PROTOC_ZIP) -d /usr/local 'include/*'; \
		rm -f $(PROTOC_ZIP); \
	fi
```

続けて go 向けのモジュール群をインストールする。

```bash
# gRPC のインストール
go get -u google.golang.org/grpc

# protoc の go サポート
go get -u github.com/golang/protobuf/protoc-gen-go
```

これで Go 言語で gRPC サーバ・クライアントの開発環境ができた。

## 実装

[grpc-go/examples](https://github.com/grpc/grpc-go/tree/master/examples) をベースとして、サーバ・クライアントを実装する。  

**proto ファイルから gRPC 向けのコードを生成する**

proto ファイルで定義されたサービスを実装するための Go 言語のコードを生成する。

```bash
protoc -I helloworld/ helloworld/helloworld.proto --go_out=plugins=grpc:helloworld
```

生成された *.pb.go を利用してサーバ・クライアントを実装する。

**grpcurl**

REST API だと curl で CLI から任意のリクエスト発行が容易なのだが、gRPC ってそういうの無いのか？という疑問から OSS が無いか調査したところ、やはりそういうものは既にあった。  
[grpcurl](https://github.com/fullstorydev/grpcurl) とかいうやつで、以下の README の説明(抜粋)からして curl っぽく使えそうな印象。

> Like cURL, but for gRPC: Command-line tool for interacting with gRPC servers

なお、 grpcurl を利用するためには gRPC サーバ側のリフレクション機能を有効にする必要がある。  
有効でない場合に grpcurl でリクエスト発行すると、

```
Error invoking method "helloworld.Greeter/SayHello": failed to query for service descriptor "helloworld.Greeter": server does not support the reflection API
```

と言われて確かに使えない。  
サーバのリフレクション機能とは何かというと、[gRPC Server Reflection Tutorial](https://github.com/grpc/grpc-go/blob/master/Documentation/server-reflection-tutorial.md) にあるように、  
公開アクセス可能なサーバ上のサービスに関する情報を提供する機能のことで、  
これによりクライアントが gRPC リクエストをランタイムで構築できるようになる。  

grpcurl の使い方としては、
1. gRPC サーバのリフレクション機能を有効にする
```import "google.golang.org/grpc/reflection"``` して ```reflection.Register(server)``` する
2. grpcurl コマンドを発行

```bash
grpcurl -plaintext -d '{ "name": "helloworld" }' \
		localhost:50051 helloworld.Greeter/SayHello
{
  "message": "Hello helloworld"
}
```

という感じに利用できた。  

# Docker 環境で実行

せっかく Go で書いてシングルバイナリ化できたので、Docker コンテナに乗せてみたくなった。  
コンテナに載せる際の常識も合わせて抑える。

## プロダクション向けに Deploy

プロダクション向けビルドでは生成するバイナリは最適化しておくべし。  
[GoLang to build smaller executable file](https://www.pixelstech.net/article/1576288399-GoLang-to-build-smaller-executable-file) によると

### プロダクション環境向けビルド

プロダクション環境で不要な情報をバイナリから削除するため、```go build``` 時に ```-ldflags="-s -w"``` をオプション指定する。  
これにより、

* シンボルテーブル・デバッグ情報を削除(-s)
* DWARF 情報を削除(-w)

され、バイナリサイズが小さくなる。  
不要なメモリを食わなくなるし、コンテナの起動も早くなるので常にやっておきたい。

### upx でバイナリ圧縮

```upx <bin_name>``` でサイズ圧縮。

## マルチステージビルド

go のアプリケーションをビルドするために必要な環境と、  
生成されたバイナリを実行するために必要な環境は異なる。  
前者はツールをいくつかインストールする必要があり、イメージサイズはいくらか大きくなり、  
コンテナ内でできることが多くなりセキュリティリスクが上がる。  
バイナリを実行するだけであれば最小限の機能をもったイメージ上に、生成されたバイナリを置くだけにしたい。  

そんな要望を叶えるため、Docker 17.05 またはそれ以上の Docker デーモンおよび Docker クライアントにおいて、マルチステージビルドがサポートされた。  
以下ような形で、golang:1.14.1-alpine3.11 コンテナでビルドされたバイナリを、alpine:3.11.5 にデプロイした Docker イメージを生成することができる。  

```dockerfile
FROM golang:1.14.1-alpine3.11 AS build

WORKDIR ${GOPATH}/src/github.com/ks6088ts/sandbox-grpc-go
ADD . .
RUN go build \
    -ldflags="-s -w" \
    -o /outputs/cli \
    ${GOPATH}/src/github.com/ks6088ts/sandbox-grpc-go
# TODO: upx の圧縮

# ---

FROM alpine:3.11.5
WORKDIR /app
COPY --from=build /outputs/cli .
CMD [ "./cli --help" ]
```

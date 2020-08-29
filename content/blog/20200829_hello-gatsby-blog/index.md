---
title: GitHub Actions による GatsbyJS 製サイトの自動デプロイ
date: "2020-08-28T07:00:00.000Z"
description: "GatsbyJS 製サイトの記事追加を GitHub Actions で自動化したメモ"
---

# GatsbyJS is 何 ?

WordPress・Contentful 等の各種 CMS、ローカルの Markdown・YAML 等のファイル、API・Database 等をデータソースとして、  
GraphQL を通じて統一的に扱う事ができる静的サイトジェネレータです。  
複数のデータソースを扱えることから、既存のブログシステムから GatsbyJS による静的サイトへの乗り換えも容易です。  
React ベースで実装されているので、React で UI パーツの追加などがしやすく、  
Airbnb や Nike 等、多くの有名企業で採用実績があります。  
その他詳細は[公式サイト](https://www.gatsbyjs.com/)にまとまっています。  

# Starters と Plugins
GatsbyJS には「Starters」, 「Plugins」という2つのエコシステムがあります。

**Starters** は簡単にいうとデザインテンプレートにあたります。  
ブログや EC サイトなどさまざまなカテゴリがあり、  
目的にあった Starter を見つけることができれば、スクラッチから書く必要がなく開発の初速が稼げるメリットがあります。

**Plugins** は GatsbyJS で使用できる拡張機能です。  
GoogleAnalytics や PWA対応や多言語対応用のプラグインなど、  
多数のプラグインが充実しており、これらを使えばほぼコーディング不要で機能追加ができてしまいます。  

# Starter を使った GatsbyJS 製サイト構築

たった 3 steps でブログ構築できてしまいます。  

<u>**1. Gatsby CLI をインストール**</u>

[Using the Gatsby CLI](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli) を参考に CLI をインストールします。  

```bash
npm install -g gatsby-cli
```

<u>**2. Gatsby CLI で Starter を使ったサイトを生成**</u>

Starter は [Gatsby Starters](https://www.gatsbyjs.org/starters/?) にまとまっています。  
当ブログでは [gatsbyjs/gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) を Starter として、下記コマンドで GatsbyJS サイトを作成しました。  

```bash
gatsby new ks6088ts.github.io https://github.com/gatsbyjs/gatsby-starter-blog
```

ちなみに gatsby-cli のコマンドは公式ドキュメント [gatsby-cli/#api-commands](https://www.gatsbyjs.org/docs/gatsby-cli/#api-commands) にまとまっています。  

<u>**3. サイトをビルドして開発サーバで確認**</u>

下記コマンドでビルド & 開発サーバを起動します。  

```bash
gatsby develop
```

デフォルトだと ```localhost:8000``` でサーバが起動します。
記事の追加は利用する Starter にもよりますが、[gatsbyjs/gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)だと ```content/blog/``` 下に Markdown で追加します。  

# 記事追加のルーチンワークを効率化

記事を追加するのに、

1. Markdown で記事作成
1. ビルド
1. 生成されたファイル群を push

といったルーチンワークが発生しますが、これを GitHub Actions を使って自動化してみます。  
ここではデプロイ先を GitHub Pages とします。  

## GitHub Actions is 何?

Travis CI や Circle CI などの CI/CDツールと同様、リポジトリに対するプッシュやプルリクエストといったイベントをトリガーとして、あらかじめ定義しておいた処理を実行する機能です。  
リポジトリ内に設定ファイルを置くだけで、GitHub が提供するサーバー上に用意された仮想マシンで実行できます。  

## GitHub Actions を使って GitHub Pages を更新

まずは GitHub Pages を利用するため、GitHub 上に ```<username>.github.io``` リポジトリを GitHub 上に作成します。  
次に下記の操作を行います。  

```bash
# ↑で生成したディレクトリに移動
cd site
# リモートリポジトリの追加
git remote add origin https://github.com/username/username.github.io.git
# ソースコードを source ブランチで管理するためブランチ名をリネーム
git branch -m master source
```

GitHub Actions の設定ファイルは、```.github/workflows```
以下に置きます。  
当ブログでは下記の YAML ファイルを追加します。  

```yaml
# .github/workflows/deploy.yml
name: GitHub Pages
on:
  push:
    branches:
      - source
jobs:
  build:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: '10.x'
      - name: Cache dependencies
        uses: actions/cache@v1
        with:
          path: ~/.cache/yarn
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-
      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Run build for GitHub Pages
        run: yarn build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
          publish_branch: master
```

これで source ブランチに push したら、public 以下の成果物を master ブランチに push してくれて GitHub Pages が更新されます。  
日々のブログ更新のために必要な作業は、 content/blog/ に記事を push するだけになりました。

## 参考サイト

* GitHub Actions の適用事例として [tokyo-metropolitan-gov/covid19](https://github.com/tokyo-metropolitan-gov/covid19/tree/development/.github/workflows)
* [GitHub Actions による GitHub Pages への自動デプロイ](https://qiita.com/peaceiris/items/d401f2e5724fdcb0759d)

---
slug: handson-azure-search-openai-demo
title: Azure-Samples/azure-search-openai-demo のハンズオン
authors: ks6088ts
tags: [azure, openai]
---

Retrieval-Augmented Generation (=RAG) pattern のリファレンス実装である azure-search-openai-demo の利用方法をまとめます。

<!--truncate-->

## 開発環境の準備

ハンズオンを始める前に、お使いの開発マシンに次の環境を準備します。

- [Azure CLI](https://learn.microsoft.com/ja-jp/cli/azure/install-azure-cli)
- [Azure Developer CLI](https://learn.microsoft.com/ja-jp/azure/developer/azure-developer-cli/install-azd?tabs=winget-windows%2Cbrew-mac%2Cscript-linux&pivots=os-linux)

本ハンズオンでは Azure の環境作成とサンプルアプリのデプロイに Azure Developer CLI を利用します。Azure Developer CLI (azd コマンド)は、Azure のリソースを管理するためのオープンソースのコマンドラインツールです。主に以下の処理ができます。

- Azure 上のリソースの作成、更新、削除
- Azure のリソースを管理するためのスクリプトの作成
- IaC による自動デプロイや管理

テンプレートが用意されているのでこれをもとに環境を素早く作成できます。
このテンプレートは自作可能で、プロジェクトの要件にあわせたものを作成して開発チームで展開できます。

ref. [Template Library](https://aka.ms/awesome-azd/)

## ハンズオン

`RAG` は、外部の知識ベースから事実を検索して、ユーザーの洞察を LLM の生成プロセスに組み込むという AI フレームワークです。
ref. [外部情報を取得し文脈として与える考え方 Grounding](https://speakerdeck.com/hirosatogamo/chatgpt-azure-openai-da-quan?slide=23)

本サンプルは、Azure Cognitive Search と Azure OpenAI Service を組み合わせて、RAG パターンを実装したものです。

### データセットの作成

自社製品のマニュアル・研究論文・社内ドキュメントなどの実際の業務データを使うには、`data/` に検索したい任意の PDF ファイルを格納します。

なお、本サンプルはユーザ認証やネットワーク閉域化されていないため、インターネットに公開されても問題のないデータを利用してください。

### Azure リソースの作成

```shell
# Azure 環境にログインします
azd auth login

# アプリケーションを初期化します
azd init

# クエリ言語・アナライザを日本語に設定
azd env set AZURE_SEARCH_QUERY_LANGUAGE ja-jp
azd env set AZURE_SEARCH_QUERY_SPELLER none
azd env set AZURE_SEARCH_ANALYZER_NAME ja.lucene

# Azure リソースを一括デプロイ
azd up
```

### 動作確認

**ローカルでの動作確認**

機能拡張や、動作の不具合解析を目的として、ローカルでの動作確認を行います。以下のコマンドで実行できます。

```shell
cd app; ./start.sh
```

ref. [Running locally](https://github.com/Azure-Samples/azure-search-openai-demo#running-locally)

**Cognitive Search のインデックス確認**

Azure Portal > Cognitive Search > Search management > Indexes 画面からインデックスの設定を確認します。  
ref. [Azure Cognitive Search のインデックス](https://learn.microsoft.com/ja-jp/azure/search/search-what-is-an-index)

**Cognitive Search のインデックス作成**

インデックスを再作成・更新する場合は、`data/` に pdf ファイルを置いた後以下のコマンドを実行してください。

```shell
./scripts/prepdocs.sh
```

上記スクリプトは、ドキュメント自体に変更が無ければ index は再作成されないようになっています。  
ref. [Store an MD5 hash of uploaded/indexed file and check before prepdocs #835](https://github.com/Azure-Samples/azure-search-openai-demo/pull/835)

## FAQ

リポジトリの FAQ は [Azure-Samples/azure-search-openai-demo#faq](https://github.com/Azure-Samples/azure-search-openai-demo#faq) にあります。

### チャットのレスポンスに `TypeError: network error` というエラーが出る

AOAI の token 数の上限に掛かっている可能性があります。参考文献として取得するチャンク数を減らすことで回避できる可能性があります。  
取得するチャンク数は、画面右上の `Developer Settings` をクリックし、`Retrieve this many search results:` の設定から変更できます。

### GPT-4 を使いたい

`infra/main.bicep` の `chatGptModelName` を `gpt-4` に変更してください。

## 参考資料

- [Azure-Samples/azure-search-openai-demo](https://github.com/Azure-Samples/azure-search-openai-demo)
- [support non English languages #780](https://github.com/Azure-Samples/azure-search-openai-demo/pull/780)
- [業務データを活用した AI チャットシステムワークショップ](https://asashiho.github.io/azure-search-openai-demo/#/)

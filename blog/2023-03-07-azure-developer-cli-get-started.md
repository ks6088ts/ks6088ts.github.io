---
slug: azure-developer-cli-get-started
title: Azure Developer CLI による開発プロセスの高速化
authors: ks6088ts
tags: [azure, azd]
---

実際に Azure Developer CLI を使ってみて良かった点や、参考となるサイトについて纏めます。

<!--truncate-->

# Azure Developer CLI とは

Azure Developer CLI (以下、`azd`) は、Azure 上でクラウドアプリをビルドするプロセスを高速化するオープンソースツールです。  
規定のディレクトリ構造をもつテンプレートプロジェクトを指定して、`azd` コマンドを実行することでテンプレートを Azure 上にデプロイすることができます。  
これらのテンプレートは、アプリケーションコード・IaC ファイル(`Bicep` or `Terraform`)・プロジェクト構造を記述する `azure.yaml` ファイルから構成されます。  
こちらでは簡単な使い方が紹介されています。

<iframe width="560" height="315" src="https://www.youtube.com/embed/VTk-FhJyo7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

`azd` を使うとテンプレートのアプリケーションを簡単かつ再現性のある形でデプロイすることができます。  
やりたいことに近しいプロジェクトのテンプレートを探して、そこから設定変更やソースコードの微修正していくと、開発工数が大幅に削減できます。

[Azure/awesome-azd](https://github.com/Azure/awesome-azd)には azd 関連のブログ記事や動画などの情報がまとまっています。  
`azd` 互換なテンプレートは以下のリンクから探せます。

- [Awesome AZD Templates Gallery](https://aka.ms/awesome-azd): azd 互換なテンプレートが検索可能なサイト
- [Azure Developer CLI templates](https://github.com/topics/azd-templates): GitHub で `Azure Developer CLI templates` topic がついているもの

# Azure Developer CLI のハンズオン

ハンズオンといってもツールのインストールとコマンドの実行だけなので数分で完結します。  
まずは `azd` をインストールします。  
[Azure Developer CLIをインストールする (プレビュー)](https://learn.microsoft.com/ja-jp/azure/developer/azure-developer-cli/install-azd?tabs=localinstall%2Cwindows%2Cbrew) を参考に、開発環境の OS に応じたインストール手順を実行し、`azd` コマンドが通ることを確認してください。  
たとえば Linux/macOS の場合は、

```shell title="azd のインストール"
$ curl -fsSL https://aka.ms/install-azd.sh | bash
```

でインストールできます。  
次に `azd` コマンドを使って Azure にログインし、認証情報を取得します。  
以下のコマンドを実行するとブラウザからログインできます。

```shell title="Azure にログイン"
$ azd login
Logged in to Azure.
```

適当なテンプレートを指定して `azd` で Azure にデプロイします。  
ここでは [Azure-Samples/todo-nodejs-mongo-terraform](https://github.com/Azure-Samples/todo-nodejs-mongo-terraform) を指定します。  
`azd up` でプロジェクトの初期化、プロビジョニング、デプロイを実行します。

```shell title="azd でデプロイ"
$ azd up --template todo-nodejs-mongo-terraform

Initializing a new project (azd init)

  (✓) Done: Initialized git repository
  (✓) Done: Downloading template code to: ...

? Please enter a new environment name: handson_test

? Please enter a new environment name: handson_test
? Please select an Azure Subscription to use:
? Please select an Azure location to use:  9. (Asia Pacific) Japan East (japaneast)

Provisioning Azure resources (azd provision)
Provisioning Azure resources can take some time
...
```

`--template` の指定方法は、`Azure-Samples/` 配下のサンプルであれば上記のようにレポジトリ名だけで実行できます。  
また、`https://github.com/Azure-Samples/todo-nodejs-mongo-terraform` のように URI をフルで指定する方法もあります。  
また、`azd up` は以下のコマンドを個別に実行することと等価です。

```shell
$ azd init
$ azd provision
$ azd deploy
```

公式の [VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.azure-dev) もあるので、VS Code 上の操作で `azd` の各種コマンドを実行することも可能です。

# 何が嬉しいのか

今時、真面目に・健全に新規プロジェクト立ち上げようとすると、CI/CD pipeline、dev container、vscode 設定、linter/formatter、IaC などなど、やることが多いと思います。  
ほとんどの作業は定型的な作業ではあるので、この辺を丸っと抽象化して適切なデフォルト設定をテンプレート側で与えてくれる点が嬉しいポイントだと思います。

テンプレートを取っ掛かりにして、必要な変更をソースコードに入れたり、設定値をチューニングするだけでやりたいことに早く近づけます。  
今後さらに azd 互換なテンプレートが増えればその勢いは増していきます。

この手の scaffolding ツールは既に世の中にあって、template repo を fork したり cookiecutter を使うのとほぼ等価ではあるのですが、

- 利用者は CLI で完結して作業できる
- テンプレートのディレクトリ階層の規約があるので利用者の認知負荷が低い

といった点が `azd` ならではのメリットではないかと思いました。  

この手のテンプレートは PoC とか特定の目的に閉じた小規模なものだけかと思いきや、[Azure/reliable-web-app-pattern-dotnet](https://github.com/Azure/reliable-web-app-pattern-dotnet) のように production grade なテンプレートも開発されていたりします。  
Azure ユーザーの生産性を向上させるエコシステムの発展が、より多くのことを少ない手間で実現するための一助になるのではと期待しています。

# TODO

## azd 互換プロジェクトの作成

[`azd` conventions](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/make-azd-compatible?pivots=azd-create#azd-conventions)に従ってプロジェクトを作成します。

## azd に contribute する

CLI と extension は monorepo 構成で[Azure/azure-dev](https://github.com/Azure/azure-dev)にて開発されています。
extension は TypeScript、azd 本体は Go で書かれています。

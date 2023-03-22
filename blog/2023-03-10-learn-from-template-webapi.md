---
slug: learn-from-template-webapi
title: テンプレートから学ぶ Azure ~ Web API 編 ~
authors: ks6088ts
tags: [terraform, azure, apim]
---

簡単な TODO アプリのテンプレートから Azure を学ぶシリーズ。
今回は [Azure-Samples/todo-nodejs-mongo-terraform](https://github.com/Azure-Samples/todo-nodejs-mongo-terraform)を触って勉強します。

<!--truncate-->

# [Azure-Samples/todo-nodejs-mongo-terraform](https://github.com/Azure-Samples/todo-nodejs-mongo-terraform)

## 目的

簡単な TODO アプリのテンプレートをデプロイして、実動作とソースコードを確かめつつ、Azure の基本的な機能を学びます。
アーキテクチャ図は以下の通りです。

![architecture](https://github.com/Azure-Samples/todo-nodejs-mongo-terraform/raw/main/assets/resources.png)

## デプロイ

まずは [README.md](https://github.com/Azure-Samples/todo-nodejs-mongo-terraform/blob/main/README.md) を読み、デプロイ手順を確認します。

このリポジトリは `azd` 対応なので、コマンド一発でデプロイできます。
azd については、[Azure Developer CLI による開発プロセスの高速化](./2023-03-07-azure-developer-cli-get-started.md)を参照してください。

```shell
# リポジトリを clone
git clone git@github.com:Azure-Samples/todo-nodejs-mongo-terraform.git
cd todo-nodejs-mongo-terraform

# APIM を使いたいので環境変数を設定
azd env set USE_APIM true

# デプロイ
azd up
```

以上で Azure 上にリソースが作成され、デプロイが完了します。
デプロイされた API サーバーや Web アプリにアクセスして動作確認します。

- API サーバーにアクセス(Swagger UI が開く): `https://app-api-{RESOURCE_TOKEN}.azurewebsites.net/`
- Web サーバーにアクセス(Web アプリが開く): `https://app-web-{RESOURCE_TOKEN}.azurewebsites.net/`

また、コマンドラインから動作メトリクスを確認できます。

```shell
# Azure Dashboard を開く
azd monitor --overview

# Application Insights の Live metrics stream を開く
azd monitor --live

# Application Insights の Logs を開く
azd monitor --logs
```

## コードを読む

`azd` 対応なプロジェクトは、ディレクトリ構造に規則性があるのでソースコードが読みやすいです。
一例として自分のコードの読み方を紹介します。

### IaC コードの概要をつかむ

インフラ側のリソース定義は、`infra/` 以下にあります。
[infra/main.tf](https://github.com/Azure-Samples/todo-nodejs-mongo-terraform/blob/main/infra/main.tf) がプログラムのエントリポイントになっていて、ここで定義される各種 module の実装詳細は `modules/` 以下に配置されています。

細部を読み込む前に、まずはこの main.tf を読んで全体像を把握しておきましょう。
ここでは一例として `applicationinsights` を見てみます。

```terraform
module "applicationinsights" {
  source           = "./modules/applicationinsights"
  location         = var.location
  rg_name          = azurerm_resource_group.rg.name
  environment_name = var.environment_name
  workspace_id     = module.loganalytics.LOGANALYTICS_WORKSPACE_ID
  tags             = azurerm_resource_group.rg.tags
  resource_token   = local.resource_token
}
```

ここで引数として指定されている `module.loganalytics.LOGANALYTICS_WORKSPACE_ID` に注目します。  
これは applicationinsights が loganalytics に依存していることを意味します。
すべてを頭に入れるのは大変なので、どのモジュールがどのような方向で依存を張っているのかの概要をざっくり把握しておくと、後々の細部の理解が楽になります。  
(図に書いてモジュール間の依存を矢印で書くと良いです)

Web アプリケーションと API サーバーの実装は、`modules/appservicenode/` 以下にあります。
それぞれ環境変数として参照しているパラメータから依存関係が判ります。
以下は API サーバーの設定値です。

```terraform
  app_settings = {
    "AZURE_COSMOS_CONNECTION_STRING_KEY"    = local.cosmos_connection_string_key
    "AZURE_COSMOS_DATABASE_NAME"            = module.cosmos.AZURE_COSMOS_DATABASE_NAME
    "SCM_DO_BUILD_DURING_DEPLOYMENT"        = "true"
    "AZURE_KEY_VAULT_ENDPOINT"              = module.keyvault.AZURE_KEY_VAULT_ENDPOINT
    "APPLICATIONINSIGHTS_CONNECTION_STRING" = module.applicationinsights.APPLICATIONINSIGHTS_CONNECTION_STRING
  }
```

ざっくり以下のことが分ります。

- `module.cosmos`, `AZURE_COSMOS_CONNECTION_STRING_KEY` から Cosmos DB に依存
- `AZURE_KEY_VAULT_ENDPOINT` から Key Vault に依存
- `module.applicationinsights.APPLICATIONINSIGHTS_CONNECTION_STRING` から Application Insights に依存

`azd up` で作成された各種リソースは `.azure/ENVIRONMENT_NAME/terraform.tfstate` に記録されていますので、実際に設定された個々のパラメータを確認できます。

### WIP: azure.yaml の services のビルドプロセスについて

`azd` は、`azure.yaml` に定義された `services` のビルドプロセスを自動化しています。
挙動の詳細は把握し次第追記します。

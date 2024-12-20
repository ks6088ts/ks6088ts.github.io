---
slug: configure-oidc-azure
title: GitHub Actions から OpenID Connect で Azure に接続する設定作業を Terraform で自動化する
authors: ks6088ts
tags: [azure, terraform, github]
---

<!-- textlint-disable -->

[Microsoft Azure Tech Advent Calendar 2024](https://qiita.com/advent-calendar/2024/microsoft-azure-tech) の 12/13 の投稿記事です。

本記事では、GitHub Actions から OpenID Connect で Azure に接続する設定作業を Terraform で自動化する方法についてご紹介します。

<!--truncate-->

## TL;DR

- Terraform を利用して、GitHub Actions から OpenID Connect で Azure に接続するための設定作業を自動化しました
- スクリプトと Terraform のサンプルは [こちら](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform) にて MIT ライセンスで公開しました
- GitHub Codespaces と GitHub Actions のイベントトリガーからリソースのデプロイが実行できることを確認しました

---

## 全体構成

### OpenID Connect 接続設定の自動化

GitHub Actions から OpenID Connect で Azure に接続するのに必要な設定作業を自動化する流れを示します。  
下図では、ローカル開発環境から Terraform を実行して、GitHub と Azure プラットフォーム上に必要な設定流し込むため、以下 2 つのシナリオを実行しています。
シナリオを分けて実行するのは、依存する Terraform provider が異なっていることや、ターゲットとなるプラットフォームが異なることから再利用性を高めるためです。

1. [configure_github_secrets](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/main/infra/scenarios/configure_github_secrets/README.md): GitHub 側に Environment Secret を作成する処理が含まれます。
1. [create_service_principal](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/main/infra/scenarios/create_service_principal/README.md): Terraform を使用して、Azure 側にサービスプリンシパルを作成する処理

![configure_oidc_azure.png](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/docs/images/configure_oidc_azure.png?raw=true)

### OpenID Connect 接続で GitHub Actions から Azure にリソースをデプロイ

上記の設定を行うと、GitHub Actions から OpenID Connect を利用して Azure に接続することができるようになります。
下図では、払い出された接続設定を利用して、GitHub Actions から Azure にリソースをデプロイするシナリオ (e.g. [tfstate_backend](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/main/infra/scenarios/tfstate_backend/README.md)) を実行した様子を示しています。

![deploy_tfstate_backend.png](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/docs/images/deploy_tfstate_backend.png?raw=true)

## GitHub Actions から OpenID Connect で Azure に接続する設定作業を手動で行う

### なぜ OpenID Connect を使って Azure に接続するのか

まず、`GitHub Actions から OpenID Connect で Azure に接続する` とはどういうことか説明します。

GitHub と Azure を連携させるために、ここでは GitHub Actions を利用します。GitHub Actions は、GitHub が提供するソフトウェア開発のワークフローを自動化するサービスです。例えば、GitHub リポジトリにプッシュされたコードを自動的にビルド、テスト、デプロイするような CI/CD のユースケースなどに利用されます。

Azure 上で動作するアプリケーションを GitHub Actions からテストしたりデプロイする場合、Azure に接続するための認証が必要です。Azure には様々な認証方法が提供されています。従来は、Azure のサービスプリンシパルを作成し、クライアントシークレットを使って認証する方法が一般的でした。しかし、セキュリティ上の理由から、現在では OpenID Connect を使った認証方法が推奨されています。 (ref. [GitHub Actions を使用して Azure に接続する
](https://learn.microsoft.com/ja-jp/azure/developer/github/connect-from-azure?tabs=azure-portal%2Clinux))

クライアントシークレットのような静的な認証情報は有効期限が長く、漏洩した場合のリスクが高いです。また、キーの管理も煩雑になります。  
一方で OpenID Connect を使うと、静的な認証情報を使用せず一時的なトークンで認証を行います。このトークンは有効期限が短く、アクセス元や対象リソースの権限範囲を細かく制限できるため、漏洩してもリスクが低くなります。
そのため、OpenID Connect を使った認証方法が推奨されています。

OpenID Connect を利用するメリットに関しては、[GitHub CI/CD 実践ガイド――持続可能なソフトウェア開発を支える GitHub Actions の設計と運用 エンジニア選書](https://amzn.to/3Co02xA)の`第11章 OpenID Connectによるセキュアなクラウド連携`に詳しく書かれています。

### 手動での接続設定は手間がかかるしミスが起きやすい

GitHub Actions から OpenID Connect で Azure に接続する設定作業は、手動で行うとざっくりと以下の流れになります。

**Azure Portal にて**

- アプリケーション登録する
- 登録したアプリケーションに対してフェデレーション資格情報を追加する
- ロール割り当てを行う

**GitHub にて**

- リポジトリに環境(=Environment)を作成する
- リポジトリで作成した環境上にシークレットを登録する

作業手順に関する一次情報は、[GitHub Actions を使用して Azure に接続する](https://learn.microsoft.com/azure/developer/github/connect-from-azure?tabs=azure-cli%2Clinux) にあります。  
残念なことに私はそれでもよくわからなかったので、調べてみたところ [Check! GitHub Actions で OpenID Connect(OIDC) で Azure に安全に接続する](https://zenn.dev/dzeyelid/articles/5f20acbe549666) という記事を見つけました。GUI 操作のスクリーンショット付きで具体的な手順が解説されており、とても参考になりました。

![GitHub Actions で OpenID Connect で Azure に接続する設定](https://res.cloudinary.com/zenn/image/fetch/s--jeiZgBuE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/4db01a487f4e1f7e8807f25c.png%3Fsha%3Db18c893e94c6fdeeeb28d1d181bb1d74d1ebbd8e)

手動で設定できたのは嬉しいですが、やはり手動での設定は面倒でミスが起きやすいです。実際、この作業を行う過程で何度かミスをしてしまいました。

## 面倒で繰り返す作業は自動化すべし

手動でこの作業を行うのは面倒でミスが起きやすいです。  
Azure と GitHub を使った CI/CD を含む本格的な開発環境を構築する場合、新しいプロジェクトを立ち上げるたびにこの設定作業を繰り返すことになります。
そのため、将来の自分のために自動化しておくとコストパフォーマンスが良いと感じ、自動化するモチベーションが湧きました。

### アプローチ 1. スクリプトを書いて自動化する

Azure Portal などの Web UI は、ベンダー側の親切心で見た目や操作手順が変わることがあります。スクリーンショットを使った手順書は初心者にとって非常にわかりやすい反面、UI が変わるたびに更新が必要です。一方、フロントエンドが内部的にコールしている API は基本的に後方互換性が保たれることが多いため、API を使った自動化は保守性に優れています。`GUIは変わるがAPIは変わらない`という考え方は、自動化の観点から重要です。

操作手順を自動化するアプローチとして、正攻法としては UI 操作に対応する API をドキュメントや Copilot を使って調べ、CLI のコマンドやスクリプトに書き起こすことが考えられます。

場合に依ってはドキュメントがない場合もあります。以下のようなブラウザのツールを使ってリクエスト内容をキャプチャし、そこから観測できた挙動を元にスクリプトを書くことも技術的には可能です。
(※ ただし、これはプラットフォーマが明示的に API を定義したものではないため、あまり行儀の良い方法ではなく推奨されません。)

| ブラウザ       | リンク                                                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Microsoft Edge | [ネットワーク アクティビティの検査](https://learn.microsoft.com/ja-jp/microsoft-edge/devtools-guide-chromium/network/) |
| Google Chrome  | [ネットワーク パネルの使用](https://developer.chrome.com/docs/devtools/network?hl=ja)                                  |

スクリプトへの書き起こしは一昔前まではウェブ検索して解決していましたが、今は [GitHub Copilot](https://github.com/features/copilot)にお任せすると早いです。チャットで聞くもよし、適当なファイル上でコメント補完の形で対話するもよしです。  
私は後者の手法をよく使います。やりかたは [GitHub Copilot パターン&エクササイズ > コメントからコードを生成](https://patterns.hattori.dev/ja/general/comment-to-code/) を参考にしています。シェルスクリプトで目標としていた Azure と GitHub の設定を自動化するためのスクリプトを書いてみました。

- [scripts/create-service-principal.sh](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/scripts/create-service-principal.sh): サービスプリンシパルを作成して資格情報・権限割り当てを実行するシェルスクリプト
- [scripts/configure-github-secrets.sh](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/scripts/configure-github-secrets.sh): GitHub の環境にシークレットを設定するシェルスクリプト

長ったらしいシェルスクリプトではありますが、実行環境の依存関係はコンパクトに纏まっているので身軽に使えそうです。
ただ、途中でエラーが起きたりした場合は手動で修正する必要があるので、完全な自動化とは言えません。再現性にも問題があるので他の人に自信を持って渡すことはできません。

### アプローチ 2. IaC ツールを利用して自動化する

手順が複雑で重厚長大な成果物を他者に渡す場合は IaC ツールを利用することが多いです。
シェルスクリプトに比べると書くのに手間がかかりますが、再現性や保守性が高いので他者に渡す場合は IaC ツールを利用することが多いです。
IaC ツールとしては大きく Bicep, Terraform などが考えられます。
今回のユースケースにおいては、Azure と GitHub のリソースを管理する必要があるため Terraform が適していると思います。
IaC ツール選定に迷った場合は、[Terraform と Bicep の比較](https://learn.microsoft.com/ja-jp/azure/developer/terraform/comparing-terraform-and-bicep?tabs=comparing-bicep-terraform-integration-features#infrastructure-targets) が参考になります。

## Terraform で実装する

基本的に CRUD 操作を行う Web API を提供しているプラットフォームには Terraform Provider を実装することができます。
幸い、今回ターゲットとしている各プラットフォーム向けに以下のプロバイダが提供されていますので、それを利用して設定を自動化してみます。

(仮にプロバイダが無い場合は、[2. SORACOM 向けカスタムプロバイダの実装](https://ks6088ts.github.io/blog/terraform-provider-soracom#2-soracom-%E5%90%91%E3%81%91%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%97%E3%83%AD%E3%83%90%E3%82%A4%E3%83%80%E3%81%AE%E5%AE%9F%E8%A3%85)のような形でフルスクラッチでプロバイダを実装することもできます)

| プラットフォーム             | プロバイダ                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| GitHub                       | [integrations/github](https://registry.terraform.io/providers/integrations/github/latest)  |
| Microsoft Entra ID(Azure AD) | [hashicorp/azuread](https://registry.terraform.io/providers/hashicorp/azuread/latest/docs) |
| Azure                        | [hashicorp/azurerm](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs) |

### 開発環境を整える

エディタの拡張機能による決定論的なインテリセンス、GitHub Copilot による生成 AI ベースのインテリセンス、静的解析ツールによる品質保証など、事前に開発環境を整えることで生産性が向上します。

Visual Studio Code 上で開発する場合、VS Code 拡張として以下のものをインストールすると Terraform の開発が捗ります。いずれも HashiCorp が提供しているものです。

| 拡張機能名                                 | リンク                                                                                         |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Terraform Extension for Visual Studio Code | [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform) |
| HCL Extension for Visual Studio Code       | [HashiCorp HCL](https://marketplace.visualstudio.com/items?itemName=HashiCorp.HCL)             |

### 静的解析を導入する

Terraform のコードに静的解析ツールを導入しておくと、コードの品質を保つのに役立ちます。今回は以下のツールを導入してみました。

#### **[TFLint](https://github.com/terraform-linters/tflint)**

静的解析ツール。未使用変数とかがあると教えてくれます。例えば以下のように、未使用のデータソースがあることを指摘してくれます。

```
2 issue(s) found:

Warning: data "azuread_client_config" "client_config" is declared but not used (terraform_unused_declarations)

  on scenarios/create_user_group/main.tf line 26:
  26: data "azuread_client_config" "client_config" {

Reference: https://github.com/terraform-linters/tflint-ruleset-terraform/blob/v0.2.2/docs/rules/terraform_unused_declarations.md

Warning: data "azuread_service_principal" "msgraph" is declared but not used (terraform_unused_declarations)

  on scenarios/create_user_group/main.tf line 32:
  32: data "azuread_service_principal" "msgraph" {

Reference: https://github.com/terraform-linters/tflint-ruleset-terraform/blob/v0.2.2/docs/rules/terraform_unused_declarations.md

make: *** [Makefile:52: tflint] Error 2
Error: Process completed with exit code 2.
```

#### **[Trivy](https://github.com/aquasecurity/trivy)**

Trivy はコンテナイメージの脆弱性スキャンツールですが、Terraform のコードにも適用できます。  
セキュリティに関するベストプラクティスに沿っていないコードを指摘してくれます。

#### (参考) **[tfsec](https://github.com/aquasecurity/tfsec)**

セキュリティの静的解析ツールですが、現在は非推奨で Trivy に移行することが推奨されています。  
[tfsec is joining the Trivy family #1994](https://github.com/aquasecurity/tfsec/discussions/1994) によると、tfsec は 2023 年 2 月に Aqua Security 社に買収されており、Trivy ファミリに組み込まれることが発表されています。
[tfsec から Trivy に移行した話](https://zenn.dev/acntechjp/articles/9f0e3d4813e36d#tfsec%E3%81%AE%E7%8F%BE%E7%8A%B6) や [Trivy へのマイグレーションガイド](https://github.com/aquasecurity/tfsec/blob/master/tfsec-to-trivy-migration-guide.md)が出ている状況も鑑みますと、今後は Trivy を使っていくのが良さそうです。

## どこからでも動かせるようにする

### GitHub Codespaces

ブラウザだけで動かせるとなお有難いので、GitHub Codespaces でも実行できるように Dev Container の設定も書いてみました。実際に書いた設定はこちら: [.devcontainer/devcontainer.json](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/.devcontainer/devcontainer.json)。  
[Dev Container Features](https://containers.dev/features) というコミュニティベースの拡張機能が充実していて、CLI ツールのインストール程度であれば、もはや Dockerfile すら書かなくてもよい感じです。
GitHub Codespace に対応しておけば、開発端末がなくても開発環境を構築できるので、開発環境の構築を手軽に行いたい場合に便利です。

### GitHub Actions の `workflow_dispatch`

ブラウザから GitHub Actions の手動実行を行うためには、`workflow_dispatch` イベントを利用します。
実際に書いたワークフローは [.github/workflows/deploy.yml](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/.github/workflows/deploy.yml) です。

Environment の活用方法については、[GitHub Actions で環境(Environment)をパラメーターで指定する](https://aadojo.alterbooth.com/entry/2023/07/17/150000)が参考になりました。
GitHub Actions の環境(Environment) を使うと、同様の処理を異なる環境に対して実行できます。IT 管理者が開発環境やリソースを払い出す場合にも有用なのでは？と思います。

## 実行例

実際に GitHub Actions を使用して OpenID Connect で Azure に接続する設定を自動化した Terraform (HCL) コードを実行してみます。

```shell
# リポジトリをクローン
git clone git@github.com:ks6088ts-labs/baseline-environment-on-azure-terraform.git
```

### 1. [create_service_principal](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/main/infra/scenarios/create_service_principal/README.md): サービスプリンシパルを作成し、OpenID Connect を設定して Azure に認証します。

以下の処理を Terraform で実行します。

- Microsoft Entra ID に新しいアプリケーションとサービスプリンシパルを作成
- 必要なリソースアクセス権やロールを割り当てる
- GitHub Actions 連携用のフェデレーション認証設定の払い出し
- ローカル開発用のクライアントシークレット作成

```shell
# ディレクトリに移動
cd infra/scenarios/create_service_principal

# Azure CLI でログイン
az login

# (オプション) 現在ログインしているアカウントを確認
az ad signed-in-user show

# Terraform で利用される環境変数を設定
export ARM_SUBSCRIPTION_ID=$(az account show --query id --output tsv)
export TF_VAR_service_principal_name="baseline-environment-on-azure-terraform_tf"
export TF_VAR_github_environment="tf"

# Terraformの設定を初期化
terraform init

# リソースの作成
terraform apply -auto-approve
```

想定通りリソースが作成できているか Azure Portal から確認してみます。
以下では API のアクセス許可設定が確認できます。(管理者の同意は未実施)

![api_permissions](./api_permissions.png)

GitHub 向けのフェデレーション認証設定が確認できます。

![federated_credentials](./federated_credentials.png)

アプリケーションに権限を付与するためには管理者の同意が必要です。
対象となるアプリケーションのオブジェクト ID は output で出力しておりますので、以下のコマンドで管理者の同意を実施できます。

```shell
# アプリケーションに権限を付与
application_object_id=$(terraform output -raw application_object_id)
az ad app permission admin-consent --id $application_object_id
```

### 2. [configure_github_secrets](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/main/infra/scenarios/configure_github_secrets/README.md): GitHub シークレットを設定

GitHub CLI の認証情報を利用して、以下の処理を Terraform で実行します。

- GitHub リポジトリの作成
- リポジトリに環境を作成
- 作成した環境にシークレットを設定

1 で作成した Azure の設定を利用して GitHub にシークレットを設定するため、`terraform.tfvars` に Azure の設定を記述します。

```shell
# ディレクトリに移動
cd infra/scenarios/configure_github_secrets/

# Azure CLI でログイン
az login

# (オプション) 現在ログインしているアカウントを確認
az ad signed-in-user show

# 作成したアプリケーションの情報を取得
APPLICATION_NAME="baseline-environment-on-azure-terraform_tf"
APPLICATION_ID=$(az ad sp list --display-name "$APPLICATION_NAME" --query "[0].appId" --output tsv)
SUBSCRIPTION_ID=$(az account show --query id --output tsv)
TENANT_ID=$(az account show --query tenantId --output tsv)

# terraform.tfvars に Azure の設定を記述
cat <<EOF > terraform.tfvars
create_github_repository = "false"
organization = "ks6088ts-labs"
repository_name = "baseline-environment-on-azure-terraform"
environment_name = "tf"
actions_environment_secrets = [
    {
        name  = "ARM_CLIENT_ID"
        value = "$APPLICATION_ID"
    },
    {
        name  = "ARM_SUBSCRIPTION_ID"
        value = "$SUBSCRIPTION_ID"
    },
    {
      name  = "ARM_TENANT_ID"
      value = "$TENANT_ID"
    },
    {
      name  = "ARM_USE_OIDC"
      value = "true"
    },
]
EOF
```

上記の設定を利用して、以下の処理を Terraform で実行します。
Terraform で GitHub リポジトリに環境を作成し、環境にシークレットを設定します。

```shell
# ディレクトリに移動
cd infra/scenarios/configure_github_secrets/

# GitHub CLI でログイン
gh auth login

# (オプション) 現在ログインしているアカウントを確認
gh auth status

# Terraform の初期化
terraform init

# リソースの作成
terraform apply -auto-approve
```

GitHub リポジトリに環境が作成され、環境にシークレットが設定されていることが確認できます。

![configure_github_secrets](./configure_github_secrets.png)

### 3. GitHub Actions から OpenID Connect で Azure に接続してみる

手順 1, 手順 2 で作成した設定を利用して、GitHub Actions から OpenID Connect で Azure に接続してみます。

[.github/workflows/deploy.yml](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/.github/workflows/deploy.yml) に GitHub Actions のワークフローが定義されています。

GitHub Actions では、input を受け取ることができます。以下のように `scenario` と `environment` を指定することで、デプロイ対象のシナリオと環境を選択してワークフローを実行できます。

```yaml
on:
  workflow_dispatch:
    inputs:
      # デプロイ対象のシナリオを選択
      scenario:
        type: string
        required: true
        description: "Scenario to deploy"
        default: "tfstate_backend"
      # 環境を選択
      environment:
        type: environment
        required: true
        description: "Environment to deploy"
        default: "ci"
```

上記の設定を作成すると、GitHub のウェブ UI から以下のように手動でワークフローを実行できます。

![workflow_dispatch](./workflow_dispatch.png)

実行対象の環境と、環境変数を設定します。

```yaml
environment: ${{ github.event.inputs.environment }}
env:
  ARM_CLIENT_ID: ${{ secrets.ARM_CLIENT_ID }}
  ARM_SUBSCRIPTION_ID: ${{ secrets.ARM_SUBSCRIPTION_ID }}
  ARM_TENANT_ID: ${{ secrets.ARM_TENANT_ID }}
  ARM_USE_OIDC: ${{secrets.ARM_USE_OIDC}}
```

接続に成功すると、Azure にリソースがデプロイされます。実行結果は以下のようになります。

![github_actions](./github_actions.png)

## まとめ

本記事では、GitHub Actions から OpenID Connect を利用して Azure に接続する設定を Terraform で自動化する方法をご紹介しました。  
この自動化により、開発者は環境構築の手間を省き、本来の開発業務に集中できるようになります。また、手動設定に比べてミスが減り、OpenID Connect を使った認証によりセキュリティリスクも軽減されます。  
GitHub Actions を利用して Azure にリソースをデプロイする構成は、ローカル環境からデプロイする場合と異なり、デプロイに必要な権限を GitHub Actions 側に委譲できることから、セキュリティの観点からも有用です。
事業部門が Entra ディレクトリを提供サービス用に外出ししているケースや、開発者がオペレーターを兼ねる場合など、様々なシーンで活用できると思います。

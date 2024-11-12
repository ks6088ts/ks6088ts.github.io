---
slug: configure-oidc-azure
title: GitHub Actions から OpenID Connect で Azure に接続する設定の自動化方法
authors: ks6088ts
tags: [azure, terraform, github]
---

<!-- textlint-disable -->

[Microsoft Azure Tech Advent Calendar 2024](https://qiita.com/advent-calendar/2024/microsoft-azure-tech) の 12/13 の投稿記事です。

本記事では、GitHub Actions から OpenID Connect で Azure に接続する設定の自動化方法についてご紹介します。

---

# 本記事を 3 行でまとめると

- GitHub Actions から OpenID Connect で Azure に接続する設定作業が面倒なのでシェルスクリプトや Terraform で自動化しました。
- どこからでもデプロイできるように、GitHub Codespaces や GitHub Actions から手動実行もできるようにしました。
- スクリプトと Terraform のサンプルは [https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform) にて MIT ライセンスで公開しています。

## 全体構成

### OpenID Connect 接続設定の自動化

GitHub Actions から OpenID Connect で Azure に接続する設定を Terraform で自動化した処理の流れは以下の通りです。
ローカル開発環境から、GitHub と Azure プラットフォーム上に接続に必要なリソースを作成しています。

![configure_oidc_azure.png](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/docs/images/configure_oidc_azure.png?raw=true)

### OpenID Connect 接続で GitHub Actions から Azure にリソースをデプロイ

払い出された接続設定を利用して、GitHub Actions から OpenID Connect で Azure に接続し、Azure のリソースを払い出す全体の流れは以下の通りです。

![deploy_tfstate_backend.png](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/docs/images/deploy_tfstate_backend.png?raw=true)

GitHub Actions のワークフローから、参照する環境情報を切り替えることで、異なる環境に対してデプロイを行うこともできます。

# OpenID Connect を使って Azure に接続することのメリット

まず、`「GitHub Actions から OpenID Connect で Azure に接続する」`とはどういうことか説明します。

コードをホストする GitHub と、クラウドサービスを提供する Azure は、それぞれのサービスを連携させることができます。
GitHub Actions は GitHub が提供する CI/CD サービスで、GitHub リポジトリにプッシュされたコードを自動的にビルド・テスト・デプロイすることができます。Azure 上で動作するアプリケーションを GitHub Actions からテストしたりデプロイする場合、Azure に接続するための認証が必要になります。

Azure に接続するための認証方法として、種々の方法が提供されています。従来は、Azure のサービスプリンシパルを作成して、クライアントシークレットを使って認証する方法が一般的でしたが、セキュリティ上の理由から、OpenID Connect を使って認証する方法が推奨されています。

クライアントシークレットのような静的な認証情報はえてして有効期限が長く、漏洩した場合のリスクが高いです。また、キーの管理が煩雑になることもあります。  
そこで、OpenID Connect を使って認証する方法が推奨されています。OpenID Connect を使って認証する場合、静的な認証情報を使わずに一時的なトークンを使って認証を行います。このトークンは有効期限が短く、アクセス元や対象のリソース権限範囲を細かく制限できるため、漏洩してもリスクが低いため、OpenID Connect を使って認証する方法が推奨されています。

このあたりの詳細は [GitHub CI/CD 実践ガイド――持続可能なソフトウェア開発を支える GitHub Actions の設計と運用 エンジニア選書](https://amzn.to/3Co02xA) に書かれています。

## 手動で GitHub Actions から OpenID Connect で Azure に接続する設定を行う

GitHub Actions から OpenID Connect で Azure に接続する設定作業は、手動で行うとざっくりと以下の流れになります。

**Azure Portal にて**

- アプリケーション登録する
- 登録したアプリケーションに対してフェデレーション資格情報を追加する
- ロール割り当てを行う

**GitHub にて**

- リポジトリに環境(=Environment)を作成する
- リポジトリで作成した環境上にシークレットを登録する

作業手順に関する記事は、[GitHub Actions を使用して Azure に接続する](https://learn.microsoft.com/azure/developer/github/connect-from-azure?tabs=azure-cli%2Clinux)が一次情報になります。  
恥ずかしながら私はそれでもよくわからなかったので、ググってみると[Check! GitHub Actions で OpenID Connect(OIDC) で Azure に安全に接続する](https://zenn.dev/dzeyelid/articles/5f20acbe549666)がヒットしました。GUI 操作のスクショ付きで具体的な操作手順が解説されており最高です。書いてある通り作業したらちゃんと設定できました、ありがたやありがたや。

![GitHub Actions で OpenID Connect で Azure に接続する設定](https://res.cloudinary.com/zenn/image/fetch/s--jeiZgBuE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/4db01a487f4e1f7e8807f25c.png%3Fsha%3Db18c893e94c6fdeeeb28d1d181bb1d74d1ebbd8e)

## 課題: 手動の設定作業が面倒でミスが起きやすい

手動で設定できたのが嬉しい一方で、まぁまぁやること多いし基本的に不注意な人間なので、実はこの作業で何回かミスしました。
めんどくさくて正直もう二度とやりたくない気持ちではありますが、Azure x GitHub 環境で CI/CD 含めた、いわゆるちゃんとした開発をする場合、新しくプロジェクトを立ち上げる度にこの設定作業は不可避なはずです。
こういう時こそ将来の自分に向けて自動化しておくとコスパがいい！と思い自動化するモチベーションが湧きました。

## 対策: API を使って自動化する

Azure Portal などの Web UI はベンダー側の親切心のおかげで、見た目や操作手順は変化する場合があります。
一方で、フロントエンドが内部的にコールしている API は基本的に互換性が保たれるため、API を使った自動化は保守性に優れています。

`GUI は変わるが API は変わらない` という考え方は、自動化を検討する際の技術選定の際に頭に入れておくと良いです。

### シェルスクリプトで自動化する

操作手順を自動化するアプローチとしては、正攻法としては操作に相当する API をドキュメントや Copilot を使って調べ、その API をスクリプトに書き起こすことが考えられます。
場合に依ってはドキュメントがない場合もありますので、その場合はその手順を実行した際のリクエストをキャプチャして API を調べて `curl` などで叩く手法も採ります。

| ブラウザ       | リンク                                                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Microsoft Edge | [ネットワーク アクティビティの検査](https://learn.microsoft.com/ja-jp/microsoft-edge/devtools-guide-chromium/network/) |
| Google Chrome  | [ネットワーク パネルの使用](https://developer.chrome.com/docs/devtools/network?hl=ja)                                  |

ここでは、GUI 操作と一対一対応する処理を CLI を使ってシェルスクリプトに書き起こすことを考えます。
この手の作業、一昔前までは私はググって解決していたのですが、ブラウザとエディタの切り替えがまぁまぁ思考速度を落とす原因になっておりました。
今は [GitHub Copilot](https://github.com/features/copilot)にお任せするとエディタを行き来する必要も無いですし、チャットで聞くもよし、適当なファイル上でコメント補完の形で対話するもよしです。  
私は後者の手法をよく使います。やりかたは [GitHub Copilot パターン&エクササイズ > コメントからコードを生成](https://patterns.hattori.dev/ja/general/comment-to-code/) を参考にしています。

書いてみてそれなりに自動化は出来ました。

- [scripts/create-service-principal.sh](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/scripts/create-service-principal.sh): サービスプリンシパルを作成して資格情報・権限割り当てを実行するシェルスクリプト
- [scripts/configure-github-secrets.sh](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/scripts/configure-github-secrets.sh): GitHub の環境にシークレットを設定するシェルスクリプト

GitHub Copilot のおかげでシェルスクリプトを書くのもだいぶ楽になりました。
長ったらしいシェルスクリプトではありますが、実行環境の依存関係はコンパクトに纏まっているので身軽に使えそうです。
ただ、途中でエラーが起きたりした場合は手動で修正する必要があるので、完全な自動化とは言えません。再現性にも問題があるので他の人に自信を持って渡すことはできません。

### IaC ツールを選定する

再現性とか冪等性が頭をよぎると、真っ先に IaC ツールを使いたくなります。
手順が複雑で重厚長大な成果物を他者に渡す場合、手順書にしたがって手動でやるとか、シェルスクリプトを渡すよりも、IaC ツールを使うことで再現性や冪等性を確保して渡すほうがトラブルも少なくなると思います。

ここではどの IaC ツールを使うかを検討してみます。

#### Bicep で書いてみる

Bicep は Azure のリソース管理はもちろん、拡張機能を利用すると Microsoft Graph リソースの管理もできるようです。[クイック スタート: Microsoft Graph リソースを使用して最初の Bicep ファイルを作成してデプロイする](https://learn.microsoft.com/ja-jp/graph/templates/quickstart-create-bicep-interactive-mode?tabs=CLI) が参考になります。
ただ、ドキュメントを見た感じ、リソースの作成までは流れても、削除までは統一的な操作で実施できないのが痒いポイントではないかと思います。(別途 REST API で削除しているのが気になる)

拡張機能としての口はあるので将来的に他のプラットフォームもサポートのような未来はあるかもしれませんが、2024 年 12 月現在は諸々限定的なようです。

#### Terraform (HCL) で書いてみる

[Terraform と Bicep の比較](https://learn.microsoft.com/azure/developer/terraform/comparing-terraform-and-bicep?tabs=comparing-bicep-terraform-integration-features#state-and-backend) でもマルチプラットフォーム対応を想定するなら Terraform が推奨されています。

統一的にコード管理をしたいので、今回はクロスプラットフォーム対応ができる Terraform で書いてみると良さそうです。各プラットフォーム向けに以下のプロバイダが提供されています。

<!-- table -->

| プラットフォーム             | プロバイダ                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| GitHub                       | [integrations/github](https://registry.terraform.io/providers/integrations/github/latest)  |
| Microsoft Entra ID(Azure AD) | [hashicorp/azuread](https://registry.terraform.io/providers/hashicorp/azuread/latest/docs) |
| Azure                        | [hashicorp/azurerm](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs) |

既にスクリプトがあるので、これを Terraform で書き換えてくださいと GitHub Copilot にお願いすると開発の初速は上がる場合が多いですが、コードベースがそこまで育ってない状態だと経験上あまり自分好みの書き方をしてくれない感じがあります。

結局書き方とか細かい好き嫌いを加味してコードを書き直すことが多いので、今回はまずは自分で書いてみることにしました。Visual Studio Code 上で開発する場合、VS Code 拡張として以下のものをインストールすると Terraform の開発が捗ります。いずれも HashiCorp が提供しているものです。

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform)
- [HashiCorp HCL](https://marketplace.visualstudio.com/items?itemName=HashiCorp.HCL)

自分の書くコードが信頼できないのでガードレールを敷くためにこれらもお勧めです。

**[TFLint](https://github.com/terraform-linters/tflint)**

静的解析ツール。未使用変数とかがあればこんな感じに怒ってくれる。

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

**[Tfsec](https://github.com/aquasecurity/tfsec)**

セキュリティの静的解析ツール。セキュリティに関するベストプラクティスに沿っていないコードを見つけてくれる。例えば以下のように、セキュリティに関する問題を指摘してくれます。

```
Results #1-4 HIGH Secret has plain text value (4 similar results)
```

## どこからでも使えるようにしたい

### GitHub Codespaces で動かせるようにする

ブラウザだけで動かせるとなお有難いので、GitHub Codespaces でも実行できるように Dev Container の設定も書いてみました。実際に書いた設定はこちら: [.devcontainer/devcontainer.json](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/.devcontainer/devcontainer.json)。  
[Dev Container Features](https://containers.dev/features) というコミュニティベースの拡張機能が充実していて、CLI ツールのインストール程度であれば、もはや Dockerfile すら書かなくてもよい感じです。
GitHub Codespace に対応しておけば、開発端末がなくても開発環境を構築できるので、開発環境の構築を手軽に行いたい場合に便利です。

### GitHub Actions の workflow_dispatch で手動実行できるようにする

実際に書いたワークフローはこちら: [.github/workflows/deploy.yml](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/v0.0.1/.github/workflows/deploy.yml)
Environment の活用方法については、[GitHub Actions で環境(Environment)をパラメーターで指定する](https://aadojo.alterbooth.com/entry/2023/07/17/150000)が参考になりました。

GitHub Actions の環境(Environment) を使うと、同様の処理を異なる環境に対して実行できます。IT 管理者が開発環境やリソースを払い出す場合にも有用なのでは？と思います。

## 実行例

実際に GitHub Actions を使用して OpenID Connect で Azure に接続する設定を自動化した Terraform (HCL) コードを実行してみます。
実装に際しては [Azure Provider: Authenticating using a Service Principal with Open ID Connect](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/service_principal_oidc) が参考になります。
ソースコードは [github.com/ks6088ts-labs/baseline-environment-on-azure-terraform](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform) にあります。

GitHub Codespaces での開発環境構築もサポートしたので、リポジトリの [README.md](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/main/README.md) から GitHub Codespaces のリンクをクリックすると、GitHub Codespaces で開発環境が構築されます。

ローカルから実行する場合はリポジトリをクローンします。

```shell
# リポジトリをクローン
git clone git@github.com:ks6088ts-labs/baseline-environment-on-azure-terraform.git
```

### 1. サービスプリンシパルを作成し、OpenID Connect を設定して Azure に認証します。

[create_service_principal](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/tree/main/infra/scenarios/create_service_principal) に Terraform のコード一式があります。
Microsoft Entra ID に新しいアプリケーションとサービスプリンシパルを作成し、必要なリソースアクセス権やロールを割り当てています。
GitHub Actions 連携用のフェデレーション認証設定と、ローカル開発用のクライアントシークレットも作成しています。

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

# インフラをデプロイ
terraform apply -auto-approve
```

Microsoft Entra ID に新しいアプリケーションとサービスプリンシパルが作成され、必要なリソースアクセス権やロールが割り当てられていることが確認できます。

API のアクセス許可設定が確認できます。(管理者の同意は未実施)

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

### 2. GitHub シークレットを設定

[configure_github_secrets](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/tree/main/infra/scenarios/configure_github_secrets) に Terraform のコード一式があります。
GitHub リポジトリに環境を作ってシークレットを設定する Terraform コードを書いてみました。以下はその一部です。

```hcl
# リポジトリの作成
resource "github_repository" "repository" {
  # https://stackoverflow.com/a/60231673/4457856
  count = var.create_github_repository ? 1 : 0

  name        = var.repository_name
  description = var.repository_description
  visibility  = var.repository_visibility
}

# GitHub リポジトリの環境を作成
resource "github_repository_environment" "repository_environment" {
  environment         = var.environment_name
  repository          = local.repository_name
  prevent_self_review = true
  deployment_branch_policy {
    protected_branches     = true
    custom_branch_policies = false
  }
}

# GitHub リポジトリの環境にシークレットを設定
resource "github_actions_environment_secret" "actions_environment_secret" {
  for_each = { for secret in var.actions_environment_secrets : secret.name => secret }

  repository      = local.repository_name
  environment     = github_repository_environment.repository_environment.environment
  secret_name     = each.value.name
  plaintext_value = each.value.value
}
```

上記コードを実行すると、GitHub リポジトリを作成し、リポジトリに環境を作成し、環境にシークレットを設定します。GitHub CLI の認証情報を利用します。

```shell
# ディレクトリに移動
cd baseline-environment-on-azure-terraform/infra/scenarios/configure_github_secrets/

# GitHub CLI でログイン
gh auth login

# Terraform の初期化
terraform init

# リソースの作成
terraform apply -auto-approve
# Plan: 3 to add, 0 to change, 0 to destroy.
# github_repository_environment.repository_environment: Creating...
# github_repository_environment.repository_environment: Creation complete after 1s [id=baseline-environment-on-azure-terraform:tf]
# github_actions_environment_secret.actions_environment_secret["WORLD"]: Creating...
# github_actions_environment_secret.actions_environment_secret["HELLO"]: Creating...
# github_actions_environment_secret.actions_environment_secret["WORLD"]: Creation complete after 5s [id=baseline-environment-on-azure-terraform:tf:WORLD]
# github_actions_environment_secret.actions_environment_secret["HELLO"]: Creation complete after 5s [id=baseline-environment-on-azure-terraform:tf:HELLO]

# Apply complete! Resources: 3 added, 0 changed, 0 destroyed.
```

GitHub リポジトリに環境が作成され、環境にシークレットが設定されていることが確認できます。

![configure_github_secrets](./configure_github_secrets.png)

### 3. GitHub Actions から OpenID Connect で Azure に接続してみる

1, 2 で設定は完了しているので、GitHub Actions から OpenID Connect で Azure に接続してみます。

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

### 4. 状態の管理

現状、GitHub Actions 経由での実行結果は保持されず、状態は管理できていません。
[環境設定の Override](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/blob/main/README.md#override-files) 機能を活用して、環境ごとの設定ファイルを Blob Storage に保存することで、リソースの状態管理をすることができます。

### 5. 承認フローの作成

GitHub Actions に credential を登録することで誰でもデプロイができる状況になります。
便利である反面、セキュリティ上のリスクが高まる可能性があります。
GitHub Actions の環境内のデプロイ設定には保護ルールがあり、承認が必要な場合には承認者を指定することができます。
[GitHub Actions の environments を使ってデプロイ時に承認プロセスを導入する](https://zenn.dev/ore88ore/articles/github-actions-approval-flow) が参考になります。
承認フローを作成して、デプロイの承認を必要とするようにすることで、IT 管理者のリソースの払い出しの制御にも活用できるのではないかと思います。具体的なシナリオがあれば、GitHub Actions の環境を活用して、承認フローを作成してみてください。

## 考察

本記事では GitHub Actions から OpenID Connect で Azure に接続する設定の自動化方法についてご紹介しました。
設定作業の自動化に際して、シェルスクリプトのアプローチと Terraform のアプローチを実装しました。

シェルスクリプトのアプローチは、手軽に実装できる反面、再現性や冪等性に問題がありますが、現実問題シェルスクリプトでリトライして調整すりゃいいやって現場はあるだろうとは思います。  
Terraform は冪等性や再現性が高く、コード管理もしやすいため、本番環境での利用を検討する際には有用です。事業部門が B2C なり Entra ディレクトリを提供サービス用に外出ししてるケースで、開発者がオペレーターを兼ねてる場合とかだと Terraform x GitHub Actions な構成はハマるのかもとは思いました。

諸々慣れると便利なのですが、状態管理なども突き詰めだすと、矛盾なく状態を維持する活動が結構大変になります。どこまでやるかの線引きとか、どこまで自動化するかのバランス感覚が求められるなと感じました。

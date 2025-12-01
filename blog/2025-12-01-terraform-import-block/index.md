---
slug: terraform-import-block
title: 既存クラウドリソースを Terraform import block と生成 AI を活用して効率的に Terraform コード化する方法
authors: ks6088ts
tags: [terraform, vscode, github]
---

<!-- textlint-disable -->

本記事ではデプロイ済の既存クラウドリソースから Terraform コードを効率的に作成する方法について解説します。
以下のようなシナリオを想定しています。

- クラウドリソースを手動で作成してしまったが、後から Terraform 管理下に置きたい
- 既存リソースを Terraform 管理下に置きたいが、リソース数が多く手動でコード化するのが大変

こうしたシナリオに対して、Terraform v1.5.0 で導入された import block 機能は非常に有用です。
しかし、import block 自体にはいくつかのペインポイントが存在します。
例えば、import block の id を一つ一つ調べてコード化するのが大変であったり、自動生成されるコードが冗長で可読性が低いといった課題があります。

そこで今回は、Azure 上に既にデプロイ済の Azure Container Apps で構築された Web アプリを例に、import block のいくつかのペインポイントを生成 AI を組み合わせて活用したところ、効率的に Terraform コード化を実現できることが分かったため、その手順とポイントを共有します。

<!--truncate-->

---

## TL;DR

デプロイ済の既存クラウドリソースから Terraform コードを効率的に作成する方法について解説します。
Azure 上に既にデプロイ済の Azure Container Apps で構築された Web アプリを例に、import block のいくつかのペインポイントを生成 AI を組み合わせて活用したところ、効率的に Terraform コード化を実現できました。

## Terraform での既存リソースの管理

Terraform の機能を活用して、既存のインフラリソースを管理下に置くことは、多くの組織にとって重要な課題です。
従来、`terraform import` コマンドを使用して既存リソースを Terraform の状態ファイルに追加する方法が一般的でしたが、この方法にはいくつかの制約があります。
例えば、`terraform import` コマンドはリソースを状態ファイルに追加するだけで、対応する Terraform コードを自動生成しないため、手動でコードを作成する必要があります。

そこで、Terraform v1.5.0 で導入された import block を活用することで、既存リソースの管理をより効率的に行うことが可能になりました。
v1.5.0 で導入された import block は、既存のインフラリソースを Terraform 管理下に置くための新しい方法です。
import block を使用することで、既存リソースのインポート情報を Terraform コード内に直接記述できるため、コードと状態ファイルの整合性を保ちながら管理を始めることができます。

import block の活用手順は [Import resources overview](https://developer.hashicorp.com/terraform/language/import) に一次情報が纏まっています。
[Terraform v1.5.0 からの新機能：Import Block 機能の紹介と既存ツールとの比較](https://techblog.ap-com.co.jp/entry/2023/06/12/184506) では具体的な例をあげて import block の使い方が紹介されています。

import block では、事前に以下のような import block を Terraform コードに追加します。
以下は Azure のリソースグループをインポートする例です。

```hcl
provider "azurerm" {
    features {}
}

import {
    id = "/subscriptions/YOUR_SUBSCRIPTION_ID/resourceGroups/YOUR_RESOURCE_GROUP_NAME"
    to = azurerm_resource_group.rg
}
```

id にはインポートする既存リソースの識別子を指定し、to にはインポート先のリソースタイプと名前を指定します。
その後、以下のコマンドを実行してインポートとコード生成を行います。

```bash
terraform init

terraform plan -generate-config-out=imported.tf
```

このコマンドにより、指定した既存リソースが Terraform の状態ファイルにインポートされ、対応する Terraform コードが `imported.tf` ファイルに生成されます。

## import block を活用するうえでの課題

ミニマムな例だとあまり見えてきませんが、実践投入しようとすると以下のような課題が出てきました。

- import block の id をいちいち調べてコード化するのが大変
- 自動生成されるコードはあらゆるパラメータを明示的にハードコードするため、可読性が低く、メンテナンスが難しい

以下では、これらの課題に対する解決策を紹介します。

<!-- ### import block の id を生成 AI で簡単に書き換える方法

ここでは、既に特定の Azure リソースグループ内に Azure Container Apps で構築された Web アプリが存在していることを前提とします。
その既存リソースを Terraform import block と生成 AI を活用して効率的に Terraform コード化する手順を紹介します。

まずは、以下のような import block のテンプレートを main.tf ファイルに用意します。

```hcl
provider "azurerm" {
    features {}
}

import {
    id = "/subscriptions/YOUR_SUBSCRIPTION_ID/resourceGroups/your-resource-group-name/providers/Microsoft.App/managedEnvironments/your-environment-name"
    to = azurerm_container_app_environment.env
}

... (他のリソースも同様に import block を追加) ...
```

id の部分は後ほど生成 AI を活用して埋める予定なので、ここではプレースホルダーとして適当な値を入れておきます。 -->

### 1. import block の id を効率的に書き換える方法

import block を使用する際、既存リソースの ID を一つ一つ調べてコード化する必要があります。
例えば Azure 上に Container Apps で構築された Web アプリだけでも、

- resource group
- container app environment
- container app
- log analytics workspace

の 4 つのリソースが必要であり、これらの ID を手動で調べて import block に記述するのは非常に手間がかかります。

面倒なときこそ生成 AI の出番です。必要なコンテキストを与えつつ、import block の ID を GitHub Copilot の Agent mode で書き換えることを考えます。

ID の情報を引っ張り出すところは Azure CLI などを活用して取得します。
例えば、特定のリソースグループ内の全リソース情報を取得するには、以下のコマンドを実行します。

```bash
RESOURCE_GROUP_NAME="your-resource-group-name"

az resource list \
 --resource-group $RESOURCE_GROUP_NAME \
 --output json > exported_resources.json
```

exported_resources.json には、import block に必要なリソース ID 情報が含まれています。
このファイルをコンテキストに与えながら Agent mode で以下のプロンプトを実行します。

```prompt
#file:exported_resources.json のリソース群の情報に合わせて、 #file:main.tf の import block の ID やパラメータ部分を書き換えてください。
```

これにより、main.tf ファイル内の import block の ID が自動的に既存リソースの情報に書き換えられます。

### 2. 自動生成されるコードを生成 AI でリファクタリングする方法

上記手順で main.tf を適切に書き換えたあと、以下のコマンドを実行してインポートとコード生成を行います。

```bash
terraform init

terraform plan -generate-config-out=imported.tf
```

imported.tf には、既存リソースに対応する Terraform コードが自動生成されますが、自動生成されるコードはあらゆるパラメータを明示的にハードコードしていたり、provider にも依りますが obsolete なパラメータが含まれていたりと、可読性が低く、メンテナンスが難しい場合があります。

ここでも生成 AI の出番です。imported.tf をコンテキストに与えながら、以下のようなプロンプトで生成 AI にリファクタリングを依頼します。

```prompt
#file:imported.tf を以下の観点に従ってリファクタしてください。

- 明示的に指定する必要のない Optional な変数指定は削除
- 必須パラメータでハードコードされた変数は #file:variables.tf に定義して変数化し、尤もらしいデフォルト値を設定
- #file:outputs.tf に出力変数として外部からアクセスできると利便性のあるもののみを限定して定義
```

必要であれば Terraform MCP Server などで知識を補完する仕組みを用意しても良いですが、呼ばれたり呼ばれなかったり、挙動が悩ましいこともあったので、LLM 単体の知識では対応できない最新の情報に追従する必要があるとか、本当に必要な場合に限定して活用するのが現時点では良いと思います。

変数定義や出力変数の設計は人それぞれ好みが分かれる部分でもあるので、チーム内での合意形成が重要です。
ひとまず再利用できそうなクオリティで variable.tf や outputs.tf が生成できたら OK として、あとは手動で微調整するのが現実的かと思います。

プロンプトは自分がイケてないと思う部分を明示的に言語化して伝えるのがポイントです。多分ここが経験値に依存する部分で、良いプロンプトを作るには泥にまみれる経験が必要に思いました。(私もまだ泥経験が足りていない気がします…)

大規模であれば module 化も検討すると良いと思いますが、一度でたくさんのことを依頼すると大体の場合うまくいかないので、スコープをコントロールして成果物の質のゆらぎを制御することが重要に思います。一旦近視眼的に小さなタスクに分解して対応して、良質な小さい成果物を積み上げていく方が最終的な品質は高くなることが多いです。
こうして生成 AI を活用することで、import block のいくつかのペインポイントを解消し、効率的に Terraform コード化を実現できました。

## まとめ

本記事では、Terraform import block と生成 AI を組み合わせて活用することで、既存クラウドリソースから効率的に Terraform コードを作成する方法について解説しました。
import block の ID 書き換えや自動生成コードのリファクタリングに生成 AI を活用することで、手動での作業負荷を大幅に軽減できることが分かりました。

作業を自動化するにあたり、一段抽象化して考えると以下のポイントが挙げられます。

- 必要なコンテキスト情報が何かを明確にする
  - 普段自分が開発するときに参照する情報や意識していることを洗い出してシステム化する
- 必要なコンテキストを決定論的なツールを駆使して収集する
  - 決定論的なツールの方が再現性が高くコストも低いため最大限活用する
  - 例: Azure CLI や AWS CLI などで既存リソース情報を JSON 形式でエクスポート
- 小さなタスクに分解して生成 AI に依頼する
  - 例: import block の ID 書き換え、コードのリファクタリングでタスクを分割

リファクタ x 生成 AI のパターンは Terraform に限らず様々な場面で応用できると思います。
生成 AI との付き合い方としては、「ドカッと AI に聞けばいい」スタンスだと制御が効かなかったり再現性に乏しいパルプンテを唱えていることと同義ですので、多少手間のかかることを厭わず、コントロール可能な小さいタスクに分解して依頼することが重要です。

そのうえで、必要十分なコンテキストを決定論的なツールを駆使して収集することが重要です。
Azure CLI や AWS CLI などで既存リソース情報を JSON 形式でエクスポートすることができれば、生成 AI に与えるコンテキストとして非常に有用です。

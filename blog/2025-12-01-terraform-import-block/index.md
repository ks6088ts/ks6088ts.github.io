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

- Terraform v1.5.0+ の `import block` と `-generate-config-out` オプションで既存リソースのコード生成が可能
- Azure CLI などで取得したリソース情報を生成 AI に与えることで、import block の ID 記述を自動化
- 自動生成された冗長なコードを生成 AI でリファクタリングし、可読性を向上
- [Azure Portal 経由でデプロイした既存リソースを、Terraform 管理下に移行する例](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/tree/main/infra/scenarios/create_container_app) を公開

## Terraform での既存リソースの管理

Terraform の機能を活用して、既存のインフラリソースを管理下に置くことは、多くの組織にとって重要な課題です。
従来、[terraform import コマンド](https://developer.hashicorp.com/terraform/cli/commands/import) を使用して既存リソースを Terraform の状態ファイルに追加する方法が一般的でしたが、この方法にはいくつかの制約があります。
例えば、`terraform import` コマンドはリソースを状態ファイルに追加するだけで、対応する Terraform コードを自動生成しないため、手動でコードを作成する必要があります。

そこで、Terraform v1.5.0 で導入された import block を活用することで、既存リソースの管理を HCL コードとして自動生成して効率的に行うことが可能になりました。
v1.5.0 で導入された import block は、既存のインフラリソースを Terraform 管理下に置くための新しい方法です。
import block を使用することで、既存リソースのインポート情報を Terraform コード内に直接記述できるため、コードと状態ファイルの整合性を保ちながら管理を始めることができます。

`import block` の活用手順は [Import resources overview](https://developer.hashicorp.com/terraform/language/import) に一次情報が纏まっています。また、[Terraform v1.5.0 からの新機能：Import Block 機能の紹介と既存ツールとの比較](https://techblog.ap-com.co.jp/entry/2023/06/12/184506) では具体的な例をあげて import block の使い方が紹介されています。

`import block` では、事前に以下のような `import block` を Terraform コードに追加します。

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

`-generate-config-out` オプションを指定することで、import block で指定した既存リソースに対応する Terraform コードが `imported.tf` ファイルに生成されます。なお、実際のインポート（状態ファイルへの追加）は `terraform apply` を実行した際に行われます。

## import block を活用するうえでの課題

シンプルな例では分かりにくいですが、実際のプロジェクトで活用しようとすると以下のような課題に直面します。

1. **ID の調査コスト**: リソースごとに import block の `id` を調べてコード化する作業が煩雑
2. **生成コードの可読性**: 自動生成されるコードはすべてのパラメータをハードコードするため、冗長で保守性が低い

以下では、生成 AI を活用してこれらの課題を解決する方法を紹介します。

### 1. import block の ID を生成 AI で自動記述する

`import block` を使用する際、既存リソースの ID を調べてコード化する必要があります。
例えば Azure Container Apps で構築された Web アプリでは、以下のリソースが必要です。

- Resource Group
- Container Apps Environment
- Container App
- Log Analytics Workspace

これらの ID を手動で調べて import block に記述するのは手間がかかります。

この手間を生成 AI に肩代わりさせるため、ここでは、GitHub Copilot を活用します。まず、Azure CLI を使用してリソース情報を取得します。

```bash
RESOURCE_GROUP_NAME="your-resource-group-name"

az resource list \
  --resource-group $RESOURCE_GROUP_NAME \
  --output json > exported_resources.json
```

`exported_resources.json` には、各リソースの `id` フィールドが含まれており、これが import block に必要な情報です。
このファイルをコンテキストとして GitHub Copilot の Agent mode に与え、以下のプロンプトを実行します。

```prompt
#file:exported_resources.json のリソース群の情報に合わせて、#file:main.tf の import block の ID やパラメータ部分を書き換えてください。
```

これにより、JSON から抽出したリソース ID が main.tf の import block に自動的に反映されます。
比較的小さいスコープに絞った操作であれば、他の生成 AI ツールでも同様の効果が得られることが多いです。

### 2. 自動生成コードを生成 AI でリファクタリングする

上記の手順で main.tf を書き換えた後、以下のコマンドでコードを生成します。

```bash
terraform plan -generate-config-out=imported.tf
```

生成された `imported.tf` には既存リソースに対応する Terraform コードが含まれますが、以下の問題があります。

- すべてのパラメータが明示的にハードコードされている
- Provider によっては非推奨（deprecated）なパラメータが含まれる
- 可読性が低く、保守が困難

明示的にハードコードされていることはわかりやすい反面、実際の運用では不要なパラメータが多く含まれていることが一般的です。また、provider の仕様変更により非推奨となったパラメータが含まれている場合もあります。特に意識しないで済むパラメータは尤もらしいデフォルト値が設定されていることが多いため、コードから削除しても問題ありません。

今度はリファクタのために生成 AI を活用します。`imported.tf` をコンテキストとして与え、以下のプロンプトでリファクタリングを依頼します。

```prompt
#file:imported.tf を以下の観点でリファクタリングしてください。

- 明示的に指定する必要のない Optional なパラメータは削除
- ハードコードされた必須パラメータは #file:variables.tf に変数として定義し、適切なデフォルト値を設定
- #file:outputs.tf には外部から参照する必要があるものに限定して出力変数を定義
```

補足として、[Terraform MCP Server](https://github.com/hashicorp/terraform-mcp-server) などで LLM の知識を補完することも可能ですが、挙動が安定しない場合があります。最新の Provider 仕様への追従が必要な場合など、本当に必要なケースに限定して活用するのが現時点では現実的です。

変数定義や出力変数の設計はチームによって方針が異なるため、事前に合意形成しておくことが重要です。
生成 AI による出力は「たたき台」として捉え、最終的には手動で微調整するのが現実的なアプローチです。

効果的なプロンプトを作成するポイントは、改善したい点を明確に言語化することです。「何が自分の文脈でイケてないと感じるのか」を明示的に言語化して伝えることで、生成 AI の出力品質が向上します。

大規模なインフラでは module 化も検討すべきですが、一度に多くのことを依頼すると出力品質が不安定になります。タスクを小さく分割し、品質の高い成果物を積み上げていく方が、最終的な品質は高くなります。import 直後のコードには多くを求めず、まずは基本的なリファクタリングから始める方が動き出しやすいです。

## まとめ

本記事では、Terraform import block と生成 AI を組み合わせて、既存クラウドリソースから効率的に Terraform コードを作成する方法を解説しました。Azure Portal からコンテナアプリをデプロイして、上記プロセスを経て Terraform 管理下に移行する具体的な作業詳細は [こちら](https://github.com/ks6088ts-labs/baseline-environment-on-azure-terraform/tree/main/infra/scenarios/create_container_app) で公開しています。

今回のリファクタを通じて、個人的に感じた生成 AI を効果的に活用するためのポイントを整理します。

1. **必要なコンテキストを明確化する**

   - 自分が手動で作業する際に参照する情報を洗い出す

2. **決定論的なツールでコンテキストを収集する**

   - 再現性が高くコストも低い決定論的なツールを最大限活用する
   - 例: `az resource list` で既存リソース情報を JSON でエクスポート

3. **タスクを小さく分割して依頼する**
   - import block の ID 記述とコードのリファクタリングを分けて実行

こうした考え方は Terraform に限らず、既存コードのリファクタリングや移行作業など様々な場面でも適用できると思います。
生成 AI を効果的に活用するには、「丸投げ」ではなくコントロール可能な小さいタスクに分解することが重要です。また、CLI ツールなどで収集した決定論的なデータをコンテキストとして与えることで、出力の品質と再現性が向上し、自分のコンテキストに即した成果物を得やすくなります。

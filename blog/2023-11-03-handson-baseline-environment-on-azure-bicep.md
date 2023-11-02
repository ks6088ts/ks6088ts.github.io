---
slug: handson-baseline-environment-on-azure-bicep
title: ks6088ts-labs/baseline-environment-on-azure-bicep のハンズオン
authors: ks6088ts
tags: [azure, iac, bicep]
---

Bicep のサンプルコードをまとめた [ks6088ts-labs/baseline-environment-on-azure-bicep](https://github.com/ks6088ts-labs/baseline-environment-on-azure-bicep) の利用方法をまとめます。

<!--truncate-->

## 開発環境の準備

ハンズオンを始める前に、お使いの開発マシンに次の環境を準備します。

- [Azure CLI](https://learn.microsoft.com/ja-jp/cli/azure/install-azure-cli)
- [Bicep](https://learn.microsoft.com/ja-jp/azure/azure-resource-manager/bicep/install#azure-cli)
- [GNU Make](https://www.gnu.org/software/make/)

以下の環境で動作確認しました。

```shell
❯ az version
{
  "azure-cli": "2.51.0",
  "azure-cli-core": "2.51.0",
  "azure-cli-telemetry": "1.1.0",
  "extensions": {
    "azure-iot": "0.22.0",
    "containerapp": "0.3.41"
  }
}

❯ az bicep version
Bicep CLI version 0.22.6 (d62b94db31)
```

本ハンズオンでは Azure の環境作成と Bicep のサンプルシナリオのデプロイに Azure CLI と Bicep を利用します。また、各種操作をまとめたコマンドを実行するためのタスクランナーとして Makefile を利用します。  
Bicep パラメータファイルを利用しますので、Bicep CLI バージョン 0.18.4 以降および Azure CLI バージョン 2.47.0 以降であることを確認ください。  
ref. [Bicep デプロイ用のパラメーターファイルを作成する](https://learn.microsoft.com/ja-jp/azure/azure-resource-manager/bicep/parameter-files?tabs=Bicep)

## ハンズオン

リポジトリをクローンして `infra/` に移動します。

```shell
# clone repository
git clone https://github.com/ks6088ts-labs/baseline-environment-on-azure-bicep.git
cd baseline-environment-on-azure-bicep/infra
```

シナリオごとにディレクトリが分けられているため、以下のコマンドで各シナリオのテンプレートをデプロイできます。

```shell
# シナリオ名は infra/scenarios/* のディレクトリ名と一致しています
# 以下では実行例として aoai-apim シナリオをデプロイします。
SCENARIO=aoai-apim
make deployment-create SCENARIO=$SCENARIO
```

make で実際に実行しているコマンドは以下の通りです。

```shell
# 実行コマンド
az deployment group create \
    --resource-group rg-aoai-apim \
    --template-file scenarios/aoai-apim/main.bicep \
    --parameters scenarios/aoai-apim/main.parameters.bicepparam
```

### 動作確認

- Azure Portal にて `rg-aoai-apim` が作成されている
- API Management, Azure OpenAI リソースが生成されている
- 各種パラメータ(SKU, tags, モデル, etc)が期待値通りである

## 参考資料

- [ks6088ts-labs/baseline-environment-on-azure-bicep](https://github.com/ks6088ts-labs/baseline-environment-on-azure-bicep)
- [Azure-Samples/aks-openai](https://github.com/Azure-Samples/aks-openai)
- [Azure/azure-quickstart-templates](https://github.com/Azure/azure-quickstart-templates)
- [【L300-L400】Infrastructure as Code Bicep を使った IaC の実現](https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fdownload.microsoft.com%2Fdownload%2F3%2Ff%2F5%2F3f50ffe5-acba-4651-a408-db8a912dcdf9%2FIaC_realized_in_Bicep.pptx&wdOrigin=BROWSELINK)
- [[AWS Black Belt Online Seminar] AWS Cloud Development Kit (CDK)](https://pages.awscloud.com/rs/112-TZM-766/images/20200303_BlackBelt_CDK.pdf)
- [What we leaned about CDK from developing BLEA](https://speakerdeck.com/ohmura/what-we-leaned-about-cdk-from-developing-blea)

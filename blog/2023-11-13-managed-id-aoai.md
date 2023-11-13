---
slug: aoai-private-endpoint-managed-id
title: AOAI にプライベートエンドポイントから接続し、VM のマネージド ID を利用して API Key 無しで AOAI を呼び出す
authors: ks6088ts
tags: [azure, aoai, bicep, iac]
---

本記事では以下の 2 つのシナリオをハンズオン形式で説明します。

1. AOAI にプライベートエンドポイントから接続する方法
1. VM のマネージド ID を利用して API Key 無しで AOAI を呼び出す方法

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

本ハンズオンでは Azure OpenAI Service にプライベートエンドポイントから接続する動作確認を VM から行います。

## 事前準備

リポジトリをクローンして `infra/` に移動します。

```shell
# clone repository
git clone https://github.com/ks6088ts-labs/baseline-environment-on-azure-bicep.git
cd baseline-environment-on-azure-bicep/infra
```

シナリオごとにディレクトリが分けられているため、以下のコマンドで各シナリオのテンプレートをデプロイできます。  
本記事では example シナリオを使って説明します。

```shell
# deploy example resource
make deployment-create SCENARIO=example
```

(FIXME: デフォルトだと関係のない不要なリソースもデプロイされてしまいますので、必要に応じて .bicepparam のフラグ設定を書き換えてください。今回は説明のため全部デプロイしてしまいます。)

## 1. AOAI にプライベートエンドポイントから接続する方法

Azure Portal からの操作方法は [Azure OpenAI にプライベートエンドポイント（Private Endpoint）を設定して東日本リージョンの仮想ネットワークのみから使う](https://blog.jbs.co.jp/entry/2023/04/07/173940) が詳しいです。
今回は Bicep コードで構築済で、Private Endpoint 接続に関連するリソースは、[baseline-environment-on-azure-bicep/infra/modules/virtualNetwork.bicep](https://github.com/ks6088ts-labs/baseline-environment-on-azure-bicep/blob/main/infra/modules/virtualNetwork.bicep) の `openAiPrivateDnsZone `, `openAiPrivateDnsZoneVirtualNetworkLink`, `openAiPrivateEndpoint`, `openAiPrivateDnsZoneGroupName` が該当します。

こちらの環境で VM に SSH でログインして Azure OpenAI Service にプライベートエンドポイントから接続出来ていることを確認します。  
以下のように `nslookup` の結果を見るとプライベートアドレスが返ってきます。  
ref. [Azure OpenAI Service にプライベートエンドポイントから接続する](https://zenn.dev/microsoft/articles/198989f60eba61#vm%E3%81%B8rdp%E6%8E%A5%E7%B6%9A)

```shell
azadmin@TestVm:~$ nslookup  your-aoai-name.openai.azure.com
Server:         127.0.0.53
Address:        127.0.0.53#53

Non-authoritative answer:
your-aoai-name.openai.azure.com    canonical name = your-aoai-name.privatelink.openai.azure.com.
Name:   your-aoai-name.privatelink.openai.azure.com
Address: 10.3.1.5
```

## 2. VM のマネージド ID を利用して API Key 無しで AOAI を呼び出す方法

手順は以下の通りです。

1. VM のシステム割り当てマネージド ID を有効にする (今回は Bicep 側で既に有効化しています。参考資料は [Azure portal を使用して Azure VM で Azure リソースのマネージド ID を構成する](https://learn.microsoft.com/ja-jp/entra/identity/managed-identities-azure-resources/qs-configure-portal-windows-vm))
2. VM のシステム割り当てマネージド ID に対して AOAI リソースの呼び出し権限を割り当てる (Azure Portal から AOAI リソースを開き、IAM > Add role assignment > `Cognitive Services OpenAI User` を選び、割当先として VM のマネージド ID を指定します。参考: [マネージド ID を使用して Azure OpenAI Service を構成する方法](https://learn.microsoft.com/ja-jp/azure/ai-services/openai/how-to/managed-identity))
3. 以下コマンドで API Key 無しに呼び出しができることを確認する

```shell
# 仮想環境の準備
python3 -m venv .venv
source .venv/bin/activate
pip install azure-identity openai==0.28
```

`python` を実行し REPL 環境で以下のコードを逐次実行します。
リソース名などは適宜読み替えてください。

```python
import openai
from azure.identity import DefaultAzureCredential

credential = DefaultAzureCredential()
token = credential.get_token("https://cognitiveservices.azure.com/.default")

openai.api_type = "azure_ad"
openai.api_key = token.token
openai.api_version = "2023-07-01-preview"
openai.api_base = "https://your-aoai.openai.azure.com"

response = openai.ChatCompletion.create(
  engine="gpt-35-turbo",
  messages = [
    {"role":"user","content":"Hello"},
  ],
  temperature=0,
  max_tokens=800,
  top_p=0.95,
  frequency_penalty=0,
  presence_penalty=0,
  stop=None)

# 確認
response
```

## 参考資料

- [ks6088ts-labs/baseline-environment-on-azure-bicep](https://github.com/ks6088ts-labs/baseline-environment-on-azure-bicep)

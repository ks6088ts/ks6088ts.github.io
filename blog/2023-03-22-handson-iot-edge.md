---
slug: handson-iot-edge
title: Azure IoT Edge を用いたハンズオン
authors: ks6088ts
tags: [azure, iot-edge]
---

Azure IoT Edge を使ったハンズオンをしました。
基礎的な検証に必要な情報のリンクをまとめます。

<!--truncate-->

# 開発環境の構築

## Prerequisites

- Docker
- Visual Studio Code
- Azure
- Azure CLI

## Azure リソース構築

### Azure CLI

サービス側のリソースとして、Azure IoT Hub, Azure Container Registry を作成します。

```shell
# Parameters
LOCATION="japaneast"
RESOURCE_GROUP_NAME="handson_iotedge"
IOTHUB_NAME="iothub0322"
CONTAINER_REGISTRY_NAME="acr0322"
DEVICE_ID="myEdgeDevice"

# create resource group
az group create \
    --name $RESOURCE_GROUP_NAME \
    --location $LOCATION

# create Azure IoT Hub
az iot hub create \
    --resource-group $RESOURCE_GROUP_NAME \
    --name $IOTHUB_NAME \
    --sku F1 \
    --partition-count 2

# create device identity in IoT Hub
az iot hub device-identity create \
    --device-id $DEVICE_ID \
    --edge-enabled \
    --hub-name $IOTHUB_NAME

# create Azure Container Registry
# ref. https://learn.microsoft.com/ja-jp/azure/container-registry/container-registry-get-started-azure-cli#create-a-container-registry
az acr create \
    --resource-group $RESOURCE_GROUP_NAME \
    --name $CONTAINER_REGISTRY_NAME \
    --sku Basic \
    --admin-enabled true

# copy connection string for creating VM later.
CONNECTION_STRING=$(az iot hub device-identity connection-string show --device-id $DEVICE_ID --hub-name $IOTHUB_NAME -o tsv)
```

エッジ側のリソースとして、仮想マシン上にアプリケーションをデプロイします。  
Azure IoT Edge によるアプリケーションのデプロイでは、エッジ側にコンテナランタイムやエージェントのインストールが必要になります。  
[クイック スタート:初めての IoT Edge モジュールを Linux 仮想デバイスにデプロイする / IoT Edge デバイスを展開する](https://learn.microsoft.com/ja-jp/azure/iot-edge/quickstart-linux?view=iotedge-1.4#deploy-the-iot-edge-device)に記載されている ARM テンプレートを利用して、必要な依存関係が解決された仮想マシンを以下のコマンドでデプロイします。

```shell
# Parameters
LOCATION="japaneast"
RESOURCE_GROUP_NAME="handson_iotedge_device"

# create resource group
az group create \
    --name $RESOURCE_GROUP_NAME \
    --location $LOCATION

# create VM instance via Azure Portal
#   1. Go to `Deploy a custom template` at Azure Portal
#   2. Go to `Build your own template in the editor` to paste template at `https://raw.githubusercontent.com/Azure/iotedge-vm-deploy/1.4/edgeDeploy.json`
#   3. Fill in the parameters and create VM
```

仮想マシン上では、以下のように `iotedge` コマンドを用いて状態の確認ができます。

```shell
# login to VM via SSH with the password specified above
ssh adminUser@"$VM_NAME.$LOCATION".cloudapp.azure.com

sudo iotedge -h
sudo iotedge system status
sudo iotedge system logs
sudo iotedge list
sudo iotedge logs <module> -f
```

### Terraform

WIP

# 開発

## IoT Edge Module 開発

IoT Edge Module としてエッジに配信するための Docker イメージを作成します。Visual Studio Code 拡張機能を入れて GUI 操作で簡単にデプロイできます。  
操作手順は [チュートリアル: Linux コンテナーを使用して IoT Edge モジュールを開発する](https://learn.microsoft.com/ja-jp/azure/iot-edge/tutorial-develop-for-linux?view=iotedge-1.4) を参照ください。
各言語ごとのチュートリアルは、例えば Python の場合 [チュートリアル: Linux コンテナーを使用して Python IoT Edge モジュールを開発してデプロイする](https://learn.microsoft.com/ja-jp/azure/iot-edge/tutorial-python-module?view=iotedge-1.4) が参考になります。

### Azure Container Registry の接続設定

Azure Container Registry に Docker image を push するため、以下の設定ファイルを作成します。

```shell
# create .env corresponding to your Azure Container Registry
cat .env
CONTAINER_REGISTRY_ADDRESS="YOUR_CONTAINER_REGISTRY.azurecr.io"
CONTAINER_REGISTRY_USERNAME="YOUR_USERNAME"
CONTAINER_REGISTRY_PASSWORD="YOUR_PASSWORD"
```

設定情報は、Azure Portal の `Azure Container Registry > Settings > Access Keys` から確認できます。  
ACR にログインするため、以下のコマンドを実行します。

```shell
az acr login --name $CONTAINER_REGISTRY_NAME
```

### IoT Edge Module の Build & Push

1. [Azure IoT Hub の VSCode 拡張](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-toolkit)をインストール
1. コマンドパレットを開き、`Azure IoT Hub : Select IoT Hub` から対象となる IoT Hub を選択
1. VSCode の Explorer にて `deployment.template.json` を右クリックし、`Build and Push IoT Edge Solution` を選択し、Docker Image の Build と ACR への Push が実行される
1. 成功すると、ACR の Repository にコンテナイメージが追加される

### IoT Module のデプロイ

1. VSCode の Explorer の `AZURE IOT HUB` タブの対象デバイスを右クリックし `Create Deployment for Single Device` を選択
1. `config/deployment.json` を選択して IoT Edge Module を転送

Azure Portal の `Azure IoT Hub > IoT Edge` から適切に IoT Edge Module が設定されているか確認することができます。  
または、転送先の Edge から以下のコマンドで IoT Edge Module の起動状態を確認できます。

```shell
sudo iotedge list
```

# References

- [Hands on workshop / Azure IoT Edge #1 - Azure IoT Edge について](https://www.youtube.com/watch?v=UsxycuFpC8c&list=PLSmINpYYRBsO4Es9FxVfKg6n4e3QdFbcs)

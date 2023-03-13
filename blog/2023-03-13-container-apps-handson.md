---
slug: container-apps-handson
title: Azure Container Apps ハンズオン
authors: ks6088ts
tags: [azure, container]
---

Azure Container Apps を使ってマルチコンテナアプリケーションのハンズオンをしました。

<!--truncate-->

# Azure Container Apps を使ってみる

Azure Container Apps は Kubernetes の実装詳細を隠蔽し、簡単にマルチコンテナアプリケーションをデプロイできるサービスです。  
素の Kubernetes を使うとケアしなければならなかったことが、Azure Container Apps によって隠蔽されていて、やりたいことを実現するために必要な知識が少なくなっています。  
サービスの詳細は [Azure Container Apps の概要](https://learn.microsoft.com/ja-jp/azure/container-apps/overview) にあります。  

## ハンズオン

個人的には座学よりは手を動かしたほうが理解が早いので、[Azureコンテナアプリケーション開発](https://amzn.to/3lgDTca) を買ってハンズオンをしてみました。

『Azureコンテナアプリケーション開発』（技術評論社，2023年）のサンプルコードは [github.com/gihyo-book/azure-container-dev-book](https://github.com/gihyo-book/azure-container-dev-book) にあります。  
dev container もあるので、VS Code で開くと環境が一気に整います。  
ハンズオンで実行する Azure CLI コマンドは [azure-container-dev-book/apps/part3/README.azcli](https://github.com/gihyo-book/azure-container-dev-book/blob/main/apps/part3/README.azcli) にあるので、dev container から逐次実行して動作確認しました。

コンテナアプリケーションのバージョン管理やアップデート戦略などの解説もあり、Azure Container Apps の概要を知るのには十分な内容だと思いました。
Kubernetes の場合はサービスメッシュを導入してトラフィックコントロールするところが Azure Container Apps では簡単にできますし、
カナリアリリースやリビジョン管理など、マルチコンテナアプリケーションの開発に必要な機能が揃っていることを理解できました。

## 参考リンク

- [Azure Container Appsを試してみた](https://techblog.ap-com.co.jp/entry/2021/11/03/093821)
  - Azure Portal から試した例
- [TerraformでAzure Container Appsがサポートされたので爆速でデプロイする](https://techblog.ap-com.co.jp/entry/2023/02/10/155135)
  - Terraform でデプロイした例。AzureRM Provider の v.3.43.0 からサポートされてすぐに記事が出ていて非常に助かりました。
- [Azure Container AppsでCI/CD(GitHub Actions編)](https://techblog.ap-com.co.jp/entry/2022/09/01/120000)
  - GitHub Actionsでコンテナイメージをビルドして ACR へ格納し、そのイメージをContainer Appsへデプロイする例
- [Azure-Samples/todo-nodejs-mongo-aca](https://github.com/Azure-Samples/todo-nodejs-mongo-aca)
  - Azure Developer CLI でデプロイできる ACA を使ったサンプルアプリケーション

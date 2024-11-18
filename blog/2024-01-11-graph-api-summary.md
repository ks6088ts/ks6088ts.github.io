---
slug: graph-api-summary
title: Microsoft Graph API 関連情報のまとめ
authors: ks6088ts
tags: [microsoft-graph]
---

Microsoft Graph API を触る必要が出てきたので、関連情報をまとめておきます。

<!--truncate-->

## 概要を把握する

[MS Learn / Microsoft Graph とは](https://learn.microsoft.com/ja-jp/training/modules/msgraph-intro-overview/) で Microsoft Graph API の概要が説明されています。
Microsoft Graph API の概要や、Microsoft Graph API を使うために必要なアプリの登録の手順などが説明されています。

## 使ってみる

ある程度概要が理解出来たら [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer) で実際に Microsoft Graph API を試してみます。
Graph Explorer は、ブラウザから Graph API を実行して簡単に試すことができるツールです。

## アプリの登録

開発者向けの情報は [Microsoft Graph ドキュメント](https://learn.microsoft.com/ja-jp/graph/) や [Microsoft Developer/ Microsoft Graph](https://developer.microsoft.com/en-us/graph#get-started) にまとまっています。Microsoft Graph API の概要、チュートリアル、リファレンス、サンプルなどを辿ることができます。

[Microsoft Graph のアクセス許可と同意を理解する](https://learn.microsoft.com/ja-jp/training/modules/msgraph-javascript-app/3-understand-permissions) では、Microsoft Graph API を使うために必要なアプリの登録の手順が説明されています。アプリの登録は [Azure Portal](https://portal.azure.com/) から行います。

API リクエストの外部仕様を理解出来たら、実際に Web アプリケーションを作成します。
[Microsoft Graph ツールキットを使ってアプリを開発](https://learn.microsoft.com/ja-jp/training/paths/m365-msgraph-toolkit/) では、Microsoft Graph API を使って Web アプリケーションを作成する方法が説明されています。

## 開発

Microsoft Graph API には、サービスごとに API 呼び出しの制限があります。[Microsoft Graph サービス固有の調整制限](https://learn.microsoft.com/ja-jp/graph/throttling-limits) には、各サービスの制限がまとめられています。Microsoft Graph API を利用する際は、この制限に注意してください。

[github.com/microsoftgraph/msgraph-metadata](https://github.com/microsoftgraph/msgraph-metadata) には、Microsoft Graph API のメタデータがまとめられています。Microsoft Graph API リファレンスは [Microsoft Graph REST API v1.0 endpoint reference](https://docs.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0) にあります。

## 参考資料

<!-- table -->

| タイトル                                                                                                        | ひとこと                                                                                           |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Microsoft Teams のチーム ID、チャネル ID の確認方法](https://qiita.com/yamad365/items/e480f77e9102b132d258)    | Graph API で情報が必要になるが、どうやって取得するのかわからないときに参考になった                 |
| [訳あって Microsoft Graph API 調べてみた](https://qiita.com/massie_g/items/fe7540161aa4a5f86bf5)                | Microsoft Graph API の概要と、アプリの登録の一連の流れが明快に説明されていてキャッチアップに使える |
| [Microsoft Graph API Tutorial Series](https://www.youtube.com/playlist?list=PL3JVwFmb_BnT9Ti0MMRj5nPF7XoN-4MQx) | Microsoft Graph API のチュートリアル動画                                                           |
| [Microsoft Graph チュートリアル](https://learn.microsoft.com/ja-jp/graph/tutorials?view=graph-rest-1.0)         | Microsoft Graph API のチュートリアル                                                               |
| [github.com/microsoftgraph](https://github.com/microsoftgraph)                                                  | Microsoft Graph 関連の GitHub リポジトリ                                                           |
| [ひと目でわかる Microsoft Entra ID](https://amzn.to/48J2DNo)                                                    | 第 12 章 Microsoft Entra ID のアプリケーション統合が参考になる                                     |

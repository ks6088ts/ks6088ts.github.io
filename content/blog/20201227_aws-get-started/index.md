---
title: AWS 入門(1) ~アカウント作成・初期設定~
date: "2020-12-27T16:42:02.000Z"
description: "Gmail サブアカウント作成と IAM の設定"
---

### gmail のサブアカウント作成

gmail のサブアカウントで AWS アカウントを作成する。

1. 設定 > **アカウントとインポート** から**ほかのメールアドレスを追加** でサブアカウントを作成
2. 設定 > **ラベル > 新しいラベルを作成** でラベルを作成
3. 設定 > **フィルタとブロック中のアドレス** からラベルフィルタを適用

### AWS アカウント初期設定

[AWSアカウントを取得したら速攻でやっておくべき初期設定まとめ](https://qiita.com/tmknom/items/303db2d1d928db720888) を参考に以下の作業を行う。

- **MFA を有効化する**
  1. スマホに Google Authenticator をインストール
  2. アカウント追加を選択し、IAM で表示される QR コードをスキャン
  3. 連続した MFA code を 2 つ入力
  4. 参考: [How to Setup MFA on AWS Account (Root User)](https://www.youtube.com/watch?v=FUXy2t28oqc)

- **IAM ユーザの作成**
  1. AWS アカウントでマネジメントコンソールから IAM ユーザを作成
  2. ユーザの MFA を有効化

- **請求回りの設定**
  - IAMユーザへの請求情報のアクセス許可
  - 請求情報とコスト管理の設定
  - CloudWatchで請求情報のアラームを作成

### AWS CLI

- [AWS CLI バージョン 2 のインストール、更新、アンインストール](https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/install-cliv2.html)

```bash
# Linux x86(64-bit)
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Docker
docker run --rm -it amazon/aws-cli --version

# 実行例: EC2 インスタンス数を取得
aws ec2 describe-instances | jq '.Reservations[].Instances | length'
```

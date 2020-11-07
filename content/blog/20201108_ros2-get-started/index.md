---
title: Docker 上で ROS2 の talker/listener デモを実行してみた
date: "2020-11-08T07:13:22.000Z"
description: "Docker 上で ROS2 Foxy の talker/listener デモを実行"
---

# とりあえず動かしてみる

何も知らない中からの初手は [ROS 2 > Overview > Installation](https://index.ros.org/doc/ros2/Installation/) を読んでセットアップするところから。  
いろいろ環境については試行錯誤したのですが、ローカル環境に直でインストールすると手順がコード化されずに環境が再現できなくなったり、  
バージョンの衝突だったりが起きてトラブルが多く茨の道です。  
ここでは WSL2 の恩恵も受けられるので、[Installing ROS 2 via Debian Packages](https://index.ros.org/doc/ros2/Installation/Foxy/Linux-Install-Debians/) を参考に Ubuntu 20.04 向けに Docker 環境にセットアップしました。  
基本的にはドキュメントに書いてあるインストール手順を Dockerfile に書き写すだけですが、  
いくつかハマりがあったのでメモしておきます。  

**keyboard-configuration の設定画面で止まる**  
[DockerでUbuntu + CUDA環境作ろうとして keyboard-configuration に邪魔されたとき](https://qiita.com/munky69rock/items/4c3a076fe496045de5f1)を参考に  
`ARG DEBIAN_FRONTEND=noninteractive`  
を追記します。

**Ubuntu dockerイメージをbuildするときにタイムゾーン選択で止まる**
[Ubuntu dockerイメージをbuildするときにタイムゾーン選択で止まる](https://www.yamamanx.com/ubuntu-docker-build-timezone-stop/) を参考に、
`RUN apt-get install -y tzdata`  
を追記します。

自分が使っている ROS2 @ Ubuntu 20.04 向けの Dockerfile は[こちら](https://github.com/ks6088ts/sandbox-ros2/blob/main/docker/focal/Dockerfile)。

# いざチュートリアル

公式の [Tutorials](https://index.ros.org/doc/ros2/Tutorials/) にたくさんコンテンツがあります。  
CLI 周りは知らないと何もできないので必須知識です。  
ROS2 で多少変更点がありますが、自分は ROS1 を少しかじったのでざっとななめ読みします。 
せっかく Docker イメージ作ったので [Using Docker](https://index.ros.org/doc/ros2/Tutorials/#using-docker) を参考に、  
talker/listener のシンプルなデモを Docker コンテナで実行してみます。 
[ks6088ts/sandbox-ros2](https://github.com/ks6088ts/sandbox-ros2) リポジトリを使用して、以下の動作確認をしました。  

```bash
# ROS2 向け Docker コンテナ起動
docker-compose up -d

# コンテナにログイン
docker-compose exec focal bash

# bash ターミナル上で
ros2 run demo_nodes_cpp talker
ros2 run demo_nodes_cpp listener
```

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Docker コンテナ上で ROS2 の talker/listener デモ実行できた <a href="https://t.co/6FIyBxMaHa">pic.twitter.com/6FIyBxMaHa</a></p>&mdash; ks6088ts (@ks6088ts) <a href="https://twitter.com/ks6088ts/status/1325210364074618882?ref_src=twsrc%5Etfw">November 7, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

雑に入門できたので、次は引き続きチュートリアルか本を読み進めようと思います。  
しかしながら 2020年11月現在、ROS2 を扱う日本語の書籍は以下の 2 つしか見当たらないです。

**ロボットプログラミングROS2入門**  
Docker 上に ROS2 コンテナを立ち上げて解説されている模様。  
書籍のリポジトリはこちら <https://gitlab.com/it-book/docker-ros2-programming>。  
ゼロから始めるならこちらを読むと良さそうです。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4904774906&linkId=748b274fdd8bd0d24dc884c09b3f051f"></iframe>

**ROS2ではじめよう 次世代ロボットプログラミング**  
書籍のリポジトリはこちら <https://github.com/youtalk/get-started-ros2>。  
各種ディストリビューションのテストを Circle CI で通してあって安心感があります。  
本とコード読んで参考にしてみようと思います。  

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4297107422&linkId=659b79948eb56c0db8e6a90b6a67a865"></iframe>


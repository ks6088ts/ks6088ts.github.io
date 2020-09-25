---
title: Jetson Nano 入門 ~セットアップ編~
date: "2020-09-25T07:00:00.000Z"
description: "Jetson Nano のセットアップ"
---

# Jetson Nano 入門

## Jetson Nano OS セットアップ

セットアップ手順の概要は[NVIDIA Jetson Nano Developer Kit 事始め](https://note.com/npaka/n/n1abcb5f3f7fe#WzbEC) の記事が詳しい。  
[Write Image to the microSD Card](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) も参考にする。  
sd カードは SD Card Formatter などで事前にフォーマットし、  
balenaEtcher で Jetson nano 向けの JetPack イメージを sd カードに書き込む。

## リモート接続

**ログイン**

```bash
# GUI ログインに切り替え
sudo systemctl set-default graphical.target
# CLI ログインに切り替え
sudo systemctl set-default multi-user.target
# ターゲットの確認
systemctl get-default
# GUI 起動
startx
```

**VNC**

```bash
# xrdp を入れて接続しても　アプリが落ちて接続できない
# Xfce を入れて接続すると、接続できるが demo の実行が不安定だったり
# 結局描画が遅いものの安定している VNC を採用。
# VNC サーバのセットアップ
# https://qiita.com/iwatake2222/items/a3bd8d0527dec431ef0f
sudo apt update -y
sudo apt install -y tigervnc-common tigervnc-standalone-server tigervnc-scraping-server
vncpasswd
# Would you like to enter a view-only password (y/n)? と聞かれるが、nでよい。
x0vncserver -display :0 -passwordfile ~/.vnc/passwd
# 別途、X環境を作る場合は、vncserver :1 などにする
```

**ディスプレイの解像度調整**

HDMI をディスプレイに接続していない状態で VNC 接続すると、解像度が 640x480 になってしまうので、  
[Jetson TX1 Desktop Sharing Resolution Problem Without Real Monitor](https://forums.developer.nvidia.com/t/jetson-tx1-desktop-sharing-resolution-problem-without-real-monitor/48041/11) を参考に `/etc/X11/xorg.conf` に追記する。

```bash
sudo vi /etc/X11/xorg.conf
# 以下を追記する
# ---
# Section "Monitor"
#    Identifier "DSI-0"
#    Option    "Ignore"
# EndSection

# Section "Screen"
#    Identifier    "Default Screen"
#    Monitor        "Configured Monitor"
#    Device        "Default Device"
#    SubSection "Display"
#        Depth    24
#        Virtual 1280 800
#    EndSubSection
# EndSection
# ---
```

**作業環境**

````bash
# CUI:
# SSH で接続
ssh <user>@<ip address>
sudo apt update -y

# CUI:
# VSCode の Remote-SSH 拡張を使う
# コマンドパレットから Remote-SSH: Connect to Host で接続できる
# ターミナルは ```ctrl+shift+@``` で起動できる

# GUI
# @Mac: Finder から移動>サーバへ接続
#       vnc://<ip address>
# @Win: VNC Viewer から接続
````

**公開鍵認証**

```bash
# host PC 側で鍵生成
ssh-keygen -t rsa

cat ~/.ssh/config
# Host 192.168.3.15
#   HostName 192.168.3.15
#   User ks6088ts
#   IdentityFile C:\Users\ks6088ts\.ssh\id_rsa

# リモートPC の ~/.ssh/authorized_keys に公開鍵を追記
```

## 設定変更

**言語設定を日本語にする**

```bash
# パッケージのインストール
sudo apt install -y language-pack-ja

# 言語設定の変更
sudo update-locale LANG=ja_JP.UTF-8 # 日本語
sudo update-locale LANG=en_US.UTF-8 # 英語
```

**ターミナルの起動**  
`ctrl+alt+t` で起動できる

**swap の追加**

```bash
# 4G の swap ファイルを作成
sudo dd if=/dev/zero of=/var/swapfile bs=1G count=4

# swap ファイルを利用
sudo chmod 600 /var/swapfile
sudo mkswap /var/swapfile

# 起動時にマウントする
sudo vi /etc/fstab
# 以下を追記
# /var/swapfile none swap swap 0 0

# swap ファイルを有効化
sudo swapon /var/swapfile

# swap の確認
free -m
swapon -s
```

**AC アダプタ利用**  
J48 ヘッダにジャンパピンを取り付けて microUSB コネクタによる受電を停止させ、  
4-5V 供給電源アダプタを J25 電源ジャックに接続する。

**MicroUSB ポート接続**  
Windows 10 の場合、デバイスドライバのインストールが始まり、インストールが完了するとネットワークが自動的に構成される。  
デフォルトでは `192.168.55.100` が割りあたるが、念のため IP は固定しておく。
JetsonNano の IP アドレスは `192.168.55.1`。

**冷却ファンの取付**  
5V 2 ピンの角冷却ファンを取り付ける。

```bash
# 現在の回転速度を確認(2ピンだと制御線が無いので 0 が返った)
cat /sys/devices/pwm-fan/target_pwm

# 最大速度で回す(0が停止)
sudo sh -c 'echo 255 > /sys/devices/pwm-fan/target_pwm'

# 自動制御
# https://github.com/Pyrestone/jetson-fan-ctl
```

**パワーモード**

```bash
# 設定(0: MAXN, 1:5W)
sudo nvpmodel -m 0

# 確認
nvpmodel -q --verbose

# パワーモード設定ファイル
cat /etc/nvpmodel.conf
```

**パフォーマンス**

```bash
# 動作状況の取得
sudo jetson_clocks --show

# パフォーマンス最大化
sudo jetson_clocks

# 戻す(5W->MAXN)
sudo nvpmodel -m 1
sudo nvpmodel -m 0
```

**CPU/GPU 使用率**

```bash
tegrastats --interval 3000

# jetson-stats の導入
sudo apt install -y python-pip
sudo -H pip install jetson-stats
sudo systemctl restart jetson_stats.service
sudo jtop
sudo service jetson_stats stop
service jetson_stats status
```

**温度**

```bash
cat /sys/devices/virtual/thermal/thermal_zone*/type # 温度ゾーン名称
cat /sys/devices/virtual/thermal/thermal_zone*/temp # 温度
```

**WiFi**

```bash
nmcli connection show # 現在のネットワーク接続状況
nmcli device wifi list # SSID 一覧を列挙
sudo nmcli device wifi connect SSID password PASSWORD # 接続
```

## 購入機材のまとめ

**(本) Jetson Nano 超入門**

入門書をざっと読むと話が早いです。まとまってるし全体を俯瞰しやすかったので、「Jetson Nano 超入門」を買いました(AC アダプタからの電源供給どうやるの？で詰まった)。  
著者のからあげさんはよくブログでも(一方的に)お世話になっているので安心と信頼の品質でした。  
エディタ回りの説明は少しクドイ感はあるものの、セットアップに苦労しなくて済んだので買って間違いないです。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=4800712513&linkId=0a3628a342b408eeba9cad6fa96ae284"></iframe>

**Jetson Nano 本体 開発キット**

[NVIDIA Jetson Nano](https://www.nvidia.com/ja-jp/autonomous-machines/embedded-systems/jetson-nano/) 本体は、スイッチサイエンスや Amazon で購入可能です。Amazon で一気に買い集めると楽でした。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07T6LYQZ6&linkId=7fe6abd76de5f595618cec21d11e4dad"></iframe>

**MicroSD カード**

Samsung EVO Plus マイクロ SDHC カードを使っています。  
安いし今のところ問題ありません。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B06XSV23T1&linkId=71a82c051781865b4fa61c76b8304328"></iframe>

**AC アダプタ**

MicroUSB でも給電はできますが、安定動作やハイパフォーマンスでの動作のためには必要です。  
Jetson Nano 向けには以下の要件を満たすものを選ぶ必要があります。

- 出力 4-5V
- PSE マーク付き
- [センタープラスのマーク](http://3.bp.blogspot.com/-BxCUNq07lFo/TvHQwff9zoI/AAAAAAAAA7w/Q1elU_nRWA8/s1600/centerplus.png)付き

ちょうど良さそうだったのはサクル株式会社の AC アダプター。  
他のブログ等でも紹介されていたし、自分も動作確認できました。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B015RKFAA2&linkId=ec30ca1e18c883944415febce1ecea37"></iframe>

**アクリルケース & 冷却ファン**

ボードむき出しでショートしたら嫌なのでアクリルケースを買いました。  
ついでに冷却ファンもついてくるこちらのセットはお得なので買いです。  
組み立て手順は youtube に公式動画([NVIDIA Jetson Nano Case Assembling video](https://youtu.be/_IotICwMcMM))が上がっていて親切です。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07VLXHZLF&linkId=cbac1ebaa4d0911c2f9a95b1f66e5b79"></iframe>

**WiFi USB ドングル**

有線 LAN は邪魔くさいので PC に MicroUSB で通信して耐えてたんですが、  
Jetson Nano から外部インターネットに出るのに若干設定がめんどくさいということで、結局 WiFi USB ドングルを購入しました。  
安いし他のブログでも紹介されていたので TP-Link の TL-WN725N を買いました。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B008IFXQFU&linkId=a265f32fdc5f3b9188d690a4057a86eb"></iframe>

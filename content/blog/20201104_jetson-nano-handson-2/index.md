---
title: Jetson Nano 入門 ~サンプル実行編~
date: "2020-11-04T13:46:17.000Z"
description: "Jetson Nano 入門 ~サンプル実行編~"
---

# Jetson Nano でサンプルアプリを実行してみる

JetPack 同梱のデモやコミュニティが開発した OSS を Jetson Nano 上でひらすら実行してみました。  
基本的にはサンプルやドキュメントに沿ってコマンド実行して install, build, run するだけですが、`Makefile` のコマンド一発で行けると今後振り返るときや自分の整理のためにも良さそうだったので、ざっくり [ks6088ts/sandbox-jetson-nano](https://github.com/ks6088ts/sandbox-jetson-nano.git) にまとめました。  

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B085NQTKS9&linkId=23528053d2f09b6a3ff1fd9fb0d9bd6a"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07VLXHZLF&linkId=297239f8a14457c106004d0733414cb5"></iframe>


## CUDA サンプル

CUDA のサンプルは JetPack に同梱されていました。  
`/usr/local/cuda-10.2/samples/` にソースがあるのでビルドして実行してみます。

```bash
cd /usr/local/cuda-10.2/samples/5_Simulations/fluidsGL && \
    sudo make && ./fluidsGL
```

## VisionWorks サンプル

こちらも JetPack に同梱されています。  
ビルドから実行までは以下。  
feature tracker とか滑らかに動いているのをみると結構面白い。  

```bash
# install
/usr/share/visionworks/sources/install-samples.sh ~/

# build
cd ~/VisionWorks-1.6-Samples/ && \
    make -j4 # add dbg=1 for debug build

# run
~/VisionWorks-1.6-Samples/bin/aarch64/linux/release/nvx_demo_feature_tracker
```

## jetson-inference

[dusty-nv/jetson-inference](https://github.com/dusty-nv/jetson-inference) で Jetson ボード上で推論処理のデモが体験できます。  
clone、ビルド、インストールまでは以下の通り。  
[Quick Reference](https://github.com/dusty-nv/jetson-inference/blob/master/docs/building-repo-2.md#quick-reference) にドキュメントがあります。

```bash
# ビルドからインストールまで
sudo apt-get update
sudo apt-get install git cmake libpython3-dev python3-numpy
cd && git clone --recursive https://github.com/dusty-nv/jetson-inference
cd ~/jetson-inference && \
    mkdir -p build && \
    cd build && \
    cmake ../ && \
    make -j$(nproc) && \
    sudo make install && \
    sudo ldconfig
```

ImageNet や DetectNet のサンプル実行のためにはカメラが必要です。  
私は残念ながら手元に丁度よい USB カメラが無かったため、  
手元の Android スマホに RTSP をサービスするスマホアプリをインストールして代用しました。  
単に自宅の WiFi に接続して [CamON Live Streaming](https://play.google.com/store/apps/details?id=com.spynet.camon&hl=ja&gl=US) を Jetson Nano と同一 LAN に接続して起動させただけです(無線で使えるけどやはり遅延がすごい)。  

```bash
# DetectNet を実行する
./jetson-inference/build/aarch64/bin/detectnet \
    rtsp://username:password@ip:port \
    display://0 \
    --input-codec h264
```

引数指定次第で入力ソースは USB カメラでも mp4 ファイルでも RTSP サーバでも何でも選べるし、
出力もディスプレイだったりファイルだったり柔軟。  
使い勝手が非常によくてツール開発のお手本みたい。  

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">jetson-inference リポジトリを参考に、jetson nano で detectnet 動かす週末。usbカメラなかったからスマホアプリで rtsp サーバ立てて動かした。 <a href="https://twitter.com/hashtag/jetson?src=hash&amp;ref_src=twsrc%5Etfw">#jetson</a> <a href="https://twitter.com/hashtag/%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92?src=hash&amp;ref_src=twsrc%5Etfw">#機械学習</a> <a href="https://t.co/CC55wJjnaL">pic.twitter.com/CC55wJjnaL</a></p>&mdash; ks6088ts (@LearningAnimal1) <a href="https://twitter.com/LearningAnimal1/status/1322453221655244800?ref_src=twsrc%5Etfw">October 31, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  

カメラ画像だけだと非常に地味だったので、  
YouTube から mp4 ファイルを落としてきて DetectNet に喰わせるのも面白いです。  
(学習ラベルにないものは変な判定されるのとかも含め...)

### ROS のトピックとしてサービスする

[dusty-nv/ros_deep_learning](https://github.com/dusty-nv/ros_deep_learning.git) を使うと ROS のトピック配信もできます。  
Rviz でサブスクライブして可視化とかも簡単にできて、これまた良い。  

```bash
# 必要なパッケージのインストール
sudo apt-get install -y ros-melodic-image-transport ros-melodic-vision-msgs

# ワークスペースのセットアップ
mkdir -p ~/ros_workspace/src
cd ~/ros_workspace/src && \
    git clone https://github.com/dusty-nv/ros_deep_learning
# ビルド
cd ~/ros_workspace/ && \
    catkin_make
# source devel/setup.bash 
```

# VS Code で Remote SSH
これまでは GUI が必要なサンプルばかりを触っていたので、  
Jetson Nano に HDMI, USB キーボード、無線ドングルを挿して作業していました。(X Server の構築周りで嵌ったことがあるので...)  

その過程で CPU の処理負荷が高いときに頻繁に固まるのがイケてないなーと思い始め、開発時は処理負荷を極力下げるため GUI 起動はせず、ノート PC から SSH で作業することにしました。  
VSCode の Remote SSH プラグインはとても優秀。

# jtop でモニタリング

I/O が固まる原因については深く考察することがないまま、とりあえず処理負荷低減のために GUI やめて CLI 起動で SSH 接続、ってのもエンジニア的ではないので負荷をモニタリングすることにしました。  
Jetson 界隈では GitHub の star 数みる限り `jetson-stats` なるものが良いようで、以下コマンドで導入しました。

```bash
sudo apt install -y python3-pip
sudo -H pip3 install jetson-stats
```

VSCode で Remote SSH した状態でターミナルから `jtop` すると以下のような感じにモニタリングできて素晴らしいです。  

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Jetson Nano でのモニタリングツールとして jtop 導入したがとても優秀。コマンド一発でインストールできるし、欲しい情報大体取れる <a href="https://t.co/Wowo8aCSfc">https://t.co/Wowo8aCSfc</a> <a href="https://twitter.com/hashtag/NVIDIA?src=hash&amp;ref_src=twsrc%5Etfw">#NVIDIA</a> <a href="https://twitter.com/hashtag/JetsonNano?src=hash&amp;ref_src=twsrc%5Etfw">#JetsonNano</a> <a href="https://t.co/dG4InQ7Usq">pic.twitter.com/dG4InQ7Usq</a></p>&mdash; ks6088ts (@LearningAnimal1) <a href="https://twitter.com/LearningAnimal1/status/1323547860709773318?ref_src=twsrc%5Etfw">November 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  
 

ちなみに make で超並列化してビルドしたりすると一気に CPU 負荷が 100 % に達するようなのが見えて「Jetson Nano くん、限界なんだな」と察することができました。  
やはりあくまでコスパの良い inference 専用機なのですね。。  
DeepLearning 向けラズパイという立ち位置。

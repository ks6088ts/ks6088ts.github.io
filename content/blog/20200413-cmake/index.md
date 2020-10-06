---
title: Docker コンテナ上に C++ 開発環境構築
date: "2020-04-13T12:00:00.000Z"
description: "Docker コンテナ上に C++ 開発環境構築"
---

C++ 開発環境を Mac 上に構築する必要が出てきたのでその作業ログをまとめる。  

# Docker コンテナ上に C++ 開発環境をセットアップする

プライベートでメインの PC は Mac だが、開発環境をポータブルにしておきたいので、  
ubuntu 18.04 の Docker コンテナ上で作業できるように環境を整える。  
といっても、下記の通り Dockerfile に下記コマンドを追加してインストールするだけ。  

```bash
# Install the Clang compiler
RUN apt-get -y install \
    clang \
    clang-format \
    make \
    cmake
```

docker-compose で起動させてターミナル上で作業したいので、  
docker-compose.yml のサービスに ```tty: true``` を追記。  
あとは ```docker-compose run --rm <service>``` でターミナルに入れる。  

参考: [C++ development with Docker containers in Visual Studio Code](https://devblogs.microsoft.com/cppblog/c-development-with-docker-containers-in-visual-studio-code/)

# cmake の入門

次は cmake のビルド方法を理解する。  
スクラッチで環境を作ったことがなかったのでまずは基礎から。  
基本的には以下の 2 つの記事を Docker コンテナ上でなぞっただけでそれなりに分かった気になる。  

* [CMakeの使い方（その１）](https://qiita.com/shohirose/items/45fb49c6b429e8b204ac)
* [CMakeの使い方（その２）](https://qiita.com/shohirose/items/637f4b712893764a7ec1)

これでヘッダ、ライブラリ、アプリを分けたコードを cmake でビルドできるようになる。  

**OpenCV のビルド**

少し欲がでてきたので、OSS ライブラリのビルドにもチャレンジしてみた。  
以下の流れで OpenCV をソースからビルド。  
ビルドに必要なモジュール群はインストールされているものとする。  

```bash
# ソースコードを clone
ghq get https://github.com/opencv/opencv.git
cd opencv

# out-of-source ビルド
mkdir build
cd build
cmake -D CMAKE_INSTALL_PREFIX=$HOME/local/opencv32 -D BUILD_EXAMPLES=ON -D WITH_IPP=OFF -D BUILD_PYTHON_SUPPORT=ON ./opencv-3.2.0 ..

# ビルド
make -j4
```

マシンリソースが貧弱なせいか、めっちゃ時間かかったので途中でやめて brew で OpenCV を入れた。
```
brew install opencv
brew list --versions | grep opencv
> opencv 4.2.0_3
```

**OpenCV アプリをビルド**

気を取り直して今度は OpenCV を利用するアプリを cmake でビルドしてみる。
ビルド方法は簡単で、CMakeLists.txt で OpenCV パッケージを走査してリンクするコードを追加すればよい。  

```
find_package(OpenCV REQUIRED)  
include_directories( ${OpenCV_INCLUDE_DIRS} )
add_executable(opencv opencv.cpp)
target_link_libraries(opencv ${OpenCV_LIBS})
```

アプリにリンクするだけであれば上記で問題なかった。  
実際開発するとなるど、VS Code で実装することになりそうだが、  
インテリセンスが効かなくて一瞬困ったものの、  
エディタに表示された黄色い電球マークを押して、
Include Path を設定するように選択すると、c_cpp_properties.json が開いて勝手に設定してくれた。  
エディタのこういう小回りの効く機能、地味にありがたい。  

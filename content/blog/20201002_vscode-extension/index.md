---
title: VSCode 入門 ~入門から拡張開発(TypeScript で書いて GitHub Actions で CI を回す)~
date: "2020-10-03T18:00:00.000Z"
description: "VSCode 拡張を TypeScript で開発して GitHub Actions で CI を回す"
---

本記事では、VSCode を利用するメリットや、拡張機能の開発に関するメモをまとめる。  
特に拡張機能開発はテンプレートが充実していたり、参考になる書籍([プログラマーのためのVisual Studio Codeの教科書](https://amzn.to/3nglNTO))もでていたりで、GitHub Actions で CI 回しながら TypeScript で開発する環境が簡単にセットアップできた。  
今回実装したコードはこちら。
* [ks6088ts/sandbox-vscode-extension](https://github.com/ks6088ts/sandbox-vscode-extension)

## VSCode 入門

[Visual Studio Code時代の到来](https://itnews.org/news_contents/the-era-of-visual-studio-code) という仰々しい記事を読んで、興味本位で使い始めた。  
まずはただのエディタとしてごくごく普通の使い方で。  

**【キーボードショートカットは覚えろ】**  
しばらくして、よく使うキーボードショートカットは覚えておくと良いと思った。  
日頃開発しててだるいと思ったときが覚えるべき時。  
[Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference)に各 OS ごとのチートシートがまとまっている。  
大抵のショートカットは他のエディタと似たようなものだが、あえて挙げると以下のコマンドをよく使うので覚えた(キー入力は Mac のもの)。

- Show Command Palette: `cmd+shift+p`
- Show Extensions: `cmd+shift+x`
- User Settings: `cmd+,`

**【コマンドパレットを使え】**  
少し作業をしてみると判るが、覚えることを減らしたい場合、  
`コマンドパレット開く-> テキストボックスに入力する`という単純作業で大抵のことはインクリメンタルに見つけることができる。  

**【拡張機能を使い倒せ】**  
インストールする拡張機能としては、自分が普段使う言語の拡張パッケージだったり、  
Docker や Git 関連の基礎的な開発ツール支援の機能を入れた。  

導入することのメリットは、以下の通り。
- インテリセンスが効くので入力スピード・精度が上がる
- 間違っているところは VSCode が怒ってくれるのでデバッグ効率がよくなる

また、自分が不慣れな言語であってもインテリセンス頼りに開発して、しばらくすると習得することができ、いわば補助輪的役割も果たしてくれる。  

インストールは GUI ベースでもできるがとてもだるいので、`code --install-extension <extension>` で CUI インストールが楽。  

**【設定を管理しろ】**  
VSCode 全体の設定やインストールする拡張機能などを端末をまたいで共有するため、[公式が Setting Sync の機能をリリースした](https://twitter.com/code/status/1293976193260085248)ので、クラウド側で管理することが可能になった。  
一方で、機能に振り回されること無く開発環境を構築できるようにしておきたかったため、自分はスクリプト化してバージョン管理する原始的なアプローチもとっている。  
[VS CodeをGitHubとスクリプト使って半自動で楽々セットアップ](https://karaage.hatenadiary.jp/entry/2019/02/27/073000) を参考に、以下のようにワンライナーでお手軽にインストールしている。  

```bash
curl -s https://raw.githubusercontent.com/ks6088ts/dotfiles/master/scripts/install-vscode-extensions.sh | /bin/bash
```

## VSCode 拡張を作ってみる

**【scaffold を使え】**  
いわゆる Get Started 的なドキュメントは公式の [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension) にまとまっている。  
JavaScript の開発は不慣れなので公式がクオリティの高い scaffold を用意してくれているのは助かる。  
開発元が MS だから当然なのかもしれないが TypeScript のサポートもある。  

公式ドキュメントを参考に、

```bash
npm install -g yo generator-code
yo code
# TypeScript を選択
```

でひな形は作成できた。  
実用上は拡張機能にユーザが設定値を差し込めるようにするなどの細かい部分も知りたいし、  
ネットの記事だけだとどうしても網羅性が低くなってしまうため書籍をいくつか読んでみたところ、  
[プログラマーのためのVisual Studio Codeの教科書 (Compass Booksシリーズ)](https://amzn.to/3nglNTO) が最も参考になったため購入した。  

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B087Q2P56J&linkId=c0cdcb609b15a1a0cc5b0eae0eed1db3"></iframe>

この本では拡張機能の開発だけでなく、GitHub Actions で CI を回す方法まで記載されていた。  

**【GitHub Actions で CI 回すのに嵌った】**  
Windows/Mac/Ubuntu といつものように回そうとした際、以下のエラーを吐いて[Ubuntu のテストで失敗](https://github.com/ks6088ts/sandbox-vscode-extension/runs/1196859391?check_suite_focus=true#step:5:33)した。  

```
npm run test

> sandbox-vscode-extension@0.0.1 pretest /home/runner/work/sandbox-vscode-extension/sandbox-vscode-extension
> npm run compile && npm run lint


> sandbox-vscode-extension@0.0.1 compile /home/runner/work/sandbox-vscode-extension/sandbox-vscode-extension
> tsc -p ./


> sandbox-vscode-extension@0.0.1 lint /home/runner/work/sandbox-vscode-extension/sandbox-vscode-extension
> eslint src --ext ts


> sandbox-vscode-extension@0.0.1 test /home/runner/work/sandbox-vscode-extension/sandbox-vscode-extension
> node ./out/test/runTest.js

Downloading VS Code 1.49.2 from https://update.code.visualstudio.com/1.49.2/linux-x64/stable
Downloaded VS Code 1.49.2 into .vscode-test/vscode-1.49.2
/dev/fd/3: No such file or directory

Server response: 


Failed to run tests
Exit code:   null
Done

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! sandbox-vscode-extension@0.0.1 test: `node ./out/test/runTest.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the sandbox-vscode-extension@0.0.1 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/runner/.npm/_logs/2020-10-02T03_03_09_885Z-debug.log
make: *** [test] Error 1
Makefile:14: recipe for target 'test' failed
Error: Process completed with exit code 2.
```

どうやら Ubuntu のような GUI を持たない環境では VSCode 拡張のテストが正しく実行できないらしく、  
書籍のコード([vscode-extension-ci/.github/workflows/vscode.yml](https://github.com/vscode-textbook/vscode-extension-ci/blob/master/.github/workflows/vscode.yml)) を参考に、Ubuntu 環境でのみ XVfb を起動することで解決した。  

---
title: React + TypeScript で実装したアプリを GitHub Actions で GitHub Pages にデプロイ
date: "2020-04-06T09:00:00.000Z"
description: "React + TypeScript で実装したアプリを GitHub Actions で GitHub Pages にデプロイ"
---

[React:Getting Started](https://reactjs.org/docs/getting-started.html) を読み、ある程度関数コンポーネントを作って React に慣れてきた。  
そろそろ TypeScript も導入したくなったので、ここでは React に TypeScript 導入した際の作業ログをまとめてみる。  
ESLint や GitHub Actions での CI など、生産性を向上させられそうなものも合わせて記述する。

# Create React App で雛形を生成

[Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/) を参考に Create React App を使って以下のコマンドで TypeScript 利用のプロジェクトを生成する。  

```bash
npx create-react-app sandbox-react-ts --template typescript
```

# ESLint の導入

eslint を導入する。

```bash
# eslint をインストール
yarn add eslint --dev

# .eslintrc を生成
yarn run eslint --init

# 一旦 npm でインストールしたが、
# yarn.lock に反映させる
yarn install
```

# GitHub Actions で CI を回す
package.json に lint コマンドを定義し、GitHub Actions に設定ファイルを追加する。

* commit: <https://github.com/ks6088ts/sandbox-react-ts/commit/cc759fc477f13006298bf69a530bbbf3961f938a>

# GitHub Pages に Deploy する

GitHub Actions を使って develop ブランチに push されたら master ブランチにビルド成果物を push するようにする。

* commit: <https://github.com/ks6088ts/sandbox-react-ts/commit/efa055ac63938c97a3cbd3fb6bf6cfda62462891>

# React コンポーネントを TypeScript で実装する

```typescript
import React from 'react';

type Props = {
    foo: string;
}

const Example: React.FunctionComponent<Props> = (props) => {
  const { foo } = props;
  return <div>{foo}</div>;
};

export default Example;
```

React 自体そんなに触ったことが無いが、いきなり TypeScript で実装している。  
型定義があるのでエディタのインテリセンスが効くし、開発体験は JavaScript のそれに比べると大分良い。  

上記コードは
* React モジュールをインポートして、
* props の型定義をして、
* その型の変数を引数とした FunctionComponent を実装

といった感じ。  
フロントエンドは時代とともに変化も早いため、小手先のベストプラクティスがすぐに時代遅れになる印象がある。  
根本を理解することは前提としつつ「走りながら学ぶ」スタイルで開発する考え。

* commit: <https://github.com/ks6088ts/sandbox-react-ts/commit/fed1e27694f7d45067d5aee12d6ab4acb6120f8c>


# axios + TypeScript で HTTP GET

```yarn add axios``` でインストールしたのち、下記コードでレスポンスの型指定をしつつ HTTP GET。  

```typescript
export interface Response {
    pong: string;
}

---

axios.get<Response>(url)
  .then((response) => {
  // handle success
    console.log(response);
  })
  .catch((error) => {
  // handle error
    console.log(error);
  })
  .then(() => {
  // always executed
  });
```

TypeScript を利用することでレスポンスの型が指定でき、コンパイル時点でエラーが判るため、開発効率が向上するはず。  


* commit: <https://github.com/ks6088ts/sandbox-react-ts/commit/2bc7b9346f407626b8024ec609c207ce3b792b96>

ref. [TypeScriptでWebAPIを実行する](https://hi1280.hatenablog.com/entry/2018/12/05/201004)

# TypeScriptのためのESLintとPrettierの併用設定

コードフォーマットは ESLint だけで良いと思っていたが、インデントや改行等の挙動に寄与しないコードの見た目がきれいにならないので prettier を導入することにした。  
まともに入れると ESLint と Prettier のフォーマッタが競合することがあるため、ESLint の設定ファイルを工夫する必要がある。  
このあたりは時代とともに移り変わりそうなので、[[初心者向け]TypeScript用にESLintとPrettierを導入する](https://qiita.com/y-w/items/dcf5fb4af52e990109eb#typescript%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AEeslint%E3%81%A8prettier%E3%81%AE%E4%BD%B5%E7%94%A8%E8%A8%AD%E5%AE%9A) を参考に適用した。

* commit: <https://github.com/ks6088ts/sandbox-react-ts/commit/f5f18a962e3f98ec2105d87d5be0c40b34a513da>

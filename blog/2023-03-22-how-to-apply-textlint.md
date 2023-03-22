---
slug: how-to-apply-textlint
title: textlint を有効化する
authors: ks6088ts
tags: [textlint]
---

textlint を有効化して blog 執筆時に校正処理を自動でかけられるようにします。

<!--truncate-->

# textlint による校正環境をセットアップする

[textlint](https://textlint.github.io/) を使った校正環境を構築します。
Node.js と yarn がインストールされていることを前提とします。

## textlint とルール設定のインストール

以下のコマンドでプロジェクトの依存関係に textlint 本体とルール設定をインストールします。  
テストジョブでのみ必要なモジュールであるため、`devDependencies` として依存関係を追加します。

```shell title="install dependencies"
yarn add --dev \
    textlint \
    textlint-rule-preset-ja-spacing \
    textlint-rule-preset-ja-technical-writing \
    textlint-rule-prh \
    textlint-rule-spellcheck-tech-word
```

## textlint のルール設定

設定ファイルは `.textlintrc` ファイルで記述します。
「である・ですます調の不一致」「単語の表記揺れ」「句読点の使いすぎ」など、様々なルールを定義して文章をチェックできます。  
一度設定を構築し、CI プロセスなどに組み込んでおけばドキュメントの品質を保つことができます。

```json title="textlint settings: .textlintrc"
{
  "filters": {},
  "rules": {
    "preset-ja-spacing": {
      "ja-space-between-half-and-full-width": {
        "space": "always"
      }
    },
    "preset-ja-technical-writing": true,
    "spellcheck-tech-word": true,
    "textlint-rule-no-dropping-the-ra": true,
    "textlint-rule-ja-no-space-between-full-width": true,
    "prh": {
      "rulePaths": [
        "./prh.yaml"
      ]
    }
  }
}
```

prh (=**P**roof**R**eading **H**elper)はドキュメントの表記ゆれを検出するためのツールです。例えば以下の設定ファイルを書くことで表記を GitHub に統一できます。

```yaml title="prh settings: prh.yaml"
rules:
  - expected: GitHub
    patterns:
      - github
      - Github
```

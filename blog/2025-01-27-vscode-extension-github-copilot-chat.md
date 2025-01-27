---
slug: vscode-extension-github-copilot-chat
title: GitHub Copilot Chat extension 機能を利用した VS Code Extension の開発
authors: ks6088ts
tags: [vscode, github]
---

<!-- textlint-disable -->

VS Code には、拡張機能を作成するための API が提供されており、様々な機能を追加することができます。
本記事では、GitHub Copilot Chat extension 機能を利用して、生成 AI による機能を VS Code Extension に追加する方法を紹介します。

今回作成したサンプルは [sandbox-vscode-extension](https://marketplace.visualstudio.com/items?itemName=ks6088ts.sandbox-vscode-extension) として Marketplace に公開しています。
ソースコードは GitHub ([ks6088ts-labs/sandbox-vscode-extension](https://github.com/ks6088ts-labs/sandbox-vscode-extension)) で公開しています。

<!--truncate-->

GitHub Copilot Chat extension 機能を利用して、

- `@cc /summarize <文章>` で文章を要約
- `@cc /translate <文章>` で文章を翻訳 (文章が日本語であれば英語に、英語であれば日本語に)
- `@cc /boscar <文章>` で文章を BOSCAR フレームワークで整理
- `@cc /minutes <文章>` で固定フォーマットの議事録を作成

する機能を追加しました。例えば翻訳機能の利用イメージは以下の通りです。

![translate](https://raw.githubusercontent.com/ks6088ts-labs/sandbox-vscode-extension/refs/heads/main/assets/translate.gif)

## TL;DR

GitHub Copilot Chat extension 機能を利用した VS Code 拡張機能を作成し、Marketplace に公開しました。

- VS Code 拡張の開発をチュートリアル ([Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension)) で基礎を学ぶ
- GitHub Copilot Chat extension 機能の開発をチュートリアル ([Tutorial: Build a code tutorial chat participant with the Chat API](https://code.visualstudio.com/api/extension-guides/chat-tutorial)) で学ぶ
- 翻訳・要約・情報整理など、日々の業務に役立つ機能をコマンドとして追加しました
- 実装した VS Code Extension を Marketplace に公開しました

---

## まずは VS Code 拡張機能の開発

ゼロから VS Code 拡張機能を作成する方法を学びます。
[Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension) が公式ドキュメントとして提供されており、こちらを参考に進めます。

```shell
# テンプレートを作成します
npx --package yo --package generator-code -- yo code

# いくつかの質問に回答します

# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? sandbox-vscode-extension
# ? What's the identifier of your extension? sandbox-vscode-extension
# ? What's the description of your extension?
# ? Initialize a git repository? Yes
# ? Which bundler to use? esbuild
# ? Which package manager to use? pnpm
```

コマンドラインで質問に回答すると、VS Code 拡張機能のテンプレートが作成されます。
VS Code 上で、`F5` キーを押すと、デバッグモードで拡張機能が起動するなど、基本的な所作を確認できます。

## GitHub Copilot Chat extension 機能を利用する

[Chat extensions](https://code.visualstudio.com/api/extension-guides/chat) に基礎的なチャット拡張機能の概要が記載されています。
具体的な開発手順は、[Tutorial: Build a code tutorial chat participant with the Chat API](https://code.visualstudio.com/api/extension-guides/chat-tutorial) に記載されています。

Slack でいうところの slash コマンドのような機能を追加するには、`package.json` の `contributes.chatParticipants.commands` にコマンドを追加します。

```json
{
  ...
    "chatParticipants": [
      {
        "id": "ks6088ts.custom-copilot",
        "fullName": "CustomCopilot",
        "name": "cc",
        "description": "CustomCopilot は、日々の業務をサポートします。",
        "isSticky": true,
        "commands": [
          {
            "name": "boscar",
            "description": "BOSCAR フレームワークに基づいて情報を整理します。"
          },
          {
            "name": "translate",
            "description": "日本語↔英語翻訳を行います。"
          },
          {
            "name": "summarize",
            "description": "文章を要約します。"
          },
          {
            "name": "minutes",
            "description": "議事録を作成します。"
          }
        ]
      }
    ]
  },
  ...
}
```

あとは、`src/extension.ts` の実装を修正すれば完了です。
今回は[コマンドの種類に応じてプロンプトを変更する処理](https://github.com/ks6088ts-labs/sandbox-vscode-extension/blob/v0.0.3/src/extension.ts#L49)を追加しました。

## Marketplace に公開する

[Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) を参考に、Marketplace に拡張機能を公開します。
サイトにも記載されていますが、アカウントの作成やアクセストークンの取得、Publisher の作成などが必要です。
ざっくりいうと以下の手順が必要です。

- `https://dev.azure.com/YOUR_ORG/_usersSettings/tokens` にアクセスして、拡張機能を公開するための Personal Access Token を取得
- `https://marketplace.visualstudio.com/manage/publishers/YOUR_ORG` にアクセスして、Publisher と VSCode 拡張機能を管理

プログラムの公開のために必要なコードの修正としては、

- `package.json` の `publisher`, `repository`, `name` などの情報を適切に設定
- `README.md` に拡張機能の説明を記載
- `LICENSE` ファイルを追加

などがあります。
なお、私の環境だけかもしれませんが pnpm でのパッケージングがうまくいかないため、npm か yarn でパッケージングする必要があります。(ここでは yarn を利用しています)

---

## まとめ

GitHub Copilot Chat extension 機能を利用して、VS Code 拡張機能を作成し、Marketplace に公開しました。
公式が提供するドキュメントを参考に、基礎的な拡張機能の作成方法を学び、GitHub Copilot Chat extension 機能を利用して、日々の業務に役立つ機能を追加しました。

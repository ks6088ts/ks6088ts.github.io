---
slug: powershell-development-environment
title: PowerShell スクリプト開発環境の構築
authors: ks6088ts
tags: [powershell]
---

PowerShell スクリプト開発環境の構築にあたり、便利なツールや環境を紹介します。

<!--truncate-->

# PowerShell 開発環境の構築

## エディタ

Syntax highlighting、インテリセンスなどを有効にするため、[PowerShell for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell)をインストールして VS Code 上で開発します。

## ドキュメント

基本的には、[PowerShell Documentation](https://learn.microsoft.com/ja-jp/powershell/)の公式情報を参照します。
具体的な文法や使い方に関してサンプルコードを見たい場合は、[~について知りたかったことのすべて](https://learn.microsoft.com/ja-jp/powershell/scripting/learn/deep-dives/everything-about-arrays)を参照すると良いと思います。
PowerShell スクリプト開発のベストプラクティスを知りたい場合は、[PowerShell Best Practices and Style Guide](https://poshcode.gitbook.io/powershell-practice-and-style/) が参考になります。

### Code snippets

個人的によく使うスニペット集を作成して、コード資産を使いまわすと効率的です。
細かい文法などは触っていないと忘れがちなので、よく使うスニペットは使いまわせるようにしておくとよいでしょう。

```powershell title="Install PowerShell modules"
#!/usr/bin/env pwsh

Write-Host "Running "$MyInvocation.MyCommand.Name" ..."

Set-PSRepository -Name 'PSGallery' -InstallationPolicy Trusted

$modules = @(
    "Microsoft.Graph"
    "Pester"
)

foreach ($module in $modules) {
    Write-Host "Installing $module"
    Install-Module -Name $module -Scope CurrentUser
}
```

```powershell title="PowerShell module: mymodule.psm1"
# mymodule のバージョン
$global:MyModuleVersion = "v0.0.1"

function Initialize-MyModule {
    # do something
}

Export-ModuleMember -Variable MyModuleVersion
Export-ModuleMember -Function Initialize-MyModule
```

```powershell title="PowerShell script: client.test.ps1"
# unit test by Pester
using module "./mymodule.psm1"

Describe "Smoke test" {
    Context "Nominal case" {
        It "Check global variables" {
            # version variable settings
            $MyModuleVersion | Should Be "v0.0.1"
        }
    }
}
```

## 静的解析

[PowerShell/PSScriptAnalyzer](https://github.com/PowerShell/PSScriptAnalyzer)をインストールします。

```powershell
Install-Module -Name PSScriptAnalyzer -Scope CurrentUser
```

使い方は [PSScriptAnalyzerを使ってPowerShellのコードをキレイに保とう](https://qiita.com/nimzo6689/items/1c55c6782027a78a51e5)を参照します。

## テスト

ユニットテストフレームワークとして[Pester / Quick Start](https://pester.dev/docs/quick-start/)を使います。

```powershell
Install-Module -Name Pester -Scope CurrentUser
```

## Docker

PowerShell スクリプトの再現性担保のために、Docker コンテナ上で開発したい場合、ベースとなるコンテナイメージは [mcr.microsoft.com/powershell](https://mcr.microsoft.com/en-us/product/powershell/tags) にあります。必要な tag を指定して利用してください。
特に、PowerShell module が廃止になる場合に、その module の依存を剥がす開発をする場合などで重宝しました。

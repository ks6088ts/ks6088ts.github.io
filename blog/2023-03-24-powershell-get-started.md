---
slug: powershell-get-started
title: PowerShell 開発入門
authors: ks6088ts
tags: [powershell]
---

PowerShell スクリプトの開発入門に便利だと思ったツールや情報をまとめます。

<!--truncate-->

## エディタ

- [VS Code extension / PowerShell](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell): Syntax highlighting, intellisense, LSP サポートなどがあり便利

## ユニットテスト

- [Pester / Quick Start](https://pester.dev/docs/quick-start/): テストフレームワーク

## Docker

- [mcr.microsoft.com/powershell](https://mcr.microsoft.com/en-us/product/powershell/about): PowerShell の Docker イメージ。ライブラリの廃止に伴う移行作業やテストなど、隔離された環境での実行が必要な場合に便利

## ライブラリ

- [microsoftgraph/msgraph-sdk-powershell](https://github.com/microsoftgraph/msgraph-sdk-powershell)
  - Microsoft Graph API を PowerShell から叩くときに使う
  - 参考リンク
    - [Authentication module cmdlets in Microsoft Graph PowerShell](https://learn.microsoft.com/ja-jp/powershell/microsoftgraph/authentication-commands?view=graph-powershell-1.0)
    - [Microsoft Graph REST API v1.0 エンドポイント リファレンス](https://learn.microsoft.com/ja-jp/graph/api/overview?view=graph-rest-1.0)

## スニペット

しょっちゅう文法を忘れて同じことを繰り返すので、スニペットを作成しておく。

### モジュールの一括インストール

```powershell title="install-modules.ps1"
#!/usr/bin/env pwsh

Write-Host "Running "$MyInvocation.MyCommand.Name" ..."

Set-PSRepository -Name 'PSGallery' -InstallationPolicy Trusted

$modules = @(
    "Microsoft.Graph"
    "MicrosoftTeams"
    "Pester"
)

foreach ($module in $modules) {
    Write-Host "Installing $module"
    Install-Module -Name $module -Scope CurrentUser
}
```

### PowerShell module の作成と利用

#### PowerShell モジュール

```powershell title="mymodule.psm1"
$global:MyModuleVersion = "v0.0.1"

function Get-MyName {
    return "Hello-World"
}

# Export variables
Export-ModuleMember -Variable MyModuleVersion

# Export functions
Export-ModuleMember -Function Get-MyName
```

#### PowerShell モジュールの利用

```powershell title="client.ps1"
using module "./mymodule.psm1"

param (
    [parameter(mandatory=$true)][string]$Hello,
    [parameter(mandatory=$true)][string]$World)

$name = Get-MyName

Write-Host $name, $MyModuleVersion
Write-Host Args: $Hello, $World
```

#### 実行

```powershell
./client.ps1 -Hello Hello -World World
>>>
Hello-World v0.0.1
Args: Hello World
```

### テスト

#### テストスクリプト
```powershell title="mymodule.test.ps1"
using module "./mymodule.psm1"

Describe "Smoke test" {
    Context "Nominal case" {
        It "Check global variables" {
            # version variable settings
            $MyModuleVersion | Should Be "v0.0.1"
        }
        It "Connect-Helper" {
            Get-MyName | Should Be "Hello-World"
        }
    }
}
```

#### テストの実行

```powershell
Invoke-Pester ./mymodule.test.ps1
>>>
Describing Smoke test
   Context Nominal case
    [+] Check global variables 495ms
    [+] Connect-Helper 72ms
Tests completed in 568ms
Passed: 2 Failed: 0 Skipped: 0 Pending: 0 Inconclusive: 0
```

### HTTP リクエストの発行

#### Microsoft Graph API の呼び出し例

```powershell title="httpRequest.ps1"
param (
    [parameter(mandatory=$true)][string]$TenantId,
    [parameter(mandatory=$true)][string]$ClientId,
    [parameter(mandatory=$true)][string]$ClientSecret,
    [parameter(mandatory=$true)][string]$Csv)

# -- Token を取得する --
$token = Invoke-RestMethod -Method Post -Uri "https://login.microsoftonline.com/$tenantId/oauth2/v2.0/token" -Body @{client_id="$clientId";scope="https://graph.microsoft.com/.default";client_secret="$clientSecret";grant_type="client_credentials"} -ContentType 'application/x-www-form-urlencoded'
$accessToken = $token.access_token
```

#### 実行例

```powershell
./httpRequest.ps1 -TenantId 789 -ClientId 566 -ClientSecret 444 
```

---
slug: azure-ad-function-api
title: Azure AD 認可情報を用いてフロントエンドアプリから Azure Functions を呼び出す
authors: ks6088ts
tags: [azure, azure-ad, msal]
---

Azure AD 認可情報を用いてフロントエンドアプリから Azure Functions を呼び出すハンズオンをしました。
参考になった情報のリンクをまとめます。

<!--truncate-->

# Azure AD 認可情報を用いてフロントエンドアプリから Azure Functions を呼び出す

Azure App Service 上にデプロイされた React 製のフロントエンドアプリケーションから、Azure Functions を呼び出すサンプルを提供します。

本アプリは以下の要求事項を満たします。

- フロントエンドアプリケーションは Azure AD 認証を通すことを必須とする
- Azure Functions は Azure AD 認証を必須とする
- フロントエンドアプリケーションの Azure AD 認証を通したユーザは、**追加の認証を通すことなく**、フロントエンドアプリケーションの認証情報を用いて Azure Functions を呼び出すことができる
- フロントエンドアプリケーション、Azure Functions 双方は Azure App Service の組み込み認証を利用し、認証処理の一切をアプリケーションコードに組み込む必要がない(⇔ MSAL ライブラリを利用しない)

## ハンズオン

### React アプリの作成

以下の記事を参考に、`create-react-app` を用いてフロントエンドアプリケーションを作成します。

- [TypeScript を対象とする npm を使用した React アプリを作成する](https://learn.microsoft.com/ja-jp/azure/developer/javascript/how-to/with-web-app/static-web-app-with-swa-cli/create-react-app#create-react-app-with-npm-targeting-typescript)

- [Create React App / Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/#installation)

```shell
# create SPA app in spa directory
npx create-react-app react-ts --template typescript

# install dependencies
cd react-ts && npm install

# build an app
npm run build

# run an app
npm start
```

### React アプリのデプロイ

以下の記事を参考に、App Service に React のフロントエンドアプリケーションをデプロイします。

- [Azure で静的 HTML Web アプリを作成する](https://learn.microsoft.com/ja-jp/azure/app-service/quickstart-html#create-a-web-app)

```shell
# アプリのビルド
npm run build

# build 実行で生成された静的サイトが格納されたディレクトリに移動
cd build

# Azure CLI で Azure App Service にデプロイする
randomIdentifier="1128"

name="react$randomIdentifier"
resourceGroup="$name-rg"
location="eastus"

# create resource group
az group create --name $resourceGroup --location $location

# deploy web app
az webapp up \
    --resource-group $resourceGroup \
    --plan "$name-plan" \
    --name $name \
    --location $location \
    --sku FREE \
    --html
```

### フロントエンドアプリケーションから Azure AD 認証を必要とする API を呼び出す

[アプリ コードでのトークンの取得](https://learn.microsoft.com/ja-jp/azure/app-service/configure-authentication-oauth-tokens#retrieve-tokens-in-app-code) に記載があるように、AAD 認証済クライアントは、`/.auth/me` にリクエストすることでアクセストークンを取得することができます。

API コールのためにフロントエンドアプリケーションコードで必要な実装は、以下の 2 点です。

- `/.auth/me` にリクエストして `access_token` を取得
- 取得した `access_token` をヘッダに追加して Azure Functions を呼び出す

実証実験のためのサンプルコードは以下の通りです。簡略化のためエラーハンドリング等は省略しています。

```javascript
async function getToken(url: string) {
    const res = await fetch(url);
    const json = await res.json();
    if (!json) {
        throw ReferenceError('Empty response');
    }

    console.log(`json: ${JSON.stringify(json)}`);
    return json[0]['access_token'];
}

async function callApi(url: string, token: string) {
    await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((resp) => {
            resp.text().then(function (respStr) {
                console.log(`success: ${respStr}`);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

export async function main() {
    const authUrl = 'https://YOURAPP.azurewebsites.net/.auth/me';
    const token = await getToken(authUrl);
    console.log(`token: ${token}`);

    const apiUrl =
        'https://YOURFUNC.azurewebsites.net/api/YOURFUNC?code=YOURCODE';
    callApi(apiUrl, token);
}
```

上記実装を追加した Pull Request はこちらです。

[support api call #4](https://github.com/ks6088ts-labs/react-ts/pull/4/files#diff-26ad4b834941d9b19ebf9db8082bd202aaf72ea0ddea85f5a8a0cb3c729cc6f2R7)

動作確認したサンプルコードはこちらで公開しています。

[github.com/ks6088ts-labs/react-ts](https://github.com/ks6088ts-labs/react-ts)

## AAD 認証の設定

- App Service (=フロントエンドアプリケーション)
    - `App Service > 認証` に Microsoft の ID プロバイダーを登録
        - 発行者の URL を空欄にする
    - `Azure AD > 管理 > API のアクセス許可` に API (=Azure Functions) のアクセス許可を追加
    - `loginParameters` 設定を Azure Resource Explorer で書き換える。(Azure FunctionsのアプリケーションIDを追記)
    - 参考: [Accessing Microsoft Graph with App Service Auth V2](https://azureossd.github.io/2021/06/07/authsettingsv2-graph/)
- Azure Functions (=API)
    - `関数アプリ > 設定 > 認証` の ID プロバイダーに Microsoft を追加
        - 発行者の URL を空欄にする
    - `Azure AD > 管理 > API のアクセス許可` に API (=Azure Functions) のアクセス許可を追加

## CORS 設定

最新のブラウザーでは、クライアントで悪意のあるコードが実行されるのを防ぐために、Web アプリケーションから別のドメインで実行されるリソースへの要求をブロックします。

今回は、App Service にデプロイした静的サイトのドメインからのリクエストを許可するため、Azure Functions の CORS 設定を変更します。

具体的には、Azure ポータルにて、`関数アプリ > API > CORS` を開いて、許可される元のドメインに `https://YOURAPP.azurewebsites.net` を追加するだけです。

- [お使いの Function App の管理 / クロス オリジン リソース共有](https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors)

## MSAL を使う場合

- [チュートリアル: 認証コード フローを使用して、ユーザーをサインインさせて React シングルページ アプリ (SPA) から Microsoft Graph API を呼び出す](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/tutorial-v2-react)
- [Azure-Samples/ms-identity-javascript-react-spa](https://github.com/Azure-Samples/ms-identity-javascript-react-spa)
- [How to call an AAD protected Azure Function from React](https://www.smcculloch.com/how-to-call-aad-protected-azure-function-from-react#:~:text=How%20to%20call%20an%20AAD%20protected%20Azure%20Function,...%205%20Step%205%3A%20Obtain%20Access%20Token%20)

実装に際しては上記ドキュメントをご参照ください。
MSAL ライブラリをアプリケーション側で import したり、アプリケーション側に認証設定を抱える(=アプリケーション ID やテナント設定を組み込む)ため、

- リソース変更の度に ID 設定変更を入れてフロントエンドアプリケーションをリビルドする必要がある
- 依存ライブラリの更新があったら都度更新する必要がある

といった作業が必要です。
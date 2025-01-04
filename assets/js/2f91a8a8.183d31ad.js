"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[3345],{7332:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var t=r(1770),s=r(4848),i=r(8453);const c={slug:"azure-ad-function-api",title:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059",authors:"ks6088ts",tags:["azure","azure-ad","msal"]},a="Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059",l={authorsImageUrls:[void 0]},o=[{value:"\u30cf\u30f3\u30ba\u30aa\u30f3",id:"\u30cf\u30f3\u30ba\u30aa\u30f3",level:2},{value:"React \u30a2\u30d7\u30ea\u306e\u4f5c\u6210",id:"react-\u30a2\u30d7\u30ea\u306e\u4f5c\u6210",level:3},{value:"React \u30a2\u30d7\u30ea\u306e\u30c7\u30d7\u30ed\u30a4",id:"react-\u30a2\u30d7\u30ea\u306e\u30c7\u30d7\u30ed\u30a4",level:3},{value:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure AD \u8a8d\u8a3c\u3092\u5fc5\u8981\u3068\u3059\u308b API \u3092\u547c\u3073\u51fa\u3059",id:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089-azure-ad-\u8a8d\u8a3c\u3092\u5fc5\u8981\u3068\u3059\u308b-api-\u3092\u547c\u3073\u51fa\u3059",level:3},{value:"AAD \u8a8d\u8a3c\u306e\u8a2d\u5b9a",id:"aad-\u8a8d\u8a3c\u306e\u8a2d\u5b9a",level:2},{value:"CORS \u8a2d\u5b9a",id:"cors-\u8a2d\u5b9a",level:2},{value:"MSAL \u3092\u4f7f\u3046\u5834\u5408",id:"msal-\u3092\u4f7f\u3046\u5834\u5408",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002\n\u53c2\u8003\u306b\u306a\u3063\u305f\u60c5\u5831\u306e\u30ea\u30f3\u30af\u3092\u307e\u3068\u3081\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Azure App Service \u4e0a\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f React \u88fd\u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089\u3001Azure Functions \u3092\u547c\u3073\u51fa\u3059\u30b5\u30f3\u30d7\u30eb\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u30a2\u30d7\u30ea\u306f\u4ee5\u4e0b\u306e\u8981\u6c42\u4e8b\u9805\u3092\u6e80\u305f\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u306f Azure AD \u8a8d\u8a3c\u3092\u901a\u3059\u3053\u3068\u3092\u5fc5\u9808\u3068\u3059\u308b"}),"\n",(0,s.jsx)(n.li,{children:"Azure Functions \u306f Azure AD \u8a8d\u8a3c\u3092\u5fc5\u9808\u3068\u3059\u308b"}),"\n",(0,s.jsxs)(n.li,{children:["\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u306e Azure AD \u8a8d\u8a3c\u3092\u901a\u3057\u305f\u30e6\u30fc\u30b6\u306f\u3001",(0,s.jsx)(n.strong,{children:"\u8ffd\u52a0\u306e\u8a8d\u8a3c\u3092\u901a\u3059\u3053\u3068\u306a\u304f"}),"\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u306e\u8a8d\u8a3c\u60c5\u5831\u3092\u7528\u3044\u3066 Azure Functions \u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b"]}),"\n",(0,s.jsx)(n.li,{children:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u3001Azure Functions \u53cc\u65b9\u306f Azure App Service \u306e\u7d44\u307f\u8fbc\u307f\u8a8d\u8a3c\u3092\u5229\u7528\u3057\u3001\u8a8d\u8a3c\u51e6\u7406\u306e\u4e00\u5207\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u306b\u7d44\u307f\u8fbc\u3080\u5fc5\u8981\u304c\u306a\u3044"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30cf\u30f3\u30ba\u30aa\u30f3",children:"\u30cf\u30f3\u30ba\u30aa\u30f3"}),"\n",(0,s.jsx)(n.h3,{id:"react-\u30a2\u30d7\u30ea\u306e\u4f5c\u6210",children:"React \u30a2\u30d7\u30ea\u306e\u4f5c\u6210"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u8a18\u4e8b\u3092\u53c2\u8003\u306b\u3001",(0,s.jsx)(n.code,{children:"create-react-app"})," \u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/ja-jp/azure/developer/javascript/how-to/with-web-app/static-web-app-with-swa-cli/create-react-app#create-react-app-with-npm-targeting-typescript",children:"TypeScript \u3092\u5bfe\u8c61\u3068\u3059\u308b npm \u3092\u4f7f\u7528\u3057\u305f React \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://create-react-app.dev/docs/adding-typescript/#installation",children:"Create React App / Adding TypeScript"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# create SPA app in spa directory\nnpx create-react-app react-ts --template typescript\n\n# install dependencies\ncd react-ts && npm install\n\n# build an app\nnpm run build\n\n# run an app\nnpm start\n"})}),"\n",(0,s.jsx)(n.h3,{id:"react-\u30a2\u30d7\u30ea\u306e\u30c7\u30d7\u30ed\u30a4",children:"React \u30a2\u30d7\u30ea\u306e\u30c7\u30d7\u30ed\u30a4"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u8a18\u4e8b\u3092\u53c2\u8003\u306b\u3001App Service \u306b React \u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/ja-jp/azure/app-service/quickstart-html#create-a-web-app",children:"Azure \u3067\u9759\u7684 HTML Web \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# \u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\nnpm run build\n\n# build \u5b9f\u884c\u3067\u751f\u6210\u3055\u308c\u305f\u9759\u7684\u30b5\u30a4\u30c8\u304c\u683c\u7d0d\u3055\u308c\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\ncd build\n\n# Azure CLI \u3067 Azure App Service \u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\nrandomIdentifier="1128"\n\nname="react$randomIdentifier"\nresourceGroup="$name-rg"\nlocation="eastus"\n\n# create resource group\naz group create --name $resourceGroup --location $location\n\n# deploy web app\naz webapp up \\\n    --resource-group $resourceGroup \\\n    --plan "$name-plan" \\\n    --name $name \\\n    --location $location \\\n    --sku FREE \\\n    --html\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089-azure-ad-\u8a8d\u8a3c\u3092\u5fc5\u8981\u3068\u3059\u308b-api-\u3092\u547c\u3073\u51fa\u3059",children:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure AD \u8a8d\u8a3c\u3092\u5fc5\u8981\u3068\u3059\u308b API \u3092\u547c\u3073\u51fa\u3059"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/ja-jp/azure/app-service/configure-authentication-oauth-tokens#retrieve-tokens-in-app-code",children:"\u30a2\u30d7\u30ea \u30b3\u30fc\u30c9\u3067\u306e\u30c8\u30fc\u30af\u30f3\u306e\u53d6\u5f97"})," \u306b\u8a18\u8f09\u304c\u3042\u308b\u3088\u3046\u306b\u3001AAD \u8a8d\u8a3c\u6e08\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u3001",(0,s.jsx)(n.code,{children:"/.auth/me"})," \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u3053\u3068\u3067\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"API \u30b3\u30fc\u30eb\u306e\u305f\u3081\u306b\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b3\u30fc\u30c9\u3067\u5fc5\u8981\u306a\u5b9f\u88c5\u306f\u3001\u4ee5\u4e0b\u306e 2 \u70b9\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/.auth/me"})," \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u3066 ",(0,s.jsx)(n.code,{children:"access_token"})," \u3092\u53d6\u5f97"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53d6\u5f97\u3057\u305f ",(0,s.jsx)(n.code,{children:"access_token"})," \u3092\u30d8\u30c3\u30c0\u306b\u8ffd\u52a0\u3057\u3066 Azure Functions \u3092\u547c\u3073\u51fa\u3059"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b9f\u8a3c\u5b9f\u9a13\u306e\u305f\u3081\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002\u7c21\u7565\u5316\u306e\u305f\u3081\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u7b49\u306f\u7701\u7565\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"async function getToken(url: string) {\n    const res = await fetch(url);\n    const json = await res.json();\n    if (!json) {\n        throw ReferenceError('Empty response');\n    }\n\n    console.log(`json: ${JSON.stringify(json)}`);\n    return json[0]['access_token'];\n}\n\nasync function callApi(url: string, token: string) {\n    await fetch(url, {\n        headers: {\n            Authorization: `Bearer ${token}`,\n        },\n    })\n        .then((resp) => {\n            resp.text().then(function (respStr) {\n                console.log(`success: ${respStr}`);\n            });\n        })\n        .catch((error) => {\n            console.log(error);\n        });\n}\n\nexport async function main() {\n    const authUrl = 'https://YOURAPP.azurewebsites.net/.auth/me';\n    const token = await getToken(authUrl);\n    console.log(`token: ${token}`);\n\n    const apiUrl =\n        'https://YOURFUNC.azurewebsites.net/api/YOURFUNC?code=YOURCODE';\n    callApi(apiUrl, token);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u8a18\u5b9f\u88c5\u3092\u8ffd\u52a0\u3057\u305f Pull Request \u306f\u3053\u3061\u3089\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ks6088ts-labs/react-ts/pull/4/files#diff-26ad4b834941d9b19ebf9db8082bd202aaf72ea0ddea85f5a8a0cb3c729cc6f2R7",children:"support api call #4"})}),"\n",(0,s.jsx)(n.p,{children:"\u52d5\u4f5c\u78ba\u8a8d\u3057\u305f\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u306f\u3053\u3061\u3089\u3067\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ks6088ts-labs/react-ts",children:"github.com/ks6088ts-labs/react-ts"})}),"\n",(0,s.jsx)(n.h2,{id:"aad-\u8a8d\u8a3c\u306e\u8a2d\u5b9a",children:"AAD \u8a8d\u8a3c\u306e\u8a2d\u5b9a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["App Service (=\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"App Service > \u8a8d\u8a3c"})," \u306b Microsoft \u306e ID \u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3092\u767b\u9332","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u767a\u884c\u8005\u306e URL \u3092\u7a7a\u6b04\u306b\u3059\u308b"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Azure AD > \u7ba1\u7406 > API \u306e\u30a2\u30af\u30bb\u30b9\u8a31\u53ef"})," \u306b API (=Azure Functions) \u306e\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3092\u8ffd\u52a0"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"loginParameters"})," \u8a2d\u5b9a\u3092 Azure Resource Explorer \u3067\u66f8\u304d\u63db\u3048\u308b\u3002(Azure Functions \u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 ID \u3092\u8ffd\u8a18)"]}),"\n",(0,s.jsxs)(n.li,{children:["\u53c2\u8003: ",(0,s.jsx)(n.a,{href:"https://azureossd.github.io/2021/06/07/authsettingsv2-graph/",children:"Accessing Microsoft Graph with App Service Auth V2"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Azure Functions (=API)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"\u95a2\u6570\u30a2\u30d7\u30ea > \u8a2d\u5b9a > \u8a8d\u8a3c"})," \u306e ID \u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306b Microsoft \u3092\u8ffd\u52a0","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u767a\u884c\u8005\u306e URL \u3092\u7a7a\u6b04\u306b\u3059\u308b"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Azure AD > \u7ba1\u7406 > API \u306e\u30a2\u30af\u30bb\u30b9\u8a31\u53ef"})," \u306b API (=Azure Functions) \u306e\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3092\u8ffd\u52a0"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cors-\u8a2d\u5b9a",children:"CORS \u8a2d\u5b9a"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u65b0\u306e\u30d6\u30e9\u30a6\u30b6\u30fc\u3067\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u60aa\u610f\u306e\u3042\u308b\u30b3\u30fc\u30c9\u304c\u5b9f\u884c\u3055\u308c\u308b\u306e\u3092\u9632\u3050\u305f\u3081\u306b\u3001Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u5225\u306e\u30c9\u30e1\u30a4\u30f3\u3067\u5b9f\u884c\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u8981\u6c42\u3092\u30d6\u30ed\u30c3\u30af\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4eca\u56de\u306f\u3001App Service \u306b\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u9759\u7684\u30b5\u30a4\u30c8\u306e\u30c9\u30e1\u30a4\u30f3\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8a31\u53ef\u3059\u308b\u305f\u3081\u3001Azure Functions \u306e CORS \u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5177\u4f53\u7684\u306b\u306f\u3001Azure \u30dd\u30fc\u30bf\u30eb\u306b\u3066\u3001",(0,s.jsx)(n.code,{children:"\u95a2\u6570\u30a2\u30d7\u30ea > API > CORS"})," \u3092\u958b\u3044\u3066\u3001\u8a31\u53ef\u3055\u308c\u308b\u5143\u306e\u30c9\u30e1\u30a4\u30f3\u306b ",(0,s.jsx)(n.code,{children:"https://YOURAPP.azurewebsites.net"})," \u3092\u8ffd\u52a0\u3059\u308b\u3060\u3051\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors",children:"\u304a\u4f7f\u3044\u306e Function App \u306e\u7ba1\u7406 / \u30af\u30ed\u30b9 \u30aa\u30ea\u30b8\u30f3 \u30ea\u30bd\u30fc\u30b9\u5171\u6709"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"msal-\u3092\u4f7f\u3046\u5834\u5408",children:"MSAL \u3092\u4f7f\u3046\u5834\u5408"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/ja-jp/azure/active-directory/develop/tutorial-v2-react",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb: \u8a8d\u8a3c\u30b3\u30fc\u30c9 \u30d5\u30ed\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u30b5\u30a4\u30f3\u30a4\u30f3\u3055\u305b\u3066 React \u30b7\u30f3\u30b0\u30eb\u30da\u30fc\u30b8 \u30a2\u30d7\u30ea (SPA) \u304b\u3089 Microsoft Graph API \u3092\u547c\u3073\u51fa\u3059"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/Azure-Samples/ms-identity-javascript-react-spa",children:"Azure-Samples/ms-identity-javascript-react-spa"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.smcculloch.com/how-to-call-aad-protected-azure-function-from-react#:~:text=How%20to%20call%20an%20AAD%20protected%20Azure%20Function,...%205%20Step%205%3A%20Obtain%20Access%20Token%20",children:"How to call an AAD protected Azure Function from React"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b9f\u88c5\u306b\u969b\u3057\u3066\u306f\u4e0a\u8a18\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002\nMSAL \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5074\u306b\u7d44\u307f\u8fbc\u3080\u305f\u3081\u4ee5\u4e0b\u306e\u5bfe\u5fdc\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30ea\u30bd\u30fc\u30b9\u5909\u66f4\u306e\u5ea6\u306b ID \u8a2d\u5b9a\u5909\u66f4\u3092\u5165\u308c\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u3092\u30ea\u30d3\u30eb\u30c9\u3059\u308b"}),"\n",(0,s.jsx)(n.li,{children:"\u4f9d\u5b58\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u66f4\u65b0\u304c\u3042\u3063\u305f\u3089\u90fd\u5ea6\u66f4\u65b0\u3059\u308b"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var t=r(6540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}},1770:e=>{e.exports=JSON.parse('{"permalink":"/blog/azure-ad-function-api","source":"@site/blog/2023-03-17-azure-ad-function-api.md","title":"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059","description":"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002","date":"2023-03-17T00:00:00.000Z","tags":[{"inline":true,"label":"azure","permalink":"/blog/tags/azure"},{"inline":true,"label":"azure-ad","permalink":"/blog/tags/azure-ad"},{"inline":true,"label":"msal","permalink":"/blog/tags/msal"}],"readingTime":5.605,"hasTruncateMarker":true,"authors":[{"name":"ks6088ts","title":"Software Engineer / Solutions Architect","url":"https://github.com/ks6088ts","imageURL":"https://github.com/ks6088ts.png","key":"ks6088ts","page":null}],"frontMatter":{"slug":"azure-ad-function-api","title":"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059","authors":"ks6088ts","tags":["azure","azure-ad","msal"]},"unlisted":false,"prevItem":{"title":"textlint \u3092\u6709\u52b9\u5316\u3059\u308b","permalink":"/blog/how-to-apply-textlint"},"nextItem":{"title":"Azure Container Apps \u30cf\u30f3\u30ba\u30aa\u30f3","permalink":"/blog/container-apps-handson"}}')}}]);
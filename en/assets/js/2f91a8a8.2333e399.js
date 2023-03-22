"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[7760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),k=r,d=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={slug:"azure-ad-function-api",title:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059",authors:"ks6088ts",tags:["azure","azure-ad","msal"]},i=void 0,p={permalink:"/en/blog/azure-ad-function-api",source:"@site/blog/2023-03-17-azure-ad-function-api.md",title:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059",description:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002",date:"2023-03-17T00:00:00.000Z",formattedDate:"March 17, 2023",tags:[{label:"azure",permalink:"/en/blog/tags/azure"},{label:"azure-ad",permalink:"/en/blog/tags/azure-ad"},{label:"msal",permalink:"/en/blog/tags/msal"}],readingTime:5.82,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"azure-ad-function-api",title:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059",authors:"ks6088ts",tags:["azure","azure-ad","msal"]},prevItem:{title:"Azure IoT Edge \u3092\u7528\u3044\u305f\u30cf\u30f3\u30ba\u30aa\u30f3",permalink:"/en/blog/handson-iot-edge"},nextItem:{title:"Azure Container Apps \u30cf\u30f3\u30ba\u30aa\u30f3",permalink:"/en/blog/container-apps-handson"}},o={authorsImageUrls:[void 0]},u=[{value:"\u30cf\u30f3\u30ba\u30aa\u30f3",id:"\u30cf\u30f3\u30ba\u30aa\u30f3",level:2},{value:"React \u30a2\u30d7\u30ea\u306e\u4f5c\u6210",id:"react-\u30a2\u30d7\u30ea\u306e\u4f5c\u6210",level:3},{value:"React \u30a2\u30d7\u30ea\u306e\u30c7\u30d7\u30ed\u30a4",id:"react-\u30a2\u30d7\u30ea\u306e\u30c7\u30d7\u30ed\u30a4",level:3},{value:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089 Azure AD \u8a8d\u8a3c\u3092\u5fc5\u8981\u3068\u3059\u308b API \u3092\u547c\u3073\u51fa\u3059",id:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089-azure-ad-\u8a8d\u8a3c\u3092\u5fc5\u8981\u3068\u3059\u308b-api-\u3092\u547c\u3073\u51fa\u3059",level:3},{value:"AAD \u8a8d\u8a3c\u306e\u8a2d\u5b9a",id:"aad-\u8a8d\u8a3c\u306e\u8a2d\u5b9a",level:2},{value:"CORS \u8a2d\u5b9a",id:"cors-\u8a2d\u5b9a",level:2},{value:"MSAL \u3092\u4f7f\u3046\u5834\u5408",id:"msal-\u3092\u4f7f\u3046\u5834\u5408",level:2}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002\n\u53c2\u8003\u306b\u306a\u3063\u305f\u60c5\u5831\u306e\u30ea\u30f3\u30af\u3092\u307e\u3068\u3081\u307e\u3059\u3002"),(0,r.kt)("h1",{id:"azure-ad-\u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089-azure-functions-\u3092\u547c\u3073\u51fa\u3059"},"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059"),(0,r.kt)("p",null,"Azure App Service \u4e0a\u306b\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f React \u88fd\u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u3001Azure Functions \u3092\u547c\u3073\u51fa\u3059\u30b5\u30f3\u30d7\u30eb\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u672c\u30a2\u30d7\u30ea\u306f\u4ee5\u4e0b\u306e\u8981\u6c42\u4e8b\u9805\u3092\u6e80\u305f\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f Azure AD \u8a8d\u8a3c\u3092\u901a\u3059\u3053\u3068\u3092\u5fc5\u9808\u3068\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"Azure Functions \u306f Azure AD \u8a8d\u8a3c\u3092\u5fc5\u9808\u3068\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e Azure AD \u8a8d\u8a3c\u3092\u901a\u3057\u305f\u30e6\u30fc\u30b6\u306f\u3001",(0,r.kt)("strong",{parentName:"li"},"\u8ffd\u52a0\u306e\u8a8d\u8a3c\u3092\u901a\u3059\u3053\u3068\u306a\u304f"),"\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8a8d\u8a3c\u60c5\u5831\u3092\u7528\u3044\u3066 Azure Functions \u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3001Azure Functions \u53cc\u65b9\u306f Azure App Service \u306e\u7d44\u307f\u8fbc\u307f\u8a8d\u8a3c\u3092\u5229\u7528\u3057\u3001\u8a8d\u8a3c\u51e6\u7406\u306e\u4e00\u5207\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u306b\u7d44\u307f\u8fbc\u3080\u5fc5\u8981\u304c\u306a\u3044(\u21d4 MSAL \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3057\u306a\u3044)")),(0,r.kt)("h2",{id:"\u30cf\u30f3\u30ba\u30aa\u30f3"},"\u30cf\u30f3\u30ba\u30aa\u30f3"),(0,r.kt)("h3",{id:"react-\u30a2\u30d7\u30ea\u306e\u4f5c\u6210"},"React \u30a2\u30d7\u30ea\u306e\u4f5c\u6210"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u8a18\u4e8b\u3092\u53c2\u8003\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app")," \u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/developer/javascript/how-to/with-web-app/static-web-app-with-swa-cli/create-react-app#create-react-app-with-npm-targeting-typescript"},"TypeScript \u3092\u5bfe\u8c61\u3068\u3059\u308b npm \u3092\u4f7f\u7528\u3057\u305f React \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-typescript/#installation"},"Create React App / Adding TypeScript")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# create SPA app in spa directory\nnpx create-react-app react-ts --template typescript\n\n# install dependencies\ncd react-ts && npm install\n\n# build an app\nnpm run build\n\n# run an app\nnpm start\n")),(0,r.kt)("h3",{id:"react-\u30a2\u30d7\u30ea\u306e\u30c7\u30d7\u30ed\u30a4"},"React \u30a2\u30d7\u30ea\u306e\u30c7\u30d7\u30ed\u30a4"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u8a18\u4e8b\u3092\u53c2\u8003\u306b\u3001App Service \u306b React \u306e\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/azure/app-service/quickstart-html#create-a-web-app"},"Azure \u3067\u9759\u7684 HTML Web \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\nnpm run build\n\n# build \u5b9f\u884c\u3067\u751f\u6210\u3055\u308c\u305f\u9759\u7684\u30b5\u30a4\u30c8\u304c\u683c\u7d0d\u3055\u308c\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\ncd build\n\n# Azure CLI \u3067 Azure App Service \u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\nrandomIdentifier="1128"\n\nname="react$randomIdentifier"\nresourceGroup="$name-rg"\nlocation="eastus"\n\n# create resource group\naz group create --name $resourceGroup --location $location\n\n# deploy web app\naz webapp up \\\n    --resource-group $resourceGroup \\\n    --plan "$name-plan" \\\n    --name $name \\\n    --location $location \\\n    --sku FREE \\\n    --html\n')),(0,r.kt)("h3",{id:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089-azure-ad-\u8a8d\u8a3c\u3092\u5fc5\u8981\u3068\u3059\u308b-api-\u3092\u547c\u3073\u51fa\u3059"},"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089 Azure AD \u8a8d\u8a3c\u3092\u5fc5\u8981\u3068\u3059\u308b API \u3092\u547c\u3073\u51fa\u3059"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/app-service/configure-authentication-oauth-tokens#retrieve-tokens-in-app-code"},"\u30a2\u30d7\u30ea \u30b3\u30fc\u30c9\u3067\u306e\u30c8\u30fc\u30af\u30f3\u306e\u53d6\u5f97")," \u306b\u8a18\u8f09\u304c\u3042\u308b\u3088\u3046\u306b\u3001AAD \u8a8d\u8a3c\u6e08\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"/.auth/me")," \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u3053\u3068\u3067\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"API \u30b3\u30fc\u30eb\u306e\u305f\u3081\u306b\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u3067\u5fc5\u8981\u306a\u5b9f\u88c5\u306f\u3001\u4ee5\u4e0b\u306e 2 \u70b9\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/.auth/me")," \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u3066 ",(0,r.kt)("inlineCode",{parentName:"li"},"access_token")," \u3092\u53d6\u5f97"),(0,r.kt)("li",{parentName:"ul"},"\u53d6\u5f97\u3057\u305f ",(0,r.kt)("inlineCode",{parentName:"li"},"access_token")," \u3092\u30d8\u30c3\u30c0\u306b\u8ffd\u52a0\u3057\u3066 Azure Functions \u3092\u547c\u3073\u51fa\u3059")),(0,r.kt)("p",null,"\u5b9f\u8a3c\u5b9f\u9a13\u306e\u305f\u3081\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002\u7c21\u7565\u5316\u306e\u305f\u3081\u30a8\u30e9\u30fc\u30cf\u30f3\u30c9\u30ea\u30f3\u30b0\u7b49\u306f\u7701\u7565\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function getToken(url: string) {\n    const res = await fetch(url);\n    const json = await res.json();\n    if (!json) {\n        throw ReferenceError('Empty response');\n    }\n\n    console.log(`json: ${JSON.stringify(json)}`);\n    return json[0]['access_token'];\n}\n\nasync function callApi(url: string, token: string) {\n    await fetch(url, {\n        headers: {\n            Authorization: `Bearer ${token}`,\n        },\n    })\n        .then((resp) => {\n            resp.text().then(function (respStr) {\n                console.log(`success: ${respStr}`);\n            });\n        })\n        .catch((error) => {\n            console.log(error);\n        });\n}\n\nexport async function main() {\n    const authUrl = 'https://YOURAPP.azurewebsites.net/.auth/me';\n    const token = await getToken(authUrl);\n    console.log(`token: ${token}`);\n\n    const apiUrl =\n        'https://YOURFUNC.azurewebsites.net/api/YOURFUNC?code=YOURCODE';\n    callApi(apiUrl, token);\n}\n")),(0,r.kt)("p",null,"\u4e0a\u8a18\u5b9f\u88c5\u3092\u8ffd\u52a0\u3057\u305f Pull Request \u306f\u3053\u3061\u3089\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ks6088ts-labs/react-ts/pull/4/files#diff-26ad4b834941d9b19ebf9db8082bd202aaf72ea0ddea85f5a8a0cb3c729cc6f2R7"},"support api call #4")),(0,r.kt)("p",null,"\u52d5\u4f5c\u78ba\u8a8d\u3057\u305f\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u306f\u3053\u3061\u3089\u3067\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ks6088ts-labs/react-ts"},"github.com/ks6088ts-labs/react-ts")),(0,r.kt)("h2",{id:"aad-\u8a8d\u8a3c\u306e\u8a2d\u5b9a"},"AAD \u8a8d\u8a3c\u306e\u8a2d\u5b9a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App Service (=\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App Service > \u8a8d\u8a3c")," \u306b Microsoft \u306e ID \u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3092\u767b\u9332",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u767a\u884c\u8005\u306e URL \u3092\u7a7a\u6b04\u306b\u3059\u308b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Azure AD > \u7ba1\u7406 > API \u306e\u30a2\u30af\u30bb\u30b9\u8a31\u53ef")," \u306b API (=Azure Functions) \u306e\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3092\u8ffd\u52a0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loginParameters")," \u8a2d\u5b9a\u3092 Azure Resource Explorer \u3067\u66f8\u304d\u63db\u3048\u308b\u3002(Azure Functions\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3ID\u3092\u8ffd\u8a18)"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003: ",(0,r.kt)("a",{parentName:"li",href:"https://azureossd.github.io/2021/06/07/authsettingsv2-graph/"},"Accessing Microsoft Graph with App Service Auth V2")))),(0,r.kt)("li",{parentName:"ul"},"Azure Functions (=API)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\u95a2\u6570\u30a2\u30d7\u30ea > \u8a2d\u5b9a > \u8a8d\u8a3c")," \u306e ID \u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306b Microsoft \u3092\u8ffd\u52a0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u767a\u884c\u8005\u306e URL \u3092\u7a7a\u6b04\u306b\u3059\u308b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Azure AD > \u7ba1\u7406 > API \u306e\u30a2\u30af\u30bb\u30b9\u8a31\u53ef")," \u306b API (=Azure Functions) \u306e\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3092\u8ffd\u52a0")))),(0,r.kt)("h2",{id:"cors-\u8a2d\u5b9a"},"CORS \u8a2d\u5b9a"),(0,r.kt)("p",null,"\u6700\u65b0\u306e\u30d6\u30e9\u30a6\u30b6\u30fc\u3067\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u60aa\u610f\u306e\u3042\u308b\u30b3\u30fc\u30c9\u304c\u5b9f\u884c\u3055\u308c\u308b\u306e\u3092\u9632\u3050\u305f\u3081\u306b\u3001Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u5225\u306e\u30c9\u30e1\u30a4\u30f3\u3067\u5b9f\u884c\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\u3078\u306e\u8981\u6c42\u3092\u30d6\u30ed\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u3001App Service \u306b\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u9759\u7684\u30b5\u30a4\u30c8\u306e\u30c9\u30e1\u30a4\u30f3\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8a31\u53ef\u3059\u308b\u305f\u3081\u3001Azure Functions \u306e CORS \u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u7684\u306b\u306f\u3001Azure \u30dd\u30fc\u30bf\u30eb\u306b\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u95a2\u6570\u30a2\u30d7\u30ea > API > CORS")," \u3092\u958b\u3044\u3066\u3001\u8a31\u53ef\u3055\u308c\u308b\u5143\u306e\u30c9\u30e1\u30a4\u30f3\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"https://YOURAPP.azurewebsites.net")," \u3092\u8ffd\u52a0\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors"},"\u304a\u4f7f\u3044\u306e Function App \u306e\u7ba1\u7406 / \u30af\u30ed\u30b9 \u30aa\u30ea\u30b8\u30f3 \u30ea\u30bd\u30fc\u30b9\u5171\u6709"))),(0,r.kt)("h2",{id:"msal-\u3092\u4f7f\u3046\u5834\u5408"},"MSAL \u3092\u4f7f\u3046\u5834\u5408"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/azure/active-directory/develop/tutorial-v2-react"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb: \u8a8d\u8a3c\u30b3\u30fc\u30c9 \u30d5\u30ed\u30fc\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u3092\u30b5\u30a4\u30f3\u30a4\u30f3\u3055\u305b\u3066 React \u30b7\u30f3\u30b0\u30eb\u30da\u30fc\u30b8 \u30a2\u30d7\u30ea (SPA) \u304b\u3089 Microsoft Graph API \u3092\u547c\u3073\u51fa\u3059")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Azure-Samples/ms-identity-javascript-react-spa"},"Azure-Samples/ms-identity-javascript-react-spa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.smcculloch.com/how-to-call-aad-protected-azure-function-from-react#:~:text=How%20to%20call%20an%20AAD%20protected%20Azure%20Function,...%205%20Step%205%3A%20Obtain%20Access%20Token%20"},"How to call an AAD protected Azure Function from React"))),(0,r.kt)("p",null,"\u5b9f\u88c5\u306b\u969b\u3057\u3066\u306f\u4e0a\u8a18\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002\nMSAL \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5074\u3067 import \u3057\u305f\u308a\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5074\u306b\u8a8d\u8a3c\u8a2d\u5b9a\u3092\u62b1\u3048\u308b(=\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3 ID \u3084\u30c6\u30ca\u30f3\u30c8\u8a2d\u5b9a\u3092\u7d44\u307f\u8fbc\u3080)\u305f\u3081\u3001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30ea\u30bd\u30fc\u30b9\u5909\u66f4\u306e\u5ea6\u306b ID \u8a2d\u5b9a\u5909\u66f4\u3092\u5165\u308c\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30ea\u30d3\u30eb\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u5b58\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u66f4\u65b0\u304c\u3042\u3063\u305f\u3089\u90fd\u5ea6\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b")),(0,r.kt)("p",null,"\u3068\u3044\u3063\u305f\u4f5c\u696d\u304c\u5fc5\u8981\u3067\u3059\u3002"))}m.isMDXComponent=!0}}]);
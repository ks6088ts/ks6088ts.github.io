"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[125],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),k=r,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||i;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=k;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4853:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={slug:"aoai-private-endpoint-managed-id",title:"AOAI \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3057\u3001VM \u306e\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u5229\u7528\u3057\u3066 API Key \u7121\u3057\u3067 AOAI \u3092\u547c\u3073\u51fa\u3059",authors:"ks6088ts",tags:["azure","aoai","bicep","iac"]},o=void 0,l={permalink:"/en/blog/aoai-private-endpoint-managed-id",source:"@site/blog/2023-11-13-managed-id-aoai.md",title:"AOAI \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3057\u3001VM \u306e\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u5229\u7528\u3057\u3066 API Key \u7121\u3057\u3067 AOAI \u3092\u547c\u3073\u51fa\u3059",description:"\u672c\u8a18\u4e8b\u3067\u306f\u4ee5\u4e0b\u306e 2 \u3064\u306e\u30b7\u30ca\u30ea\u30aa\u3092\u30cf\u30f3\u30ba\u30aa\u30f3\u5f62\u5f0f\u3067\u8aac\u660e\u3057\u307e\u3059\u3002",date:"2023-11-13T00:00:00.000Z",formattedDate:"November 13, 2023",tags:[{label:"azure",permalink:"/en/blog/tags/azure"},{label:"aoai",permalink:"/en/blog/tags/aoai"},{label:"bicep",permalink:"/en/blog/tags/bicep"},{label:"iac",permalink:"/en/blog/tags/iac"}],readingTime:4.065,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"aoai-private-endpoint-managed-id",title:"AOAI \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3057\u3001VM \u306e\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u5229\u7528\u3057\u3066 API Key \u7121\u3057\u3067 AOAI \u3092\u547c\u3073\u51fa\u3059",authors:"ks6088ts",tags:["azure","aoai","bicep","iac"]},prevItem:{title:"Microsoft Graph API \u95a2\u9023\u60c5\u5831\u306e\u307e\u3068\u3081",permalink:"/en/blog/graph-api-summary"},nextItem:{title:"ks6088ts-labs/baseline-environment-on-azure-bicep \u306e\u30cf\u30f3\u30ba\u30aa\u30f3",permalink:"/en/blog/handson-baseline-environment-on-azure-bicep"}},p={authorsImageUrls:[void 0]},s=[{value:"\u958b\u767a\u74b0\u5883\u306e\u6e96\u5099",id:"\u958b\u767a\u74b0\u5883\u306e\u6e96\u5099",level:2},{value:"\u4e8b\u524d\u6e96\u5099",id:"\u4e8b\u524d\u6e96\u5099",level:2},{value:"1. AOAI \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3059\u308b\u65b9\u6cd5",id:"1-aoai-\u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3059\u308b\u65b9\u6cd5",level:2},{value:"2. VM \u306e\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u5229\u7528\u3057\u3066 API Key \u7121\u3057\u3067 AOAI \u3092\u547c\u3073\u51fa\u3059\u65b9\u6cd5",id:"2-vm-\u306e\u30de\u30cd\u30fc\u30b8\u30c9-id-\u3092\u5229\u7528\u3057\u3066-api-key-\u7121\u3057\u3067-aoai-\u3092\u547c\u3073\u51fa\u3059\u65b9\u6cd5",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],u={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f\u4ee5\u4e0b\u306e 2 \u3064\u306e\u30b7\u30ca\u30ea\u30aa\u3092\u30cf\u30f3\u30ba\u30aa\u30f3\u5f62\u5f0f\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"AOAI \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3059\u308b\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ol"},"VM \u306e\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u5229\u7528\u3057\u3066 API Key \u7121\u3057\u3067 AOAI \u3092\u547c\u3073\u51fa\u3059\u65b9\u6cd5")),(0,r.kt)("h2",{id:"\u958b\u767a\u74b0\u5883\u306e\u6e96\u5099"},"\u958b\u767a\u74b0\u5883\u306e\u6e96\u5099"),(0,r.kt)("p",null,"\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u59cb\u3081\u308b\u524d\u306b\u3001\u304a\u4f7f\u3044\u306e\u958b\u767a\u30de\u30b7\u30f3\u306b\u6b21\u306e\u74b0\u5883\u3092\u6e96\u5099\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/cli/azure/install-azure-cli"},"Azure CLI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/azure/azure-resource-manager/bicep/install#azure-cli"},"Bicep")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/"},"GNU Make"))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u74b0\u5883\u3067\u52d5\u4f5c\u78ba\u8a8d\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\u276f az version\n{\n  "azure-cli": "2.51.0",\n  "azure-cli-core": "2.51.0",\n  "azure-cli-telemetry": "1.1.0",\n  "extensions": {\n    "azure-iot": "0.22.0",\n    "containerapp": "0.3.41"\n  }\n}\n\n\u276f az bicep version\nBicep CLI version 0.22.6 (d62b94db31)\n')),(0,r.kt)("p",null,"\u672c\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u306f Azure OpenAI Service \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3059\u308b\u52d5\u4f5c\u78ba\u8a8d\u3092 VM \u304b\u3089\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u4e8b\u524d\u6e96\u5099"},"\u4e8b\u524d\u6e96\u5099"),(0,r.kt)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3057\u3066 ",(0,r.kt)("inlineCode",{parentName:"p"},"infra/")," \u306b\u79fb\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# clone repository\ngit clone https://github.com/ks6088ts-labs/baseline-environment-on-azure-bicep.git\ncd baseline-environment-on-azure-bicep/infra\n")),(0,r.kt)("p",null,"\u30b7\u30ca\u30ea\u30aa\u3054\u3068\u306b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u5206\u3051\u3089\u308c\u3066\u3044\u308b\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u5404\u30b7\u30ca\u30ea\u30aa\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u672c\u8a18\u4e8b\u3067\u306f example \u30b7\u30ca\u30ea\u30aa\u3092\u4f7f\u3063\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# deploy example resource\nmake deployment-create SCENARIO=example\n")),(0,r.kt)("p",null,"(FIXME: \u30c7\u30d5\u30a9\u30eb\u30c8\u3060\u3068\u95a2\u4fc2\u306e\u306a\u3044\u4e0d\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u3082\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002\u5fc5\u8981\u306b\u5fdc\u3058\u3066 .bicepparam \u306e\u30d5\u30e9\u30b0\u8a2d\u5b9a\u3092\u66f8\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002\u4eca\u56de\u306f\u8aac\u660e\u306e\u305f\u3081\u5168\u90e8\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u3044\u307e\u3059\u3002)"),(0,r.kt)("h2",{id:"1-aoai-\u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3059\u308b\u65b9\u6cd5"},"1. AOAI \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3059\u308b\u65b9\u6cd5"),(0,r.kt)("p",null,"Azure Portal \u304b\u3089\u306e\u64cd\u4f5c\u65b9\u6cd5\u306f ",(0,r.kt)("a",{parentName:"p",href:"https://blog.jbs.co.jp/entry/2023/04/07/173940"},"Azure OpenAI \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\uff08Private Endpoint\uff09\u3092\u8a2d\u5b9a\u3057\u3066\u6771\u65e5\u672c\u30ea\u30fc\u30b8\u30e7\u30f3\u306e\u4eee\u60f3\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u307f\u304b\u3089\u4f7f\u3046")," \u304c\u8a73\u3057\u3044\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4eca\u56de\u306f Azure Portal \u3067\u306f\u306a\u304f IaC \u30b9\u30af\u30ea\u30d7\u30c8\u306b\u3066\u30a4\u30f3\u30d5\u30e9\u306f\u69cb\u7bc9\u6e08\u3067\u3059\u3002Private Endpoint \u63a5\u7d9a\u306b\u95a2\u9023\u3059\u308b\u30ea\u30bd\u30fc\u30b9\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ks6088ts-labs/baseline-environment-on-azure-bicep/blob/main/infra/modules/virtualNetwork.bicep"},"baseline-environment-on-azure-bicep/infra/modules/virtualNetwork.bicep")," \u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"openAiPrivateDnsZone "),", ",(0,r.kt)("inlineCode",{parentName:"p"},"openAiPrivateDnsZoneVirtualNetworkLink"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"openAiPrivateEndpoint"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"openAiPrivateDnsZoneGroupName")," \u304c\u8a72\u5f53\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3061\u3089\u306e\u74b0\u5883\u3067 VM \u306b SSH \u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066 Azure OpenAI Service \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u51fa\u6765\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u306e\u3088\u3046\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"nslookup")," \u306e\u7d50\u679c\u3092\u898b\u308b\u3068\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a2\u30c9\u30ec\u30b9\u304c\u8fd4\u3063\u3066\u304d\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","ref. ",(0,r.kt)("a",{parentName:"p",href:"https://zenn.dev/microsoft/articles/198989f60eba61#vm%E3%81%B8rdp%E6%8E%A5%E7%B6%9A"},"Azure OpenAI Service \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3059\u308b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"azadmin@TestVm:~$ nslookup  your-aoai-name.openai.azure.com\nServer:         127.0.0.53\nAddress:        127.0.0.53#53\n\nNon-authoritative answer:\nyour-aoai-name.openai.azure.com    canonical name = your-aoai-name.privatelink.openai.azure.com.\nName:   your-aoai-name.privatelink.openai.azure.com\nAddress: 10.3.1.5\n")),(0,r.kt)("h2",{id:"2-vm-\u306e\u30de\u30cd\u30fc\u30b8\u30c9-id-\u3092\u5229\u7528\u3057\u3066-api-key-\u7121\u3057\u3067-aoai-\u3092\u547c\u3073\u51fa\u3059\u65b9\u6cd5"},"2. VM \u306e\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u5229\u7528\u3057\u3066 API Key \u7121\u3057\u3067 AOAI \u3092\u547c\u3073\u51fa\u3059\u65b9\u6cd5"),(0,r.kt)("p",null,"\u624b\u9806\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"VM \u306e\u30b7\u30b9\u30c6\u30e0\u5272\u308a\u5f53\u3066\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u6709\u52b9\u306b\u3059\u308b (\u4eca\u56de\u306f Bicep \u5074\u3067\u65e2\u306b\u6709\u52b9\u5316\u3057\u3066\u3044\u307e\u3059\u3002\u53c2\u8003\u8cc7\u6599\u306f ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/entra/identity/managed-identities-azure-resources/qs-configure-portal-windows-vm"},"Azure portal \u3092\u4f7f\u7528\u3057\u3066 Azure VM \u3067 Azure \u30ea\u30bd\u30fc\u30b9\u306e\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u69cb\u6210\u3059\u308b"),")"),(0,r.kt)("li",{parentName:"ol"},"VM \u306e\u30b7\u30b9\u30c6\u30e0\u5272\u308a\u5f53\u3066\u30de\u30cd\u30fc\u30b8\u30c9 ID \u306b\u5bfe\u3057\u3066 AOAI \u30ea\u30bd\u30fc\u30b9\u306e\u547c\u3073\u51fa\u3057\u6a29\u9650\u3092\u5272\u308a\u5f53\u3066\u308b (Azure Portal \u304b\u3089 AOAI \u30ea\u30bd\u30fc\u30b9\u3092\u958b\u304d\u3001IAM > Add role assignment > ",(0,r.kt)("inlineCode",{parentName:"li"},"Cognitive Services OpenAI User")," \u3092\u9078\u3073\u3001\u5272\u5f53\u5148\u3068\u3057\u3066 VM \u306e\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u53c2\u8003: ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/azure/ai-services/openai/how-to/managed-identity"},"\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u4f7f\u7528\u3057\u3066 Azure OpenAI Service \u3092\u69cb\u6210\u3059\u308b\u65b9\u6cd5"),")"),(0,r.kt)("li",{parentName:"ol"},"\u4ee5\u4e0b\u30b3\u30de\u30f3\u30c9\u3067 API Key \u7121\u3057\u306b\u547c\u3073\u51fa\u3057\u304c\u3067\u304d\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4eee\u60f3\u74b0\u5883\u306e\u6e96\u5099\npython3 -m venv .venv\nsource .venv/bin/activate\npip install azure-identity openai==0.28\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"python")," \u3092\u5b9f\u884c\u3057 REPL \u74b0\u5883\u3067\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3092\u9010\u6b21\u5b9f\u884c\u3057\u307e\u3059\u3002\n\u30ea\u30bd\u30fc\u30b9\u540d\u306a\u3069\u306f\u9069\u5b9c\u8aad\u307f\u66ff\u3048\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import openai\nfrom azure.identity import DefaultAzureCredential\n\ncredential = DefaultAzureCredential()\ntoken = credential.get_token("https://cognitiveservices.azure.com/.default")\n\nopenai.api_type = "azure_ad"\nopenai.api_key = token.token\nopenai.api_version = "2023-07-01-preview"\nopenai.api_base = "https://your-aoai.openai.azure.com"\n\nresponse = openai.ChatCompletion.create(\n  engine="gpt-35-turbo",\n  messages = [\n    {"role":"user","content":"Hello"},\n  ],\n  temperature=0,\n)\n\n# \u78ba\u8a8d\nresponse\n')),(0,r.kt)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ks6088ts-labs/baseline-environment-on-azure-bicep"},"ks6088ts-labs/baseline-environment-on-azure-bicep"))))}m.isMDXComponent=!0}}]);
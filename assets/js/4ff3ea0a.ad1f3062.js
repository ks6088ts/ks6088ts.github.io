"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[4730],{3905:(t,r,e)=>{e.d(r,{Zo:()=>c,kt:()=>u});var a=e(7294);function o(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function n(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,a)}return e}function p(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?n(Object(e),!0).forEach((function(r){o(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function i(t,r){if(null==t)return{};var e,a,o=function(t,r){if(null==t)return{};var e,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)e=n[a],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)e=n[a],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var l=a.createContext({}),s=function(t){var r=a.useContext(l),e=r;return t&&(e="function"==typeof t?t(r):p(p({},r),t)),e},c=function(t){var r=s(t.components);return a.createElement(l.Provider,{value:r},t.children)},m="mdxType",h={inlineCode:"code",wrapper:function(t){var r=t.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(t,r){var e=t.components,o=t.mdxType,n=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=s(e),f=o,u=m["".concat(l,".").concat(f)]||m[f]||h[f]||n;return e?a.createElement(u,p(p({ref:r},c),{},{components:e})):a.createElement(u,p({ref:r},c))}));function u(t,r){var e=arguments,o=r&&r.mdxType;if("string"==typeof t||o){var n=e.length,p=new Array(n);p[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=t,i[m]="string"==typeof t?t:o,p[1]=i;for(var s=2;s<n;s++)p[s]=e[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,e)}f.displayName="MDXCreateElement"},8662:(t,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=e(7462),o=(e(7294),e(3905));const n={slug:"graph-api-summary",title:"Microsoft Graph API \u95a2\u9023\u60c5\u5831\u306e\u307e\u3068\u3081",authors:"ks6088ts",tags:["Microsoft Graph"]},p=void 0,i={permalink:"/blog/graph-api-summary",source:"@site/blog/2024-01-11-graph-api-summary.md",title:"Microsoft Graph API \u95a2\u9023\u60c5\u5831\u306e\u307e\u3068\u3081",description:"Microsoft Graph API \u3092\u89e6\u308b\u5fc5\u8981\u304c\u51fa\u3066\u304d\u305f\u306e\u3067\u3001\u95a2\u9023\u60c5\u5831\u3092\u307e\u3068\u3081\u3066\u304a\u304d\u307e\u3059\u3002",date:"2024-01-11T00:00:00.000Z",formattedDate:"2024\u5e741\u670811\u65e5",tags:[{label:"Microsoft Graph",permalink:"/blog/tags/microsoft-graph"}],readingTime:3.065,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"graph-api-summary",title:"Microsoft Graph API \u95a2\u9023\u60c5\u5831\u306e\u307e\u3068\u3081",authors:"ks6088ts",tags:["Microsoft Graph"]},prevItem:{title:"Azure OpenAI Service \u306e\u30d9\u30fc\u30b7\u30c3\u30af\u306a\u6a5f\u80fd\u3068 Bing Search API \u3092\u5229\u7528\u3057\u305f RAG \u30a2\u30d7\u30ea\u306e\u4f5c\u6210",permalink:"/blog/handson-rag-app"},nextItem:{title:"AOAI \u306b\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304b\u3089\u63a5\u7d9a\u3057\u3001VM \u306e\u30de\u30cd\u30fc\u30b8\u30c9 ID \u3092\u5229\u7528\u3057\u3066 API Key \u7121\u3057\u3067 AOAI \u3092\u547c\u3073\u51fa\u3059",permalink:"/blog/aoai-private-endpoint-managed-id"}},l={authorsImageUrls:[void 0]},s=[{value:"\u6982\u8981\u3092\u628a\u63e1\u3059\u308b",id:"\u6982\u8981\u3092\u628a\u63e1\u3059\u308b",level:2},{value:"\u4f7f\u3063\u3066\u307f\u308b",id:"\u4f7f\u3063\u3066\u307f\u308b",level:2},{value:"\u30a2\u30d7\u30ea\u306e\u767b\u9332",id:"\u30a2\u30d7\u30ea\u306e\u767b\u9332",level:2},{value:"\u958b\u767a",id:"\u958b\u767a",level:2},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],c={toc:s},m="wrapper";function h(t){let{components:r,...e}=t;return(0,o.kt)(m,(0,a.Z)({},c,e,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Microsoft Graph API \u3092\u89e6\u308b\u5fc5\u8981\u304c\u51fa\u3066\u304d\u305f\u306e\u3067\u3001\u95a2\u9023\u60c5\u5831\u3092\u307e\u3068\u3081\u3066\u304a\u304d\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u6982\u8981\u3092\u628a\u63e1\u3059\u308b"},"\u6982\u8981\u3092\u628a\u63e1\u3059\u308b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/training/modules/msgraph-intro-overview/"},"MS Learn / Microsoft Graph \u3068\u306f")," \u3067 Microsoft Graph API \u306e\u6982\u8981\u304c\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002\nMicrosoft Graph API \u306e\u6982\u8981\u3084\u3001Microsoft Graph API \u3092\u4f7f\u3046\u305f\u3081\u306b\u5fc5\u8981\u306a\u30a2\u30d7\u30ea\u306e\u767b\u9332\u306e\u624b\u9806\u306a\u3069\u304c\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u3063\u3066\u307f\u308b"},"\u4f7f\u3063\u3066\u307f\u308b"),(0,o.kt)("p",null,"\u3042\u308b\u7a0b\u5ea6\u6982\u8981\u304c\u7406\u89e3\u51fa\u6765\u305f\u3089 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/graph/graph-explorer"},"Graph Explorer")," \u3067\u5b9f\u969b\u306b Microsoft Graph API \u3092\u8a66\u3057\u3066\u307f\u307e\u3059\u3002\nGraph Explorer \u306f\u3001\u30d6\u30e9\u30a6\u30b6\u304b\u3089 Graph API \u3092\u5b9f\u884c\u3057\u3066\u7c21\u5358\u306b\u8a66\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u30c4\u30fc\u30eb\u3067\u3059\u3002"),(0,o.kt)("h2",{id:"\u30a2\u30d7\u30ea\u306e\u767b\u9332"},"\u30a2\u30d7\u30ea\u306e\u767b\u9332"),(0,o.kt)("p",null,"\u958b\u767a\u8005\u5411\u3051\u306e\u60c5\u5831\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/graph/"},"Microsoft Graph \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8")," \u3084 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.microsoft.com/en-us/graph#get-started"},"Microsoft Developer/ Microsoft Graph")," \u306b\u307e\u3068\u307e\u3063\u3066\u3044\u307e\u3059\u3002Microsoft Graph API \u306e\u6982\u8981\u3001\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3001\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u3001\u30b5\u30f3\u30d7\u30eb\u306a\u3069\u3092\u8fbf\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/training/modules/msgraph-javascript-app/3-understand-permissions"},"Microsoft Graph \u306e\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u3068\u540c\u610f\u3092\u7406\u89e3\u3059\u308b")," \u3067\u306f\u3001Microsoft Graph API \u3092\u4f7f\u3046\u305f\u3081\u306b\u5fc5\u8981\u306a\u30a2\u30d7\u30ea\u306e\u767b\u9332\u306e\u624b\u9806\u304c\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30a2\u30d7\u30ea\u306e\u767b\u9332\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Azure Portal")," \u304b\u3089\u884c\u3044\u307e\u3059\u3002"),(0,o.kt)("p",null,"API \u30ea\u30af\u30a8\u30b9\u30c8\u306e\u5916\u90e8\u4ed5\u69d8\u3092\u7406\u89e3\u51fa\u6765\u305f\u3089\u3001\u5b9f\u969b\u306b Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/training/paths/m365-msgraph-toolkit/"},"Microsoft Graph \u30c4\u30fc\u30eb\u30ad\u30c3\u30c8\u3092\u4f7f\u3063\u3066\u30a2\u30d7\u30ea\u3092\u958b\u767a")," \u3067\u306f\u3001Microsoft Graph API \u3092\u4f7f\u3063\u3066 Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u304c\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u958b\u767a"},"\u958b\u767a"),(0,o.kt)("p",null,"Microsoft Graph API \u306b\u306f\u3001\u30b5\u30fc\u30d3\u30b9\u3054\u3068\u306b API \u547c\u3073\u51fa\u3057\u306e\u5236\u9650\u304c\u3042\u308a\u307e\u3059\u3002",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/graph/throttling-limits"},"Microsoft Graph \u30b5\u30fc\u30d3\u30b9\u56fa\u6709\u306e\u8abf\u6574\u5236\u9650")," \u306b\u306f\u3001\u5404\u30b5\u30fc\u30d3\u30b9\u306e\u5236\u9650\u304c\u307e\u3068\u3081\u3089\u308c\u3066\u3044\u307e\u3059\u3002Microsoft Graph API \u3092\u5229\u7528\u3059\u308b\u969b\u306f\u3001\u3053\u306e\u5236\u9650\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoftgraph/msgraph-metadata"},"github.com/microsoftgraph/msgraph-metadata")," \u306b\u306f\u3001Microsoft Graph API \u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u304c\u307e\u3068\u3081\u3089\u308c\u3066\u3044\u307e\u3059\u3002Microsoft Graph API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0"},"Microsoft Graph REST API v1.0 endpoint reference")," \u306b\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u30bf\u30a4\u30c8\u30eb"),(0,o.kt)("th",{parentName:"tr",align:null},"\u3072\u3068\u3053\u3068"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://qiita.com/yamad365/items/e480f77e9102b132d258"},"Microsoft Teams \u306e\u30c1\u30fc\u30e0 ID\u3001\u30c1\u30e3\u30cd\u30eb ID \u306e\u78ba\u8a8d\u65b9\u6cd5")),(0,o.kt)("td",{parentName:"tr",align:null},"Graph API \u3067\u60c5\u5831\u304c\u5fc5\u8981\u306b\u306a\u308b\u304c\u3001\u3069\u3046\u3084\u3063\u3066\u53d6\u5f97\u3059\u308b\u306e\u304b\u308f\u304b\u3089\u306a\u3044\u3068\u304d\u306b\u53c2\u8003\u306b\u306a\u3063\u305f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://qiita.com/massie_g/items/fe7540161aa4a5f86bf5"},"\u8a33\u3042\u3063\u3066 Microsoft Graph API \u8abf\u3079\u3066\u307f\u305f")),(0,o.kt)("td",{parentName:"tr",align:null},"Microsoft Graph API \u306e\u6982\u8981\u3068\u3001\u30a2\u30d7\u30ea\u306e\u767b\u9332\u306e\u4e00\u9023\u306e\u6d41\u308c\u304c\u660e\u5feb\u306b\u8aac\u660e\u3055\u308c\u3066\u3044\u3066\u30ad\u30e3\u30c3\u30c1\u30a2\u30c3\u30d7\u306b\u4f7f\u3048\u308b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.youtube.com/playlist?list=PL3JVwFmb_BnT9Ti0MMRj5nPF7XoN-4MQx"},"Microsoft Graph API Tutorial Series")),(0,o.kt)("td",{parentName:"tr",align:null},"Microsoft Graph API \u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u52d5\u753b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/ja-jp/graph/tutorials?view=graph-rest-1.0"},"Microsoft Graph \u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb")),(0,o.kt)("td",{parentName:"tr",align:null},"Microsoft Graph API \u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoftgraph"},"github.com/microsoftgraph")),(0,o.kt)("td",{parentName:"tr",align:null},"Microsoft Graph \u95a2\u9023\u306e GitHub \u30ea\u30dd\u30b8\u30c8\u30ea")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://amzn.to/48J2DNo"},"\u3072\u3068\u76ee\u3067\u308f\u304b\u308b Microsoft Entra ID")),(0,o.kt)("td",{parentName:"tr",align:null},"\u7b2c 12 \u7ae0 Microsoft Entra ID \u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7d71\u5408\u304c\u53c2\u8003\u306b\u306a\u308b")))))}h.isMDXComponent=!0}}]);
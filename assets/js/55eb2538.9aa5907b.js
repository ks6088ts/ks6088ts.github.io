"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[2689],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>k});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),u=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},s=function(e){var a=u(e.components);return t.createElement(o.Provider,{value:a},e.children)},c="mdxType",A={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||A[m]||i;return n?t.createElement(k,p(p({ref:a},s),{},{components:n})):t.createElement(k,p({ref:a},s))}));function k(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var u=2;u<i;u++)p[u]=n[u];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2156:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>A,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=n(7462),r=(n(7294),n(3905));const i={slug:"aoai-apim-easyauth",title:"Azure OpenAI Service \u3092\u5229\u7528\u3057\u305f ChatGPT \u304a\u8a66\u3057\u74b0\u5883\u306b\u30ed\u30b0\u51fa\u529b\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b",authors:"ks6088ts",tags:["azure","azure-ad","app-service","api-management","azure-openai-service"]},p=void 0,l={permalink:"/blog/aoai-apim-easyauth",source:"@site/blog/2023-06-14-aoai-apim-easyauth/index.md",title:"Azure OpenAI Service \u3092\u5229\u7528\u3057\u305f ChatGPT \u304a\u8a66\u3057\u74b0\u5883\u306b\u30ed\u30b0\u51fa\u529b\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b",description:"Azure OpenAI Service \u3092\u5229\u7528\u3057\u305f ChatGPT \u304a\u8a66\u3057\u74b0\u5883\u306e\u69cb\u7bc9 \u3067\u306f\u3001ChatGPT \u3092\u4f53\u9a13\u3059\u308b\u74b0\u5883\u3092\u7c21\u5358\u306b\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002",date:"2023-06-14T00:00:00.000Z",formattedDate:"2023\u5e746\u670814\u65e5",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"azure-ad",permalink:"/blog/tags/azure-ad"},{label:"app-service",permalink:"/blog/tags/app-service"},{label:"api-management",permalink:"/blog/tags/api-management"},{label:"azure-openai-service",permalink:"/blog/tags/azure-openai-service"}],readingTime:14.79,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"aoai-apim-easyauth",title:"Azure OpenAI Service \u3092\u5229\u7528\u3057\u305f ChatGPT \u304a\u8a66\u3057\u74b0\u5883\u306b\u30ed\u30b0\u51fa\u529b\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b",authors:"ks6088ts",tags:["azure","azure-ad","app-service","api-management","azure-openai-service"]},nextItem:{title:"Azure OpenAI Service \u3092\u5229\u7528\u3057\u305f ChatGPT \u304a\u8a66\u3057\u74b0\u5883\u306e\u69cb\u7bc9",permalink:"/blog/fork-azure-openai-playground"}},o={authorsImageUrls:[void 0]},u=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30cf\u30f3\u30ba\u30aa\u30f3",id:"\u30cf\u30f3\u30ba\u30aa\u30f3",level:2},{value:"Azure OpenAI Service \u3092\u4f5c\u6210\u3059\u308b",id:"azure-openai-service-\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"API Management \u3092\u4f5c\u6210\u3059\u308b",id:"api-management-\u3092\u4f5c\u6210\u3059\u308b",level:3},{value:"API Management \u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9 API \u3092\u767b\u9332\u3059\u308b",id:"api-management-\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9-api-\u3092\u767b\u9332\u3059\u308b",level:3},{value:"App Service \u306b\u30a2\u30d7\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b",id:"app-service-\u306b\u30a2\u30d7\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b",level:3},{value:"\u8a8d\u8a3c\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"\u8a8d\u8a3c\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"App Service \u306e\u7d44\u307f\u8fbc\u307f\u8a8d\u8a3c(EasyAuth) \u3092\u6709\u52b9\u306b\u3059\u308b",id:"app-service-\u306e\u7d44\u307f\u8fbc\u307f\u8a8d\u8a3ceasyauth-\u3092\u6709\u52b9\u306b\u3059\u308b",level:4},{value:"API Management \u306e API \u306b\u8a8d\u8a3c\u60c5\u5831\u306e\u691c\u8a3c\u3092\u8ffd\u52a0\u3059\u308b",id:"api-management-\u306e-api-\u306b\u8a8d\u8a3c\u60c5\u5831\u306e\u691c\u8a3c\u3092\u8ffd\u52a0\u3059\u308b",level:4},{value:"\u30ed\u30b0\u51fa\u529b\u3092\u6709\u52b9\u5316\u3059\u308b",id:"\u30ed\u30b0\u51fa\u529b\u3092\u6709\u52b9\u5316\u3059\u308b",level:3},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",level:3},{value:"Tips",id:"tips",level:2},{value:"\u30c7\u30d0\u30c3\u30b0\u65b9\u6cd5",id:"\u30c7\u30d0\u30c3\u30b0\u65b9\u6cd5",level:3},{value:"\u30ed\u30b0\u51fa\u529b\u3092\u6709\u52b9\u5316\u306f\u958b\u767a\u89b3\u70b9\u3067\u3082\u6709\u52b9",id:"\u30ed\u30b0\u51fa\u529b\u3092\u6709\u52b9\u5316\u306f\u958b\u767a\u89b3\u70b9\u3067\u3082\u6709\u52b9",level:4},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u3092\u5207\u308a\u5206\u3051\u3066\u52d5\u304b\u3059",id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u3092\u5207\u308a\u5206\u3051\u3066\u52d5\u304b\u3059",level:4}],s={toc:u},c="wrapper";function A(e){let{components:a,...i}=e;return(0,r.kt)(c,(0,t.Z)({},s,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/blog/fork-azure-openai-playground"},"Azure OpenAI Service \u3092\u5229\u7528\u3057\u305f ChatGPT \u304a\u8a66\u3057\u74b0\u5883\u306e\u69cb\u7bc9")," \u3067\u306f\u3001ChatGPT \u3092\u4f53\u9a13\u3059\u308b\u74b0\u5883\u3092\u7c21\u5358\u306b\u69cb\u7bc9\u3059\u308b\u65b9\u6cd5\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u65e2\u306b\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u305f\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3068\u3057\u3066\u3001\u300c\u5b9f\u969b\u306e\u5229\u7528\u30ed\u30b0\u306a\u3069\u3092\u78ba\u8a8d\u3057\u305f\u3044\u300d\u3068\u3044\u3046\u3054\u8981\u671b\u3092\u3044\u305f\u3060\u304d\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f Azure \u30de\u30cd\u30fc\u30b8\u30c9\u30b5\u30fc\u30d3\u30b9\u3092\u5229\u7528\u3057\u3066\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u305b\u305a\u306b\u5229\u7528\u30ed\u30b0\u3092\u53ce\u96c6\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,r.kt)("p",null,"Azure \u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u5019\u88dc\u306b\u6319\u304c\u308b\u306e\u306f Azure API Management (\u4ee5\u4e0b\u3001APIM)\u306e\u5229\u7528\u3067\u3059\u3002"),(0,r.kt)("p",null,"APIM \u306f\u3001Azure \u304c\u63d0\u4f9b\u3059\u308b\u30de\u30cd\u30fc\u30b8\u30c9\u306a API \u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u306e\u30b5\u30fc\u30d3\u30b9\u3067\u3001\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u3042\u308b\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3059\u308b API \u3092\u4e00\u62ec\u3067\u7ba1\u7406\u3057\u3066\u69d8\u3005\u306a\u51e6\u7406 (\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3001\u30ec\u30fc\u30c8\u5236\u9650\u3001\u30c7\u30fc\u30bf\u5909\u63db\u3001\u76e3\u8996\u3001\u306a\u3069) \u3092\u4ef2\u4ecb\u3059\u308b\u3082\u306e\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306e\u30b9\u30b3\u30fc\u30d7\u3067\u3042\u308b\u5229\u7528\u30ed\u30b0\u306e\u53ce\u96c6\u306f\u3001App Service \u306b\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u30a2\u30d7\u30ea\u304b\u3089\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092 APIM \u3092\u7d4c\u7531\u3055\u305b\u3066\u30ed\u30ae\u30f3\u30b0\u3059\u308b\u3088\u3046\u306a\u69cb\u6210\u3067\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture",src:n(8032).Z,width:"1341",height:"1012"})),(0,r.kt)("p",null,"\u672c\u8a18\u4e8b\u306e\u30b9\u30b3\u30fc\u30d7\u5916\u3067\u306f\u3042\u308a\u307e\u3059\u304c\u3001APIM \u81ea\u4f53\u306f\u975e\u5e38\u306b\u591a\u6a5f\u80fd\u306a\u30b5\u30fc\u30d3\u30b9\u306a\u306e\u3067\u3001API \u306e\u547c\u3073\u51fa\u3057\u56de\u6570\u3092\u5236\u9650\u3059\u308b\u30ec\u30fc\u30c8\u5236\u9650\u306e\u8a2d\u5b9a\u306a\u3069\u3082 AOAI \u306e\u5229\u7528\u306b\u304a\u3044\u3066\u306f\u5229\u7528\u304c\u898b\u8fbc\u307e\u308c\u308b\u6a5f\u80fd\u304b\u3068\u601d\u3044\u307e\u3059\u3002\u5177\u4f53\u7684\u306a AOAI \u306e\u5236\u9650\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/quotas-limits"},"Azure OpenAI Service \u306e\u30af\u30a9\u30fc\u30bf\u3068\u5236\u9650"),"\u306b\u8a18\u8f09\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305f\u3001\u7279\u306b\u5927\u898f\u6a21\u306a\u30b7\u30b9\u30c6\u30e0\u958b\u767a\u306e\u6587\u8108\u3067\u3059\u3068\u3001APIM \u3092\u5883\u754c\u3068\u3057\u3066\u3001\u30b5\u30fc\u30d0\u30fb\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u958b\u767a\u8005\u304c\u5206\u696d\u3067\u304d\u308b\u958b\u767a\u4f53\u5236\u9762\u3067\u306e\u30e1\u30ea\u30c3\u30c8\u3082\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"(\u8981\u671b\u304c\u6709\u308a\u6b21\u7b2c\u307e\u305f\u767a\u4fe1\u3057\u3088\u3046\u3068\u601d\u3044\u307e\u3059\u3002)"),(0,r.kt)("h2",{id:"\u30cf\u30f3\u30ba\u30aa\u30f3"},"\u30cf\u30f3\u30ba\u30aa\u30f3"),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Azure OpenAI Service \u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("li",{parentName:"ol"},"API Management \u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("li",{parentName:"ol"},"API Management \u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9 API \u3092\u767b\u9332\u3059\u308b"),(0,r.kt)("li",{parentName:"ol"},"App Service \u306b\u30a2\u30d7\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b"),(0,r.kt)("li",{parentName:"ol"},"\u8a8d\u8a3c\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("li",{parentName:"ol"},"\u30ed\u30b0\u51fa\u529b\u3092\u6709\u52b9\u5316\u3059\u308b"),(0,r.kt)("li",{parentName:"ol"},"\u52d5\u4f5c\u78ba\u8a8d")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"azure-openai-service-\u3092\u4f5c\u6210\u3059\u308b"},"Azure OpenAI Service \u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal"},"Azure OpenAI \u3092\u4f7f\u7528\u3057\u3066\u30ea\u30bd\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u3001\u30e2\u30c7\u30eb\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b")," \u3092\u53c2\u8003\u306b Azure Portal \u304b\u3089 AOAI \u306e\u30ea\u30bd\u30fc\u30b9\u3068\u30e2\u30c7\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"api-management-\u3092\u4f5c\u6210\u3059\u308b"},"API Management \u3092\u4f5c\u6210\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/api-management/get-started-create-service-instance"},"Azure portal \u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044 Azure API Management \u30b5\u30fc\u30d3\u30b9 \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3059\u308b")," \u3092\u53c2\u8003\u306b APIM \u306e\u30b5\u30fc\u30d3\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"api-management-\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9-api-\u3092\u767b\u9332\u3059\u308b"},"API Management \u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9 API \u3092\u767b\u9332\u3059\u308b"),(0,r.kt)("p",null,"APIM \u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9 API \u3068\u3057\u3066 AOAI \u3092\u767b\u9332\u3057\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","AOAI \u306f ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/cognitive-services/openai/reference"},"Azure OpenAI Service \u306e REST API \u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),"\u306b REST API \u306e OpenAPI \u4ed5\u69d8\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"OpenAPI \u4ed5\u69d8\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30d0\u30c3\u30af\u30a8\u30f3\u30c9 API \u3067\u3042\u308c\u3070\u3001",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/api-management/import-and-publish"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb:\u6700\u521d\u306e API \u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3068\u767a\u884c"),"\u306e\u624b\u9806\u306b\u6cbf\u3063\u3066\u3001APIM \u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u8a73\u7d30\u306a\u624b\u9806\u306f\u3001",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/openai-python-enterprise-logging/blob/main/README.ja.md#api-management"},"\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u5411\u3051Azure OpenAI\u30a2\u30d7\u30ea\u57fa\u76e4 / \u6a5f\u80fd / API Management")," \u306b\u8a18\u8f09\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u203b \u57f7\u7b46\u6642\u70b9(2023/06)\u3067\u306f\u3001\u76f4\u63a5 APIM \u306b AOAI \u306e OpenAPI \u4ed5\u69d8\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001AOAI \u306e OpenAPI \u4ed5\u69d8\u306b\u306f import \u3067\u304d\u306a\u3044\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u305f\u3081\u3001HTTP API \u3092\u4e00\u65e6\u4f5c\u6210\u3057\u305f\u5f8c\u306b OpenAPI \u4ed5\u69d8\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"AOAI \u306e REST API \u306e\u4ed5\u69d8\u306f GitHub \u306e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference/stable"},"specification/cognitiveservices/data-plane/AzureOpenAI/inference/stable")," \u306e\u3042\u305f\u308a\u306b\u516c\u958b\u3055\u308c\u3066\u304a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"AOAI \u306b\u9650\u3089\u305a\u3067\u3059\u304c\u3001",(0,r.kt)("a",{parentName:"p",href:"https://petstore.swagger.io/"},"Swagger Petstore")," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001\u898b\u305f\u3044 OpenAPI spec \u306e json \u3092 URL \u306b\u6307\u5b9a\u3059\u308b\u3068\u30a6\u30a7\u30d6\u30d6\u30e9\u30a6\u30b6\u304b\u3089\u898b\u3084\u3059\u3044\u5f62\u3067 API \u4ed5\u69d8\u304c\u78ba\u8a8d\u3067\u304d\u308b\u306e\u3067\u4fbf\u5229\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30a4\u30f3\u30dd\u30fc\u30c8\u3067\u304d\u305f\u3089 APIM \u306e Policy \u8a2d\u5b9a\u3092\u8ffd\u52a0\u3059\u308b\u4f5c\u696d\u306b\u5165\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u3053\u3053\u3067\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089 APIM \u3078 HTTP \u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b\u3068 AOAI \u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u3088\u3046\u306b\u4ee5\u4e0b\u306e\u4e8c\u70b9\u306e\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Backend API \u306e URL \u8a2d\u5b9a"),(0,r.kt)("li",{parentName:"ol"},"AOAI \u306e API Key \u3092\u30d8\u30c3\u30c0\u30fc\u306b\u8ffd\u52a0\u3059\u308b\u8a2d\u5b9a")),(0,r.kt)("p",null,"\u306a\u304a\u3001Portal \u304b\u3089 APIM \u306e\u8a2d\u5b9a\u5909\u66f4\u3092\u3057\u3066\u3044\u308b\u64cd\u4f5c\u306f\u3001Policy \u306e XML \u30d5\u30a1\u30a4\u30eb\u3092\u66f8\u304d\u63db\u3048\u3066\u3044\u308b\u3053\u3068\u3068\u307b\u307c\u540c\u7fa9\u3067\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Azure Portal \u304b\u3089 GUI \u30d9\u30fc\u30b9\u3067\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u306f\u59cb\u3081\u306f\u5224\u308a\u3084\u3059\u3044\u306e\u3067\u3059\u304c\u3001\u8a2d\u5b9a\u9805\u76ee\u304c\u5897\u3048\u308b\u3068\u9762\u5012\u3067\u3059\u3002\u3042\u308b\u7a0b\u5ea6\u6163\u308c\u305f\u308a\u3001\u6c7a\u307e\u3063\u305f\u8a2d\u5b9a\u304c\u3042\u308b\u306e\u3067\u3042\u308c\u3070 XML \u3092\u30b3\u30d4\u30da\u3057\u3066\u76f4\u63a5\u66f8\u304d\u63db\u3048\u308b\u307b\u3046\u304c\u64cd\u4f5c\u304c\u697d\u306b\u306a\u308a\u307e\u3059\u3002  "),(0,r.kt)("p",null,"\u6700\u7d42\u7684\u306b Policy \u306e\u8a2d\u5b9a\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\u9069\u5b9c backend url \u3084 API key \u3092\u66f8\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<policies>\n    <inbound>\n        <base />\n        \x3c!-- 1. Backend API \u306e URL \u8a2d\u5b9a, https://{Azure OpenAI Service \u306e Endpoint}/openai --\x3e\n        <set-backend-service base-url="https://your-aoai.openai.azure.com/openai" />\n        \x3c!-- 2. AOAI \u306e API Key \u3092\u30d8\u30c3\u30c0\u30fc\u306b\u8ffd\u52a0\u3059\u308b\u8a2d\u5b9a --\x3e\n        <set-header name="api-key" exists-action="override">\n            <value>your-aoai-key</value>\n        </set-header>\n    </inbound>\n    <backend>\n        <base />\n    </backend>\n    <outbound>\n        <base />\n    </outbound>\n    <on-error>\n        <base />\n    </on-error>\n</policies>\n')),(0,r.kt)("p",null,"\u307e\u305f\u3001\u3053\u3053\u3067\u306f\u7c21\u7d20\u5316\u306e\u305f\u3081 Subscription \u30ad\u30fc\u306e\u8981\u6c42\u306f\u7121\u52b9\u5316\u3057\u307e\u3059\u3002API \u306e\u8a2d\u5b9a\u304b\u3089 ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription required")," \u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u5916\u3057\u3066\u7121\u52b9\u5316\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u307e\u3067\u8a2d\u5b9a\u3057\u305f\u3089\u3001Azure Portal \u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"APIM > APIs > {AOAI} > Test")," \u30bf\u30d6\u304b\u3089\u9069\u5f53\u306a API \u3092\u9078\u3093\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"deployment-id"),"Azure Portal \u306e Test \u304b\u3089\u3001APIM \u7d4c\u7531\u3067 AOAI \u306e API \u3092\u547c\u3073\u51fa\u3059\u52d5\u4f5c\u78ba\u8a8d\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"APIM \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u767a\u884c\u3059\u308b\u3068 AOAI API \u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u53d6\u5f97\u3067\u304d\u308b"),(0,r.kt)("li",{parentName:"ul"},"(APIM \u304c\u5185\u90e8\u7684\u306b\u30d8\u30c3\u30c0\u3092\u8a2d\u5b9a\u3059\u308b\u306e\u3067)\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f AOAI \u306e API Key \u3092\u30d8\u30c3\u30c0\u306b\u542b\u3081\u306a\u304f\u3066\u3088\u3044")),(0,r.kt)("p",null,"\u3068\u3044\u3046\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"app-service-\u306b\u30a2\u30d7\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b"},"App Service \u306b\u30a2\u30d7\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b"),(0,r.kt)("p",null,"\u304a\u3082\u3080\u308d\u306b App Service \u306b\u30a2\u30d7\u30ea\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002\nApp Service \u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u969b\u3001\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\u306e\u30e9\u30f3\u30bf\u30a4\u30e0\u3084\u74b0\u5883\u4f9d\u5b58\u3067\u56f0\u308a\u305f\u304f\u306a\u3044\u306e\u3067\u3001\u79c1\u306f\u57fa\u672c\u7684\u306b\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3092 Docker Hub \u306b\u7f6e\u3044\u3066\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'RESOURCE_GROUP_NAME=rg-easyauth-apim\nAPP_SERVICE_PLAN_NAME=plan-easyauth-apim\nAPP_SERVICE_NAME=app-easyauth-apim\nCONTAINER_IMAGE_NAME=ks6088ts/azure-openai-playground\n\n# \u30ea\u30bd\u30fc\u30b9\u30b0\u30eb\u30fc\u30d7\u3092\u4f5c\u6210\u3059\u308b\naz group create \\\n    --name $RESOURCE_GROUP_NAME \\\n    --location japaneast\n\n# App Service Plan \u3092\u4f5c\u6210\u3059\u308b\naz appservice plan create \\\n    --name $APP_SERVICE_PLAN_NAME \\\n    --resource-group $RESOURCE_GROUP_NAME \\\n    --location japaneast \\\n    --sku B1 \\\n    --is-linux\n\n# App Service \u3092\u4f5c\u6210\u3059\u308b\naz webapp create \\\n    --name $APP_SERVICE_NAME \\\n    --plan $APP_SERVICE_PLAN_NAME \\\n    --resource-group $RESOURCE_GROUP_NAME \\\n    --deployment-container-image-name $CONTAINER_IMAGE_NAME\n\n# App Service \u306e\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\u3059\u308b\nAZURE_OPENAI_API_URL="https://your-apim.azure-api.net/deployments/your-deployment-id/chat/completions?api-version=2023-05-15"\n\naz webapp config appsettings set \\\n    --name $APP_SERVICE_NAME \\\n    --resource-group $RESOURCE_GROUP_NAME \\\n    --settings \\\n        WEBSITES_PORT=3000 \\\n        AZURE_OPENAI_API_URL=$AZURE_OPENAI_API_URL\n\n# \u8a2d\u5b9a\u3092\u53cd\u6620\u3055\u305b\u308b\u305f\u3081\u306b App Service \u3092\u518d\u8d77\u52d5\u3059\u308b\naz webapp restart \\\n    --name $APP_SERVICE_NAME \\\n    --resource-group $RESOURCE_GROUP_NAME\n')),(0,r.kt)("p",null,"\u3053\u3053\u307e\u3067\u3067\u3001App Service \u306b\u30a2\u30d7\u30ea\u304c\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u307e\u3059\u3002\nApp Service \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u30c1\u30e3\u30c3\u30c8\u753b\u9762\u304b\u3089\u52d5\u4f5c\u78ba\u8a8d\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u306e\u6642\u70b9\u3067\u306f\u8a8d\u8a3c\u306f\u304b\u304b\u3063\u3066\u304a\u3089\u305a\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u304b\u3089\u8ab0\u3067\u3082\u30a2\u30af\u30bb\u30b9\u3067\u304d\u3066\u3057\u307e\u3046\u70b9\u306b\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"APIM \u3068\u8a8d\u8a3c\u60c5\u5831\u3092\u3084\u308a\u53d6\u308a\u3059\u308b\u305f\u3081\u3001\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089\u306f JWT \u3092 HTTP \u306e\u30ea\u30af\u30a8\u30b9\u30c8\u30d8\u30c3\u30c0\u306b\u6dfb\u3048\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u5177\u4f53\u7684\u306b\u306f\u3001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/.auth/me")," \u306e json \u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u4e2d\u306e ",(0,r.kt)("inlineCode",{parentName:"li"},"access_token")," (=JWT) \u3092\u53d6\u5f97"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer {access_token}")," \u3092\u30d8\u30c3\u30c0\u306b\u4ed8\u4e0e\u3057\u3066 APIM \u306b HTTP \u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b")),(0,r.kt)("p",null,"\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u8a8d\u8a3c\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"},"\u8a8d\u8a3c\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("p",null,"App Service \u3068 API Management \u306e\u8a8d\u8a3c\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"app-service-\u306e\u7d44\u307f\u8fbc\u307f\u8a8d\u8a3ceasyauth-\u3092\u6709\u52b9\u306b\u3059\u308b"},"App Service \u306e\u7d44\u307f\u8fbc\u307f\u8a8d\u8a3c(EasyAuth) \u3092\u6709\u52b9\u306b\u3059\u308b"),(0,r.kt)("p",null,"\u7d44\u307f\u8fbc\u307f\u8a8d\u8a3c\u304c\u4f55\u305f\u308b\u304b\u306f ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/app-service/overview-authentication-authorization"},"Azure App Service \u304a\u3088\u3073 Azure Functions \u3067\u306e\u8a8d\u8a3c\u3068\u627f\u8a8d")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u8005\u89b3\u70b9\u3067\u3059\u3068\u3001\u8a8d\u8a3c\u51e6\u7406\u306e\u4e00\u5207\u3092 App Service \u306b\u4efb\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u4ed5\u7d44\u307f\u3067\u3001\u30ea\u30af\u30a8\u30b9\u30c8\u304c Web \u30a2\u30d7\u30ea\u306b\u5230\u9054\u3059\u308b\u524d\u6bb5\u3067\u8a8d\u8a3c\u51e6\u7406\u3092\u884c\u3063\u3066\u304f\u308c\u308b\u3082\u306e\u3068\u6349\u3048\u3066\u304a\u3051\u3070\u3088\u3044\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u5b9f\u969b\u306e\u8a2d\u5b9a\u65b9\u6cd5\u306f",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/app-service/scenario-secure-app-authentication-app-service"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb: Azure App Service \u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b Web \u30a2\u30d7\u30ea\u306b\u30a2\u30d7\u30ea\u306e\u8a8d\u8a3c\u3092\u8ffd\u52a0\u3059\u308b"),"\u304c\u8a73\u3057\u3044\u3067\u3059\u3002Azure Portal \u4e0a\u306e\u64cd\u4f5c\u3067\u8a8d\u8a3c\u8a2d\u5b9a\u3092\u5165\u308c\u308b\u306e\u306b\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Azure Active Directory")," \u3067\u306f\u306a\u304f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"App Service")," \u306e\u30ea\u30bd\u30fc\u30b9\u304b\u3089\u8fbf\u3063\u3066\u3044\u304f\u64cd\u4f5c\u306b\u306a\u308b\u65e8\u3001\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u8a8d\u8a3c\u8a2d\u5b9a\u304c\u8ffd\u52a0\u3055\u308c\u308b\u3068\u3001\u8a8d\u8a3c\u524d\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f Azure AD \u8a8d\u8a3c\u753b\u9762\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u8a8d\u8a3c\u304c\u5b8c\u4e86\u3059\u308b\u3068\u30a2\u30d7\u30ea\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002\u8a8d\u8a3c\u304c\u5b8c\u4e86\u3057\u305f\u30d6\u30e9\u30a6\u30b6\u304b\u3089\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"https://{appservice \u306e url}/.auth/me")," \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," \u3068\u3057\u3066 JWT \u304c\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","ref. ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/app-service/configure-authentication-user-identities#access-user-claims-using-the-api"},"Azure App Service \u8a8d\u8a3c\u3067\u30e6\u30fc\u30b6\u30fc ID \u3092\u64cd\u4f5c\u3059\u308b / API \u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc \u30af\u30ec\u30fc\u30e0\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b")),(0,r.kt)("h4",{id:"api-management-\u306e-api-\u306b\u8a8d\u8a3c\u60c5\u5831\u306e\u691c\u8a3c\u3092\u8ffd\u52a0\u3059\u308b"},"API Management \u306e API \u306b\u8a8d\u8a3c\u60c5\u5831\u306e\u691c\u8a3c\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("p",null,"App Service \u3067\u8a8d\u8a3c\u304c\u5b8c\u4e86\u3057\u305f\u5f8c\u3001API Management \u3067\u8a8d\u8a3c\u60c5\u5831\u306e\u691c\u8a3c\u3092\u884c\u3044\u307e\u3059\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/api-management/validate-azure-ad-token-policy"},"Azure Active Directory \u306e\u30c8\u30fc\u30af\u30f3\u306e\u691c\u8a3c"),"\u306b\u3042\u308a\u307e\u3059\u3088\u3046\u306b\u3001API Management \u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"validate-azure-ad-token")," \u3068\u3044\u3046\u30dd\u30ea\u30b7\u30fc\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"Inbound Processing \u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"validate-azure-ad-token")," \u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"tenant-id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"application-id")," \u306f EasyAuth \u3067\u8a2d\u5b9a\u3057\u305f\u3082\u306e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<inbound>\n    <validate-azure-ad-token tenant-id="your-tenant-id">\n        <client-application-ids>\n            <application-id>your-application-id</application-id>\n        </client-application-ids>\n    </validate-azure-ad-token>\n</inbound>\n')),(0,r.kt)("p",null,"\u6700\u7d42\u7684\u306b\u3067\u304d\u3042\u304c\u3063\u305f API Management \u306e\u30dd\u30ea\u30b7\u30fc\u306e\u5168\u4f53\u50cf\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<policies>\n    <inbound>\n        <base />\n        <set-backend-service base-url="https://your-aoai.openai.azure.com/openai" />\n        <set-header name="api-key" exists-action="override">\n            <value>your-aoai-key</value>\n        </set-header>\n        <validate-azure-ad-token tenant-id="your-tenant-id">\n            <client-application-ids>\n                <application-id>your-application-id</application-id>\n            </client-application-ids>\n        </validate-azure-ad-token>\n    </inbound>\n    <backend>\n        <base />\n    </backend>\n    <outbound>\n        <base />\n    </outbound>\n    <on-error>\n        <base />\n    </on-error>\n</policies>\n')),(0,r.kt)("h3",{id:"\u30ed\u30b0\u51fa\u529b\u3092\u6709\u52b9\u5316\u3059\u308b"},"\u30ed\u30b0\u51fa\u529b\u3092\u6709\u52b9\u5316\u3059\u308b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/azure-monitor/logs/quick-create-workspace?tabs=azure-portal"},"Log Analytics \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u4f5c\u6210\u3059\u308b"),"\u3092\u53c2\u8003\u306b Azure Portal \u304b\u3089 Log Analytics Workspace \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"APIM > Diagnostic settings")," \u306b\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Add diagnostic setting")," \u3092\u9078\u629e\u3057\u4ee5\u4e0b\u306e\u8a2d\u5b9a\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Logs > audit/allLogs \u3092\u6709\u52b9\u5316")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Log Analytics Workspace \u3092\u6709\u52b9\u5316")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Archive to a storage account")," \u3092\u9078\u629e")),(0,r.kt)("h3",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u64cd\u4f5c\u3092\u884c\u3044\u3001\u610f\u56f3\u3057\u305f\u52d5\u4f5c\u306b\u306a\u3063\u3066\u3044\u308b\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App Service \u306e URL \u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8a8d\u8a3c\u753b\u9762\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u308c\u308b\u3053\u3068\u3092\u78ba\u8a8d"))),(0,r.kt)("li",{parentName:"ul"},"APIM \u306e Log \u3092\u78ba\u8a8d(\u4efb\u610f)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JWT \u306e\u30d8\u30c3\u30c0\u304c\u6e21\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d"))),(0,r.kt)("li",{parentName:"ul"},"JWT \u306e\u30d8\u30c3\u30c0\u306a\u3057\u3067 APIM \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u3066 API \u304c\u547c\u3073\u51fa\u305b\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"401 Unauthorized")," \u304c\u8fd4\u3063\u3066\u304f\u308b\u3053\u3068\u3092\u78ba\u8a8d"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"APIM > Logs")," \u3092\u958b\u304d\u3001\u30af\u30a8\u30ea\u3068\u3057\u3066 ",(0,r.kt)("inlineCode",{parentName:"li"},"ApiManagementGatewayLogs")," \u3092\u5b9f\u884c\u3057\u3001\u30ed\u30b0\u304c\u51fa\u529b\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d")),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("h3",{id:"\u30c7\u30d0\u30c3\u30b0\u65b9\u6cd5"},"\u30c7\u30d0\u30c3\u30b0\u65b9\u6cd5"),(0,r.kt)("p",null,"\u958b\u767a\u904e\u7a0b\u3067\u79c1\u304c\u8e0f\u3093\u3060\u30c8\u30e9\u30d6\u30eb\u3084\u305d\u306e\u30c7\u30d0\u30c3\u30b0\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,r.kt)("h4",{id:"\u30ed\u30b0\u51fa\u529b\u3092\u6709\u52b9\u5316\u306f\u958b\u767a\u89b3\u70b9\u3067\u3082\u6709\u52b9"},"\u30ed\u30b0\u51fa\u529b\u3092\u6709\u52b9\u5316\u306f\u958b\u767a\u89b3\u70b9\u3067\u3082\u6709\u52b9"),(0,r.kt)("p",null,"APIM \u9023\u643a\u3092\u3057\u305f\u969b\u3001\u30dd\u30ea\u30b7\u30fc\u8a2d\u5b9a\u304c\u9069\u5207\u306b\u52d5\u4f5c\u3057\u3066\u3044\u308b\u304b\u306e\u78ba\u8a8d\u3084\u3001\u4f55\u304b\u5931\u6557\u3057\u305f\u3068\u304d\u306e\u539f\u56e0\u3092\u8abf\u67fb\u3059\u308b\u89b3\u70b9\u3067\u3082\u30ed\u30ae\u30f3\u30b0\u306f\u6709\u52b9\u3067\u3057\u305f\u3002\u30de\u30cd\u30fc\u30b8\u30c9\u30b5\u30fc\u30d3\u30b9\u3068\u3044\u3046\u3053\u3068\u3067\u51e6\u7406\u306e\u8a73\u7d30\u304c\u96a0\u853d\u3055\u308c\u3066\u3057\u307e\u3046\u3068\u3001\u3048\u3066\u3057\u3066\u958b\u767a\u304c\u56f0\u96e3\u306b\u306a\u308a\u304c\u3061\u306a\u306e\u3067\u3059\u304c\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"LastErrorReason")," \u3084 ",(0,r.kt)("inlineCode",{parentName:"p"},"LastErrorMessage")," \u306a\u3069\u306e\u60c5\u5831\u306f\u3001\u4f55\u304c\u539f\u56e0\u3067\u5931\u6557\u3057\u305f\u304b\u3092\u8abf\u67fb\u3059\u308b\u969b\u306b\u975e\u5e38\u306b\u5f79\u7acb\u3061\u307e\u3057\u305f\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u305f\u3068\u3048\u3070\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"validate-azure-ad-token")," \u3067\u5931\u6557\u3057\u305f\u5834\u5408\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"LastErrorReason")," \u306b ",(0,r.kt)("inlineCode",{parentName:"p"},"Invalid JWT token. Token is expired.")," \u3068\u3044\u3046\u3088\u3046\u306b\u3001\u5931\u6557\u3057\u305f\u7406\u7531\u304c\u308f\u304b\u3063\u305f\u308a\u3001\n",(0,r.kt)("inlineCode",{parentName:"p"},"LastErrorReason: SubscriptionKeyNotFound"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LastErrorMessage: Access denied due to missing subscription key. Make sure to include subscription key when making requests to an API.")," \u304c\u51fa\u3066\u3044\u308b\u6642\u306f Subscription key \u304c\u629c\u3051\u3066\u3044\u305f\u306e\u3060\u306a\u3001\u306a\u3069\u3002"),(0,r.kt)("h4",{id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u3092\u5207\u308a\u5206\u3051\u3066\u52d5\u304b\u3059"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u3092\u5207\u308a\u5206\u3051\u3066\u52d5\u304b\u3059"),(0,r.kt)("p",null,"\u30a2\u30d7\u30ea\u3068 APIM \u306e\u9023\u643a\u306b\u95a2\u3057\u3066\u306f\u3001\u4f55\u304b\u4e0d\u5177\u5408\u304c\u8d77\u304d\u305f\u3068\u304d\u306b App Service \u306a\u306e\u304b APIM \u306e\u8a2d\u5b9a\u306a\u306e\u304b\u306e\u539f\u56e0\u5207\u308a\u5206\u3051\u3092\u884c\u3046\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\n\u4e0d\u5177\u5408\u539f\u56e0\u306e\u7279\u5b9a\u306e\u305f\u3081\u306b\u3001\u4e8b\u5b9f\u306e\u7a4d\u307f\u4e0a\u3052\u3068\u4eee\u8aac\u306e\u691c\u8a3c\u3092\u30eb\u30fc\u30d7\u3059\u308b\u308f\u3051\u3067\u3059\u304c\u3001\u3053\u306e\u3068\u304d\u306b\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u3092\u5207\u308a\u5206\u3051\u3066\u52d5\u304b\u3059\u3053\u3068\u3067\u3001\u539f\u56e0\u306e\u7279\u5b9a\u304c\u3057\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u53cc\u65b9\u304c\u95a2\u4fc2\u3057\u3042\u3046\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u305f\u308b\u90e8\u5206\u306f\u3001\u4e3b\u306b JWT \u306b\u306a\u308a\u307e\u3059\u3002\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u3067\u8a8d\u8a3c\u3092\u884c\u3063\u305f\u72b6\u614b\u3067\u3001\u30d6\u30e9\u30a6\u30b6\u304b\u3089 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://{appservice \u306e URL}/.auth/me")," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," (JWT) \u3092\u53d6\u5f97\u3057\u3001curl \u306a\u3069\u3067 APIM \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u308b\u3068\u3044\u3046\u624b\u9806\u3067\u3001APIM \u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u3063\u3066\u5207\u308a\u5206\u3051\u305f\u308a\u3057\u3066\u3044\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"APIM \u306e\u30dd\u30ea\u30b7\u30fc\u8a2d\u5b9a\u306f\u89e6\u3063\u305f\u611f\u3058\u5373\u6642\u53cd\u6620\u306e\u3088\u3046\u306b\u898b\u3048\u308b\u306e\u3067\u3059\u304c\u3001\u6642\u3005\u5fc3\u914d\u306b\u306a\u3063\u305f\u3068\u304d\u306f\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u3067\u304d\u308b\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u6587\u5b57\u5217\u3092\u5909\u3048\u308b\u306a\u3069\u306e tips \u3082\u540c\u50da\u304b\u3089\u6559\u308f\u308a\u307e\u3057\u305f(\u611f\u8b1d\uff01)\u3002"))}A.isMDXComponent=!0},8032:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/architecture-3e0246b8aab40d1df29bacd0167d8c4d.png"}}]);
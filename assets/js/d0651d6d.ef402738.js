"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[7604],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),b=a,k=c["".concat(l,".").concat(b)]||c[b]||m[b]||o;return r?n.createElement(k,p(p({ref:t},s),{},{components:r})):n.createElement(k,p({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={slug:"container-apps-handson",title:"Azure Container Apps \u30cf\u30f3\u30ba\u30aa\u30f3",authors:"ks6088ts",tags:["azure","container"]},p=void 0,i={permalink:"/blog/container-apps-handson",source:"@site/blog/2023-03-13-container-apps-handson.md",title:"Azure Container Apps \u30cf\u30f3\u30ba\u30aa\u30f3",description:"Azure Container Apps \u3092\u4f7f\u3063\u3066\u30de\u30eb\u30c1\u30b3\u30f3\u30c6\u30ca\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002",date:"2023-03-13T00:00:00.000Z",formattedDate:"2023\u5e743\u670813\u65e5",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"container",permalink:"/blog/tags/container"}],readingTime:2.41,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"container-apps-handson",title:"Azure Container Apps \u30cf\u30f3\u30ba\u30aa\u30f3",authors:"ks6088ts",tags:["azure","container"]},prevItem:{title:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059",permalink:"/blog/azure-ad-function-api"},nextItem:{title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089\u5b66\u3076 Azure ~ Web API \u7de8 ~",permalink:"/blog/learn-from-template-webapi"}},l={authorsImageUrls:[void 0]},u=[{value:"\u30cf\u30f3\u30ba\u30aa\u30f3",id:"\u30cf\u30f3\u30ba\u30aa\u30f3",level:2},{value:"\u53c2\u8003\u30ea\u30f3\u30af",id:"\u53c2\u8003\u30ea\u30f3\u30af",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Azure Container Apps \u3092\u4f7f\u3063\u3066\u30de\u30eb\u30c1\u30b3\u30f3\u30c6\u30ca\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("h1",{id:"azure-container-apps-\u3092\u4f7f\u3063\u3066\u307f\u308b"},"Azure Container Apps \u3092\u4f7f\u3063\u3066\u307f\u308b"),(0,a.kt)("p",null,"Azure Container Apps \u306f Kubernetes \u306e\u5b9f\u88c5\u8a73\u7d30\u3092\u96a0\u853d\u3057\u3001\u7c21\u5358\u306b\u30de\u30eb\u30c1\u30b3\u30f3\u30c6\u30ca\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u308b\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u7d20\u306e Kubernetes \u3092\u4f7f\u3046\u3068\u30b1\u30a2\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u304b\u3063\u305f\u3053\u3068\u304c\u3001Azure Container Apps \u306b\u3088\u3063\u3066\u96a0\u853d\u3055\u308c\u3066\u3044\u3066\u3001\u3084\u308a\u305f\u3044\u3053\u3068\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u77e5\u8b58\u304c\u5c11\u306a\u304f\u306a\u3063\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u30b5\u30fc\u30d3\u30b9\u306e\u8a73\u7d30\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/container-apps/overview"},"Azure Container Apps \u306e\u6982\u8981")," \u306b\u3042\u308a\u307e\u3059\u3002  "),(0,a.kt)("h2",{id:"\u30cf\u30f3\u30ba\u30aa\u30f3"},"\u30cf\u30f3\u30ba\u30aa\u30f3"),(0,a.kt)("p",null,"\u500b\u4eba\u7684\u306b\u306f\u5ea7\u5b66\u3088\u308a\u306f\u624b\u3092\u52d5\u304b\u3059\u65b9\u304c\u65e9\u304f\u7406\u89e3\u3067\u304d\u308b\u306e\u3067\u3001",(0,a.kt)("a",{parentName:"p",href:"https://amzn.to/3lgDTca"},"Azure\u30b3\u30f3\u30c6\u30ca\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a")," \u3092\u8cb7\u3063\u3066\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u3066\u307f\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u300eAzure \u30b3\u30f3\u30c6\u30ca\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u300f\uff08\u6280\u8853\u8a55\u8ad6\u793e\uff0c2023 \u5e74\uff09\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gihyo-book/azure-container-dev-book"},"github.com/gihyo-book/azure-container-dev-book")," \u306b\u3042\u308a\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","dev container \u3082\u3042\u308b\u306e\u3067\u3001VS Code \u3067\u958b\u304f\u3068\u74b0\u5883\u304c\u4e00\u6c17\u306b\u6574\u3044\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u5b9f\u884c\u3059\u308b Azure CLI \u30b3\u30de\u30f3\u30c9\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/gihyo-book/azure-container-dev-book/blob/main/apps/part3/README.azcli"},"azure-container-dev-book/apps/part3/README.azcli")," \u306b\u3042\u308a\u307e\u3059\u3002dev container \u304b\u3089\u9010\u6b21\u5b9f\u884c\u3057\u3066\u52d5\u4f5c\u78ba\u8a8d\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u30b3\u30f3\u30c6\u30ca\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u7ba1\u7406\u3084\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u6226\u7565\u306a\u3069\u306e\u89e3\u8aac\u3082\u3042\u308a\u3001Azure Container Apps \u306e\u6982\u8981\u3092\u77e5\u308b\u306e\u306b\u306f\u5341\u5206\u306a\u5185\u5bb9\u3060\u3068\u601d\u3044\u307e\u3057\u305f\u3002\nKubernetes \u306e\u5834\u5408\u306f\u30b5\u30fc\u30d3\u30b9\u30e1\u30c3\u30b7\u30e5\u3092\u5c0e\u5165\u3057\u3066\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u304c Azure Container Apps \u3067\u306f\u7c21\u5358\u306b\u3067\u304d\u307e\u3059\u3002\n\u307e\u305f\u3001\u30ab\u30ca\u30ea\u30a2\u30ea\u30ea\u30fc\u30b9\u3084\u30ea\u30d3\u30b8\u30e7\u30f3\u7ba1\u7406\u306a\u3069\u3001\u30de\u30eb\u30c1\u30b3\u30f3\u30c6\u30ca\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u958b\u767a\u306b\u5fc5\u8981\u306a\u6a5f\u80fd\u304c\u63c3\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u7406\u89e3\u3067\u304d\u307e\u3057\u305f\u3002"),(0,a.kt)("h2",{id:"\u53c2\u8003\u30ea\u30f3\u30af"},"\u53c2\u8003\u30ea\u30f3\u30af"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://techblog.ap-com.co.jp/entry/2021/11/03/093821"},"Azure Container Apps\u3092\u8a66\u3057\u3066\u307f\u305f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Azure Portal \u304b\u3089\u8a66\u3057\u305f\u4f8b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://techblog.ap-com.co.jp/entry/2023/02/10/155135"},"Terraform\u3067Azure Container Apps\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u305f\u306e\u3067\u7206\u901f\u3067\u30c7\u30d7\u30ed\u30a4\u3059\u308b"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Terraform \u3067\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u4f8b\u3002AzureRM Provider \u306e v.3.43.0 \u304b\u3089\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3059\u3050\u306b\u8a18\u4e8b\u304c\u51fa\u3066\u3044\u3066\u975e\u5e38\u306b\u52a9\u304b\u308a\u307e\u3057\u305f\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://techblog.ap-com.co.jp/entry/2022/09/01/120000"},"Azure Container Apps\u3067CI/CD(GitHub Actions\u7de8)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GitHub Actions \u3067\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3092\u30d3\u30eb\u30c9\u3057\u3066 ACR \u3078\u683c\u7d0d\u3057\u3001\u305d\u306e\u30a4\u30e1\u30fc\u30b8\u3092 Container Apps \u3078\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u4f8b"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Azure-Samples/todo-nodejs-mongo-aca"},"Azure-Samples/todo-nodejs-mongo-aca"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Azure Developer CLI \u3067\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u308b ACA \u3092\u4f7f\u3063\u305f\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3")))))}m.isMDXComponent=!0}}]);
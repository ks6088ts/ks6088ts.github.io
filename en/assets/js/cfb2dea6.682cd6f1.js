"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[1432],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3071:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={slug:"handson-rag-app",title:"Azure \u4e0a\u3067\u4f5c\u308b RAG \u30a2\u30d7\u30ea\u306e\u57fa\u790e",authors:"ks6088ts",tags:["azure","app-service","azure-openai-service"]},i=void 0,p={permalink:"/en/blog/handson-rag-app",source:"@site/blog/2024-02-05-handson-rag-app.md",title:"Azure \u4e0a\u3067\u4f5c\u308b RAG \u30a2\u30d7\u30ea\u306e\u57fa\u790e",description:"\u672c\u8a18\u4e8b\u3067\u306f Azure \u4e0a\u3067 RAG \u30a2\u30d7\u30ea\u3092\u958b\u767a\u3059\u308b\u306b\u3042\u305f\u308a\u3001\u5fc5\u8981\u3068\u306a\u308b\u95a2\u9023\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066 Azure OpenAI Service, Azure AI Search, Bing Search \u306e\u30d9\u30fc\u30b7\u30c3\u30af\u306a\u6a5f\u80fd\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",date:"2024-02-05T00:00:00.000Z",formattedDate:"February 5, 2024",tags:[{label:"azure",permalink:"/en/blog/tags/azure"},{label:"app-service",permalink:"/en/blog/tags/app-service"},{label:"azure-openai-service",permalink:"/en/blog/tags/azure-openai-service"}],readingTime:19.105,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"handson-rag-app",title:"Azure \u4e0a\u3067\u4f5c\u308b RAG \u30a2\u30d7\u30ea\u306e\u57fa\u790e",authors:"ks6088ts",tags:["azure","app-service","azure-openai-service"]},nextItem:{title:"Microsoft Graph API \u95a2\u9023\u60c5\u5831\u306e\u307e\u3068\u3081",permalink:"/en/blog/graph-api-summary"}},s={authorsImageUrls:[void 0]},c=[],l={toc:c},u="wrapper";function g(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f Azure \u4e0a\u3067 RAG \u30a2\u30d7\u30ea\u3092\u958b\u767a\u3059\u308b\u306b\u3042\u305f\u308a\u3001\u5fc5\u8981\u3068\u306a\u308b\u95a2\u9023\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066 Azure OpenAI Service, Azure AI Search, Bing Search \u306e\u30d9\u30fc\u30b7\u30c3\u30af\u306a\u6a5f\u80fd\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u5b9f\u969b\u306b\u3001Bing Search API \u3084 Azure AI Search \u3068\u9023\u643a\u3057\u305f\u5c0f\u898f\u6a21\u306a RAG \u30a2\u30d7\u30ea\u306e\u4f5c\u6210\u3082\u884c\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u306a\u304a\u3001\u672c\u8a18\u4e8b\u3067\u63b2\u8f09\u3057\u3066\u3044\u308b Python \u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u4ee5\u4e0b\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u914d\u7f6e\u3057\u3066\u3044\u307e\u3059\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ks6088ts-labs/recipes/blob/main/python/handson_rag_apps/README.md"},"https://github.com/ks6088ts-labs/recipes")))}g.isMDXComponent=!0}}]);
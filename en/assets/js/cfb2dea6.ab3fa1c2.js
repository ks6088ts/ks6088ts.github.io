"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[1432],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(p,".").concat(f)]||u[f]||g[f]||o;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3071:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={slug:"handson-rag-app",title:"RAG \u30a2\u30d7\u30ea\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\uff1aAzure OpenAI Service \u3068 Bing Search API \u306e\u6d3b\u7528\u6cd5",authors:"ks6088ts",tags:["azure","app-service","azure-openai-service"]},i=void 0,c={permalink:"/en/blog/handson-rag-app",source:"@site/blog/2024-02-05-handson-rag-app.md",title:"RAG \u30a2\u30d7\u30ea\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\uff1aAzure OpenAI Service \u3068 Bing Search API \u306e\u6d3b\u7528\u6cd5",description:"\u672c\u8a18\u4e8b\u3067\u306f Azure OpenAI Service \u3068 Bing Search API \u3092\u5229\u7528\u3057\u3066\u3001\u624b\u3063\u53d6\u308a\u65e9\u304f RAG \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2024-02-05T00:00:00.000Z",formattedDate:"February 5, 2024",tags:[{label:"azure",permalink:"/en/blog/tags/azure"},{label:"app-service",permalink:"/en/blog/tags/app-service"},{label:"azure-openai-service",permalink:"/en/blog/tags/azure-openai-service"}],readingTime:8.72,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"handson-rag-app",title:"RAG \u30a2\u30d7\u30ea\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\uff1aAzure OpenAI Service \u3068 Bing Search API \u306e\u6d3b\u7528\u6cd5",authors:"ks6088ts",tags:["azure","app-service","azure-openai-service"]},nextItem:{title:"Microsoft Graph API \u95a2\u9023\u60c5\u5831\u306e\u307e\u3068\u3081",permalink:"/en/blog/graph-api-summary"}},p={authorsImageUrls:[void 0]},s=[],l={toc:s},u="wrapper";function g(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f Azure OpenAI Service \u3068 Bing Search API \u3092\u5229\u7528\u3057\u3066\u3001\u624b\u3063\u53d6\u308a\u65e9\u304f RAG \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"))}g.isMDXComponent=!0}}]);
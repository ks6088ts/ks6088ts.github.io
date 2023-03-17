"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[9316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(g,u(u({ref:t},s),{},{components:r})):n.createElement(g,u({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"azure-ad-function-api",title:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059",authors:"ks6088ts",tags:["azure","azure-ad","msal"]},u=void 0,i={permalink:"/blog/azure-ad-function-api",source:"@site/blog/2023-03-17-azure-ad-function-api.md",title:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059",description:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002",date:"2023-03-17T00:00:00.000Z",formattedDate:"2023\u5e743\u670817\u65e5",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"azure-ad",permalink:"/blog/tags/azure-ad"},{label:"msal",permalink:"/blog/tags/msal"}],readingTime:5.82,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"azure-ad-function-api",title:"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059",authors:"ks6088ts",tags:["azure","azure-ad","msal"]},nextItem:{title:"Azure Container Apps \u30cf\u30f3\u30ba\u30aa\u30f3",permalink:"/blog/container-apps-handson"}},l={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Azure AD \u8a8d\u53ef\u60c5\u5831\u3092\u7528\u3044\u3066\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a2\u30d7\u30ea\u304b\u3089 Azure Functions \u3092\u547c\u3073\u51fa\u3059\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002\n\u53c2\u8003\u306b\u306a\u3063\u305f\u60c5\u5831\u306e\u30ea\u30f3\u30af\u3092\u307e\u3068\u3081\u307e\u3059\u3002"))}f.isMDXComponent=!0}}]);
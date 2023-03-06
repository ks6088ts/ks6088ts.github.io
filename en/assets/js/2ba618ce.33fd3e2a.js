"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[613],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},s=Object.keys(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var n=a.createContext({}),c=function(t){var e=a.useContext(n),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},l=function(t){var e=c(t.components);return a.createElement(n.Provider,{value:e},t.children)},p="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,s=t.originalType,n=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(n,".").concat(d)]||p[d]||g[d]||s;return r?a.createElement(f,u(u({ref:e},l),{},{components:r})):a.createElement(f,u({ref:e},l))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=r.length,u=new Array(s);u[0]=d;var i={};for(var n in e)hasOwnProperty.call(e,n)&&(i[n]=e[n]);i.originalType=t,i[p]="string"==typeof t?t:o,u[1]=i;for(var c=2;c<s;c++)u[c]=r[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7382:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>n,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const s={slug:"gh-pages-by-docusaurus",title:"GitHub Pages by Docusaurus",authors:"ks6088ts",tags:["docusaurus"]},u=void 0,i={permalink:"/en/blog/gh-pages-by-docusaurus",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-03-06-gh-pages-by-docusaurus.md",source:"@site/blog/2023-03-06-gh-pages-by-docusaurus.md",title:"GitHub Pages by Docusaurus",description:"A note for deploying a static site built with docusaurus on GitHub Pages",date:"2023-03-06T00:00:00.000Z",formattedDate:"March 6, 2023",tags:[{label:"docusaurus",permalink:"/en/blog/tags/docusaurus"}],readingTime:.48,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"gh-pages-by-docusaurus",title:"GitHub Pages by Docusaurus",authors:"ks6088ts",tags:["docusaurus"]},nextItem:{title:"Terraform provider for SORACOM \u3092\u4f5c\u3063\u3066 Azure Functions \u3068\u9023\u643a\u3057\u3066\u307f\u305f",permalink:"/en/blog/terraform-provider-soracom"}},n={authorsImageUrls:[void 0]},c=[{value:"Get started",id:"get-started",level:2},{value:"Scaffold project website",id:"scaffold-project-website",level:3},{value:"Docusaurus configurations",id:"docusaurus-configurations",level:3},{value:"Deploy to GitHub Actions with GitHub Actions",id:"deploy-to-github-actions-with-github-actions",level:3},{value:"Update GitHub Settings",id:"update-github-settings",level:3}],l={toc:c},p="wrapper";function g(t){let{components:e,...r}=t;return(0,o.kt)(p,(0,a.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A note for deploying a static site built with docusaurus on GitHub Pages"),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("h3",{id:"scaffold-project-website"},"Scaffold project website"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference: ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/installation#scaffold-project-website"},"Docusaurus / Installation / Scaffold project website"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-docusaurus@latest ks6088ts-labs.github.io classic --typescript\n")),(0,o.kt)("h3",{id:"docusaurus-configurations"},"Docusaurus configurations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference: ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/docusaurus-config"},"docusaurus.config.js")),(0,o.kt)("li",{parentName:"ul"},"Commit: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ks6088ts/ks6088ts.github.io/commit/c02e76e5f68febeeb6c4cd2df02a0473f762e9fb"},"update settings for docusaurus"))),(0,o.kt)("h3",{id:"deploy-to-github-actions-with-github-actions"},"Deploy to GitHub Actions with GitHub Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reference: ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions"},"Docusaurus / Deployment / Triggering deployment with GitHub Actions")),(0,o.kt)("li",{parentName:"ul"},"Commit: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ks6088ts/ks6088ts.github.io/commit/f27953ff6b308eb61986d7941f779f0a24fc57ef"},"add deploy action"))),(0,o.kt)("h3",{id:"update-github-settings"},"Update GitHub Settings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ad-m/github-push-action/issues/96#issuecomment-889984928"},"remote: Permission to git denied to github-actions[bot]. #96")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"},"Configuring a publishing source for your GitHub Pages site"))))}g.isMDXComponent=!0}}]);
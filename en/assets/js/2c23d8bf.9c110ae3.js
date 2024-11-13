"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[371],{5680:(e,r,a)=>{a.d(r,{xA:()=>s,yg:()=>y});var n=a(6540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=n.createContext({}),u=function(e){var r=n.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},s=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=u(a),m=t,y=g["".concat(i,".").concat(m)]||g[m]||c[m]||l;return a?n.createElement(y,o(o({ref:r},s),{},{components:a})):n.createElement(y,o({ref:r},s))}));function y(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[g]="string"==typeof e?e:t,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1225:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(8168),t=(a(6540),a(5680));const l={slug:"handson-azure-search-openai-demo",title:"Azure-Samples/azure-search-openai-demo \u306e\u30cf\u30f3\u30ba\u30aa\u30f3",authors:"ks6088ts",tags:["azure","openai"]},o=void 0,p={permalink:"/en/blog/handson-azure-search-openai-demo",source:"@site/blog/2023-11-01-handson-azure-search-openai-demo.md",title:"Azure-Samples/azure-search-openai-demo \u306e\u30cf\u30f3\u30ba\u30aa\u30f3",description:"Retrieval-Augmented Generation (=RAG) pattern \u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u5b9f\u88c5\u3067\u3042\u308b azure-search-openai-demo \u306e\u5229\u7528\u65b9\u6cd5\u3092\u307e\u3068\u3081\u307e\u3059\u3002",date:"2023-11-01T00:00:00.000Z",formattedDate:"November 1, 2023",tags:[{label:"azure",permalink:"/en/blog/tags/azure"},{label:"openai",permalink:"/en/blog/tags/openai"}],readingTime:4.1,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"handson-azure-search-openai-demo",title:"Azure-Samples/azure-search-openai-demo \u306e\u30cf\u30f3\u30ba\u30aa\u30f3",authors:"ks6088ts",tags:["azure","openai"]},prevItem:{title:"ks6088ts-labs/baseline-environment-on-azure-bicep \u306e\u30cf\u30f3\u30ba\u30aa\u30f3",permalink:"/en/blog/handson-baseline-environment-on-azure-bicep"},nextItem:{title:"Azure OpenAI Service \u306e\u53c2\u8003\u30ea\u30f3\u30af\u96c6",permalink:"/en/blog/bookmarks-aoai"}},i={authorsImageUrls:[void 0]},u=[{value:"\u958b\u767a\u74b0\u5883\u306e\u6e96\u5099",id:"\u958b\u767a\u74b0\u5883\u306e\u6e96\u5099",level:2},{value:"\u30cf\u30f3\u30ba\u30aa\u30f3",id:"\u30cf\u30f3\u30ba\u30aa\u30f3",level:2},{value:"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u4f5c\u6210",id:"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u4f5c\u6210",level:3},{value:"Azure \u30ea\u30bd\u30fc\u30b9\u306e\u4f5c\u6210",id:"azure-\u30ea\u30bd\u30fc\u30b9\u306e\u4f5c\u6210",level:3},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",level:3},{value:"FAQ",id:"faq",level:2},{value:"\u30c1\u30e3\u30c3\u30c8\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306b <code>TypeError: network error</code> \u3068\u3044\u3046\u30a8\u30e9\u30fc\u304c\u51fa\u308b",id:"\u30c1\u30e3\u30c3\u30c8\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306b-typeerror-network-error-\u3068\u3044\u3046\u30a8\u30e9\u30fc\u304c\u51fa\u308b",level:3},{value:"GPT-4 \u3092\u4f7f\u3044\u305f\u3044",id:"gpt-4-\u3092\u4f7f\u3044\u305f\u3044",level:3},{value:"\u53c2\u8003\u8cc7\u6599",id:"\u53c2\u8003\u8cc7\u6599",level:2}],s={toc:u},g="wrapper";function c(e){let{components:r,...a}=e;return(0,t.yg)(g,(0,n.A)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Retrieval-Augmented Generation (=RAG) pattern \u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u5b9f\u88c5\u3067\u3042\u308b azure-search-openai-demo \u306e\u5229\u7528\u65b9\u6cd5\u3092\u307e\u3068\u3081\u307e\u3059\u3002"),(0,t.yg)("h2",{id:"\u958b\u767a\u74b0\u5883\u306e\u6e96\u5099"},"\u958b\u767a\u74b0\u5883\u306e\u6e96\u5099"),(0,t.yg)("p",null,"\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u59cb\u3081\u308b\u524d\u306b\u3001\u304a\u4f7f\u3044\u306e\u958b\u767a\u30de\u30b7\u30f3\u306b\u6b21\u306e\u74b0\u5883\u3092\u6e96\u5099\u3057\u307e\u3059\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/cli/azure/install-azure-cli"},"Azure CLI")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/azure/developer/azure-developer-cli/install-azd?tabs=winget-windows%2Cbrew-mac%2Cscript-linux&pivots=os-linux"},"Azure Developer CLI"))),(0,t.yg)("p",null,"\u672c\u30cf\u30f3\u30ba\u30aa\u30f3\u3067\u306f Azure \u306e\u74b0\u5883\u4f5c\u6210\u3068\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u306e\u30c7\u30d7\u30ed\u30a4\u306b Azure Developer CLI \u3092\u5229\u7528\u3057\u307e\u3059\u3002Azure Developer CLI (azd \u30b3\u30de\u30f3\u30c9)\u306f\u3001Azure \u306e\u30ea\u30bd\u30fc\u30b9\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30c4\u30fc\u30eb\u3067\u3059\u3002\u4e3b\u306b\u4ee5\u4e0b\u306e\u51e6\u7406\u304c\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Azure \u4e0a\u306e\u30ea\u30bd\u30fc\u30b9\u306e\u4f5c\u6210\u3001\u66f4\u65b0\u3001\u524a\u9664"),(0,t.yg)("li",{parentName:"ul"},"Azure \u306e\u30ea\u30bd\u30fc\u30b9\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210"),(0,t.yg)("li",{parentName:"ul"},"IaC \u306b\u3088\u308b\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4\u3084\u7ba1\u7406")),(0,t.yg)("p",null,"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u7528\u610f\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3053\u308c\u3092\u3082\u3068\u306b\u74b0\u5883\u3092\u7d20\u65e9\u304f\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\n\u3053\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u81ea\u4f5c\u53ef\u80fd\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8981\u4ef6\u306b\u3042\u308f\u305b\u305f\u3082\u306e\u3092\u4f5c\u6210\u3057\u3066\u958b\u767a\u30c1\u30fc\u30e0\u3067\u5c55\u958b\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("p",null,"ref. ",(0,t.yg)("a",{parentName:"p",href:"https://aka.ms/awesome-azd/"},"Template Library")),(0,t.yg)("h2",{id:"\u30cf\u30f3\u30ba\u30aa\u30f3"},"\u30cf\u30f3\u30ba\u30aa\u30f3"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"RAG")," \u306f\u3001\u5916\u90e8\u306e\u77e5\u8b58\u30d9\u30fc\u30b9\u304b\u3089\u4e8b\u5b9f\u3092\u691c\u7d22\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u6d1e\u5bdf\u3092 LLM \u306e\u751f\u6210\u30d7\u30ed\u30bb\u30b9\u306b\u7d44\u307f\u8fbc\u3080\u3068\u3044\u3046 AI \u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002\nref. ",(0,t.yg)("a",{parentName:"p",href:"https://speakerdeck.com/hirosatogamo/chatgpt-azure-openai-da-quan?slide=23"},"\u5916\u90e8\u60c5\u5831\u3092\u53d6\u5f97\u3057\u6587\u8108\u3068\u3057\u3066\u4e0e\u3048\u308b\u8003\u3048\u65b9 Grounding")),(0,t.yg)("p",null,"\u672c\u30b5\u30f3\u30d7\u30eb\u306f\u3001Azure Cognitive Search \u3068 Azure OpenAI Service \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u3001RAG \u30d1\u30bf\u30fc\u30f3\u3092\u5b9f\u88c5\u3057\u305f\u3082\u306e\u3067\u3059\u3002"),(0,t.yg)("h3",{id:"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u4f5c\u6210"},"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u4f5c\u6210"),(0,t.yg)("p",null,"\u81ea\u793e\u88fd\u54c1\u306e\u30de\u30cb\u30e5\u30a2\u30eb\u30fb\u7814\u7a76\u8ad6\u6587\u30fb\u793e\u5185\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306a\u3069\u306e\u5b9f\u969b\u306e\u696d\u52d9\u30c7\u30fc\u30bf\u3092\u4f7f\u3046\u306b\u306f\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"data/")," \u306b\u691c\u7d22\u3057\u305f\u3044\u4efb\u610f\u306e PDF \u30d5\u30a1\u30a4\u30eb\u3092\u683c\u7d0d\u3057\u307e\u3059\u3002"),(0,t.yg)("p",null,"\u306a\u304a\u3001\u672c\u30b5\u30f3\u30d7\u30eb\u306f\u30e6\u30fc\u30b6\u8a8d\u8a3c\u3084\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u9589\u57df\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u516c\u958b\u3055\u308c\u3066\u3082\u554f\u984c\u306e\u306a\u3044\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("h3",{id:"azure-\u30ea\u30bd\u30fc\u30b9\u306e\u4f5c\u6210"},"Azure \u30ea\u30bd\u30fc\u30b9\u306e\u4f5c\u6210"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# Azure \u74b0\u5883\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\nazd auth login\n\n# \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u521d\u671f\u5316\u3057\u307e\u3059\nazd init\n\n# \u30af\u30a8\u30ea\u8a00\u8a9e\u30fb\u30a2\u30ca\u30e9\u30a4\u30b6\u3092\u65e5\u672c\u8a9e\u306b\u8a2d\u5b9a\nazd env set AZURE_SEARCH_QUERY_LANGUAGE ja-jp\nazd env set AZURE_SEARCH_QUERY_SPELLER none\nazd env set AZURE_SEARCH_ANALYZER_NAME ja.lucene\n\n# Azure \u30ea\u30bd\u30fc\u30b9\u3092\u4e00\u62ec\u30c7\u30d7\u30ed\u30a4\nazd up\n")),(0,t.yg)("h3",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u52d5\u4f5c\u78ba\u8a8d")),(0,t.yg)("p",null,"\u6a5f\u80fd\u62e1\u5f35\u3084\u3001\u52d5\u4f5c\u306e\u4e0d\u5177\u5408\u89e3\u6790\u3092\u76ee\u7684\u3068\u3057\u3066\u3001\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u52d5\u4f5c\u78ba\u8a8d\u3092\u884c\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"cd app; ./start.sh\n")),(0,t.yg)("p",null,"ref. ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-search-openai-demo#running-locally"},"Running locally")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Cognitive Search \u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u78ba\u8a8d")),(0,t.yg)("p",null,"Azure Portal > Cognitive Search > Search management > Indexes \u753b\u9762\u304b\u3089\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306e\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",(0,t.yg)("br",{parentName:"p"}),"\n","ref. ",(0,t.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/search/search-what-is-an-index"},"Azure Cognitive Search \u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Cognitive Search \u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u4f5c\u6210")),(0,t.yg)("p",null,"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3092\u518d\u4f5c\u6210\u30fb\u66f4\u65b0\u3059\u308b\u5834\u5408\u306f\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"data/")," \u306b pdf \u30d5\u30a1\u30a4\u30eb\u3092\u7f6e\u3044\u305f\u5f8c\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"./scripts/prepdocs.sh\n")),(0,t.yg)("p",null,"\u4e0a\u8a18\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u81ea\u4f53\u306b\u5909\u66f4\u304c\u7121\u3051\u308c\u3070 index \u306f\u518d\u4f5c\u6210\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",(0,t.yg)("br",{parentName:"p"}),"\n","ref. ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-search-openai-demo/pull/835"},"Store an MD5 hash of uploaded/indexed file and check before prepdocs #835")),(0,t.yg)("h2",{id:"faq"},"FAQ"),(0,t.yg)("p",null,"\u30ea\u30dd\u30b8\u30c8\u30ea\u306e FAQ \u306f ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/Azure-Samples/azure-search-openai-demo#faq"},"Azure-Samples/azure-search-openai-demo#faq")," \u306b\u3042\u308a\u307e\u3059\u3002"),(0,t.yg)("h3",{id:"\u30c1\u30e3\u30c3\u30c8\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306b-typeerror-network-error-\u3068\u3044\u3046\u30a8\u30e9\u30fc\u304c\u51fa\u308b"},"\u30c1\u30e3\u30c3\u30c8\u306e\u30ec\u30b9\u30dd\u30f3\u30b9\u306b ",(0,t.yg)("inlineCode",{parentName:"h3"},"TypeError: network error")," \u3068\u3044\u3046\u30a8\u30e9\u30fc\u304c\u51fa\u308b"),(0,t.yg)("p",null,"AOAI \u306e token \u6570\u306e\u4e0a\u9650\u306b\u639b\u304b\u3063\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u53c2\u8003\u6587\u732e\u3068\u3057\u3066\u53d6\u5f97\u3059\u308b\u30c1\u30e3\u30f3\u30af\u6570\u3092\u6e1b\u3089\u3059\u3053\u3068\u3067\u56de\u907f\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002",(0,t.yg)("br",{parentName:"p"}),"\n","\u53d6\u5f97\u3059\u308b\u30c1\u30e3\u30f3\u30af\u6570\u306f\u3001\u753b\u9762\u53f3\u4e0a\u306e ",(0,t.yg)("inlineCode",{parentName:"p"},"Developer Settings")," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001",(0,t.yg)("inlineCode",{parentName:"p"},"Retrieve this many search results:")," \u306e\u8a2d\u5b9a\u304b\u3089\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("h3",{id:"gpt-4-\u3092\u4f7f\u3044\u305f\u3044"},"GPT-4 \u3092\u4f7f\u3044\u305f\u3044"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"infra/main.bicep")," \u306e ",(0,t.yg)("inlineCode",{parentName:"p"},"chatGptModelName")," \u3092 ",(0,t.yg)("inlineCode",{parentName:"p"},"gpt-4")," \u306b\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("h2",{id:"\u53c2\u8003\u8cc7\u6599"},"\u53c2\u8003\u8cc7\u6599"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/Azure-Samples/azure-search-openai-demo"},"Azure-Samples/azure-search-openai-demo")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/Azure-Samples/azure-search-openai-demo/pull/780"},"support non English languages #780")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://asashiho.github.io/azure-search-openai-demo/#/"},"\u696d\u52d9\u30c7\u30fc\u30bf\u3092\u6d3b\u7528\u3057\u305f AI \u30c1\u30e3\u30c3\u30c8\u30b7\u30b9\u30c6\u30e0\u30ef\u30fc\u30af\u30b7\u30e7\u30c3\u30d7"))))}c.isMDXComponent=!0}}]);
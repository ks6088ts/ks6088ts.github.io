"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[1036],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>c});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,c=m["".concat(i,".").concat(d)]||m[d]||g[d]||o;return r?a.createElement(c,l(l({ref:t},s),{},{components:r})):a.createElement(c,l({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:n,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=r(8168),n=(r(6540),r(5680));const o={slug:"azure-developer-cli-get-started",title:"Azure Developer CLI \u306b\u3088\u308b\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u306e\u9ad8\u901f\u5316",authors:"ks6088ts",tags:["azure","azd"]},l=void 0,p={permalink:"/blog/azure-developer-cli-get-started",source:"@site/blog/2023-03-07-azure-developer-cli-get-started.md",title:"Azure Developer CLI \u306b\u3088\u308b\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u306e\u9ad8\u901f\u5316",description:"\u5b9f\u969b\u306b Azure Developer CLI \u3092\u4f7f\u3063\u3066\u307f\u3066\u826f\u304b\u3063\u305f\u70b9\u3084\u3001\u53c2\u8003\u3068\u306a\u308b\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066\u7e8f\u3081\u307e\u3059\u3002",date:"2023-03-07T00:00:00.000Z",formattedDate:"2023\u5e743\u67087\u65e5",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"azd",permalink:"/blog/tags/azd"}],readingTime:5.59,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"azure-developer-cli-get-started",title:"Azure Developer CLI \u306b\u3088\u308b\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u306e\u9ad8\u901f\u5316",authors:"ks6088ts",tags:["azure","azd"]},prevItem:{title:"PowerShell \u30b9\u30af\u30ea\u30d7\u30c8\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",permalink:"/blog/powershell-development-environment"},nextItem:{title:"GitHub Pages by Docusaurus",permalink:"/blog/gh-pages-by-docusaurus"}},i={authorsImageUrls:[void 0]},u=[{value:"azd \u4e92\u63db\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"azd-\u4e92\u63db\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2},{value:"azd \u306b contribute \u3059\u308b",id:"azd-\u306b-contribute-\u3059\u308b",level:2}],s={toc:u},m="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u5b9f\u969b\u306b Azure Developer CLI \u3092\u4f7f\u3063\u3066\u307f\u3066\u826f\u304b\u3063\u305f\u70b9\u3084\u3001\u53c2\u8003\u3068\u306a\u308b\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066\u7e8f\u3081\u307e\u3059\u3002"),(0,n.yg)("h1",{id:"azure-developer-cli-\u3068\u306f"},"Azure Developer CLI \u3068\u306f"),(0,n.yg)("p",null,"Azure Developer CLI (\u4ee5\u4e0b\u3001",(0,n.yg)("inlineCode",{parentName:"p"},"azd"),") \u306f\u3001Azure \u4e0a\u3067\u30af\u30e9\u30a6\u30c9\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u3092\u9ad8\u901f\u5316\u3059\u308b\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30c4\u30fc\u30eb\u3067\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u898f\u5b9a\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u3092\u3082\u3064\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u6307\u5b9a\u3057\u3066\u3001",(0,n.yg)("inlineCode",{parentName:"p"},"azd")," \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092 Azure \u4e0a\u306b\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u3053\u308c\u3089\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b3\u30fc\u30c9\u30fbIaC \u30d5\u30a1\u30a4\u30eb(",(0,n.yg)("inlineCode",{parentName:"p"},"Bicep")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"Terraform"),")\u30fb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u69cb\u9020\u3092\u8a18\u8ff0\u3059\u308b ",(0,n.yg)("inlineCode",{parentName:"p"},"azure.yaml")," \u30d5\u30a1\u30a4\u30eb\u304b\u3089\u69cb\u6210\u3055\u308c\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u3053\u3061\u3089\u3067\u306f\u7c21\u5358\u306a\u4f7f\u3044\u65b9\u304c\u7d39\u4ecb\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/VTk-FhJyo7s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"azd")," \u3092\u4f7f\u3046\u3068\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u7c21\u5358\u304b\u3064\u518d\u73fe\u6027\u306e\u3042\u308b\u5f62\u3067\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u3084\u308a\u305f\u3044\u3053\u3068\u306b\u8fd1\u3057\u3044\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u63a2\u3057\u3066\u3001\u305d\u3053\u304b\u3089\u8a2d\u5b9a\u5909\u66f4\u3084\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u5fae\u4fee\u6b63\u3057\u3066\u3044\u304f\u3068\u3001\u958b\u767a\u5de5\u6570\u304c\u5927\u5e45\u306b\u524a\u6e1b\u3067\u304d\u307e\u3059\u3002"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/Azure/awesome-azd"},"Azure/awesome-azd"),"\u306b\u306f azd \u95a2\u9023\u306e\u30d6\u30ed\u30b0\u8a18\u4e8b\u3084\u52d5\u753b\u306a\u3069\u306e\u60c5\u5831\u304c\u307e\u3068\u307e\u3063\u3066\u3044\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("inlineCode",{parentName:"p"},"azd")," \u4e92\u63db\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u4ee5\u4e0b\u306e\u30ea\u30f3\u30af\u304b\u3089\u63a2\u305b\u307e\u3059\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://aka.ms/awesome-azd"},"Awesome AZD Templates Gallery"),": azd \u4e92\u63db\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u691c\u7d22\u53ef\u80fd\u306a\u30b5\u30a4\u30c8"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/topics/azd-templates"},"Azure Developer CLI templates"),": GitHub \u3067 ",(0,n.yg)("inlineCode",{parentName:"li"},"Azure Developer CLI templates")," topic \u304c\u3064\u3044\u3066\u3044\u308b\u3082\u306e")),(0,n.yg)("h1",{id:"azure-developer-cli-\u306e\u30cf\u30f3\u30ba\u30aa\u30f3"},"Azure Developer CLI \u306e\u30cf\u30f3\u30ba\u30aa\u30f3"),(0,n.yg)("p",null,"\u30cf\u30f3\u30ba\u30aa\u30f3\u3068\u3044\u3063\u3066\u3082\u30c4\u30fc\u30eb\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u30b3\u30de\u30f3\u30c9\u306e\u5b9f\u884c\u3060\u3051\u306a\u306e\u3067\u6570\u5206\u3067\u5b8c\u7d50\u3057\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u307e\u305a\u306f ",(0,n.yg)("inlineCode",{parentName:"p"},"azd")," \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/developer/azure-developer-cli/install-azd?tabs=localinstall%2Cwindows%2Cbrew"},"Azure Developer CLI\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b (\u30d7\u30ec\u30d3\u30e5\u30fc)")," \u3092\u53c2\u8003\u306b\u3001\u958b\u767a\u74b0\u5883\u306e OS \u306b\u5fdc\u3058\u305f\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806\u3092\u5b9f\u884c\u3057\u3001",(0,n.yg)("inlineCode",{parentName:"p"},"azd")," \u30b3\u30de\u30f3\u30c9\u304c\u901a\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u305f\u3068\u3048\u3070 Linux/macOS \u306e\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="azd \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"',title:'"azd','\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"':!0},"$ curl -fsSL https://aka.ms/install-azd.sh | bash\n")),(0,n.yg)("p",null,"\u6b21\u306b ",(0,n.yg)("inlineCode",{parentName:"p"},"azd")," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066 Azure \u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3001\u8a8d\u8a3c\u60c5\u5831\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3068\u30d6\u30e9\u30a6\u30b6\u304b\u3089\u30ed\u30b0\u30a4\u30f3\u3067\u304d\u307e\u3059\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="Azure \u306b\u30ed\u30b0\u30a4\u30f3"',title:'"Azure','\u306b\u30ed\u30b0\u30a4\u30f3"':!0},"$ azd login\nLogged in to Azure.\n")),(0,n.yg)("p",null,"\u9069\u5f53\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u6307\u5b9a\u3057\u3066 ",(0,n.yg)("inlineCode",{parentName:"p"},"azd")," \u3067 Azure \u306b\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u3053\u3053\u3067\u306f ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Azure-Samples/todo-nodejs-mongo-terraform"},"Azure-Samples/todo-nodejs-mongo-terraform")," \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("inlineCode",{parentName:"p"},"azd up")," \u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u521d\u671f\u5316\u3001\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3001\u30c7\u30d7\u30ed\u30a4\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="azd \u3067\u30c7\u30d7\u30ed\u30a4"',title:'"azd','\u3067\u30c7\u30d7\u30ed\u30a4"':!0},"$ azd up --template todo-nodejs-mongo-terraform\n\nInitializing a new project (azd init)\n\n  (\u2713) Done: Initialized git repository\n  (\u2713) Done: Downloading template code to: ...\n\n? Please enter a new environment name: handson_test\n\n? Please enter a new environment name: handson_test\n? Please select an Azure Subscription to use:\n? Please select an Azure location to use:  9. (Asia Pacific) Japan East (japaneast)\n\nProvisioning Azure resources (azd provision)\nProvisioning Azure resources can take some time\n...\n")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"--template")," \u306e\u6307\u5b9a\u65b9\u6cd5\u306f\u3001",(0,n.yg)("inlineCode",{parentName:"p"},"Azure-Samples/")," \u914d\u4e0b\u306e\u30b5\u30f3\u30d7\u30eb\u3067\u3042\u308c\u3070\u4e0a\u8a18\u306e\u3088\u3046\u306b\u30ea\u30dd\u30b8\u30c8\u30ea\u540d\u3060\u3051\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001",(0,n.yg)("inlineCode",{parentName:"p"},"https://github.com/Azure-Samples/todo-nodejs-mongo-terraform")," \u306e\u3088\u3046\u306b URI \u3092\u30d5\u30eb\u3067\u6307\u5b9a\u3082\u3067\u304d\u307e\u3059\u3002  "),(0,n.yg)("p",null,"\u306a\u304a\u3001",(0,n.yg)("inlineCode",{parentName:"p"},"azd up")," \u306f\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u500b\u5225\u306b\u5b9f\u884c\u3059\u308b\u3053\u3068\u3068\u7b49\u4fa1\u3067\u3059\u3002"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"$ azd init\n$ azd provision\n$ azd deploy\n")),(0,n.yg)("p",null,"\u516c\u5f0f\u306e ",(0,n.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.azure-dev"},"VS Code extension")," \u3082\u3042\u308b\u306e\u3067\u3001VS Code \u4e0a\u306e\u64cd\u4f5c\u3067 ",(0,n.yg)("inlineCode",{parentName:"p"},"azd")," \u306e\u5404\u7a2e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,n.yg)("h1",{id:"\u4f55\u304c\u5b09\u3057\u3044\u306e\u304b"},"\u4f55\u304c\u5b09\u3057\u3044\u306e\u304b"),(0,n.yg)("p",null,"\u4eca\u6642\u3001\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u7acb\u3061\u4e0a\u3052\u3088\u3046\u3068\u3059\u308b\u3068\u3001CI/CD pipeline\u3001dev container\u3001vscode \u8a2d\u5b9a\u3001linter/formatter\u3001IaC \u306a\u3069\u3001\u3084\u308b\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u307b\u3068\u3093\u3069\u306e\u4f5c\u696d\u306f\u5b9a\u578b\u7684\u306a\u4f5c\u696d\u3067\u306f\u3042\u308b\u306e\u3067\u3001\u3053\u306e\u8fba\u3092\u4e38\u3063\u3068\u62bd\u8c61\u5316\u3057\u3066\u9069\u5207\u306a\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u3092\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5074\u3067\u4e0e\u3048\u3066\u304f\u308c\u308b\u70b9\u304c\u5b09\u3057\u3044\u30dd\u30a4\u30f3\u30c8\u3067\u3059\u3002"),(0,n.yg)("p",null,"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u53d6\u3063\u639b\u304b\u308a\u306b\u3057\u3066\u3001\u5fc5\u8981\u306a\u5909\u66f4\u3092\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306b\u5165\u308c\u305f\u308a\u3001\u8a2d\u5b9a\u5024\u3092\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u3059\u308b\u3060\u3051\u3067\u3084\u308a\u305f\u3044\u3053\u3068\u306b\u65e9\u304f\u8fd1\u3065\u3051\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","\u4eca\u5f8c\u3055\u3089\u306b azd \u4e92\u63db\u306a\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u5897\u3048\u308c\u3070\u305d\u306e\u52e2\u3044\u306f\u5897\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,n.yg)("p",null,"\u3053\u306e\u624b\u306e scaffolding \u30c4\u30fc\u30eb\u306f\u65e2\u306b\u4e16\u306e\u4e2d\u306b\u3042\u308a\u3001template repo \u3092 fork \u3057\u305f\u308a cookiecutter \u3092\u4f7f\u3046\u306e\u3068\u307b\u307c\u7b49\u4fa1\u3067\u306f\u3042\u308a\u307e\u3059\u3002\u304c\u3001\u4ee5\u4e0b\u306e\u70b9\u304c ",(0,n.yg)("inlineCode",{parentName:"p"},"azd")," \u306a\u3089\u3067\u306f\u306e\u30e1\u30ea\u30c3\u30c8\u3067\u3059\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u5229\u7528\u8005\u306f CLI \u3067\u5b8c\u7d50\u3057\u3066\u4f5c\u696d\u3067\u304d\u308b"),(0,n.yg)("li",{parentName:"ul"},"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u968e\u5c64\u306e\u898f\u7d04\u304c\u3042\u308b\u306e\u3067\u5229\u7528\u8005\u306e\u8a8d\u77e5\u8ca0\u8377\u304c\u4f4e\u3044")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/Azure/reliable-web-app-pattern-dotnet"},"Azure/reliable-web-app-pattern-dotnet")," \u306e\u3088\u3046\u306b production grade \u306a\u3082\u306e\u3082\u958b\u767a\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,n.yg)("br",{parentName:"p"}),"\n","Azure \u30e6\u30fc\u30b6\u30fc\u306e\u751f\u7523\u6027\u3092\u5411\u4e0a\u3055\u305b\u308b\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306e\u767a\u5c55\u304c\u3001\u3088\u308a\u591a\u304f\u306e\u3053\u3068\u3092\u5c11\u306a\u3044\u624b\u9593\u3067\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u4e00\u52a9\u306b\u306a\u308b\u306e\u3067\u306f\u3068\u671f\u5f85\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.yg)("h1",{id:"todo"},"TODO"),(0,n.yg)("h2",{id:"azd-\u4e92\u63db\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},"azd \u4e92\u63db\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/make-azd-compatible?pivots=azd-create#azd-conventions"},(0,n.yg)("inlineCode",{parentName:"a"},"azd")," conventions"),"\u306b\u5f93\u3063\u3066\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,n.yg)("h2",{id:"azd-\u306b-contribute-\u3059\u308b"},"azd \u306b contribute \u3059\u308b"),(0,n.yg)("p",null,"CLI \u3068 extension \u306f monorepo \u69cb\u6210\u3067",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Azure/azure-dev"},"Azure/azure-dev"),"\u306b\u3066\u958b\u767a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\nextension \u306f TypeScript\u3001azd \u672c\u4f53\u306f Go \u3067\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u3002"))}g.isMDXComponent=!0}}]);
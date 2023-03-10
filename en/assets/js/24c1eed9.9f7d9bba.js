"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[980],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=l.createContext({}),p=function(e){var t=l.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?l.createElement(h,a(a({ref:t},c),{},{components:r})):l.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var l=r(7462),n=(r(7294),r(3905));const o={slug:"powershell-development-environment",title:"PowerShell \u30b9\u30af\u30ea\u30d7\u30c8\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",authors:"ks6088ts",tags:["powershell"]},a=void 0,s={permalink:"/en/blog/powershell-development-environment",source:"@site/blog/2023-03-10-powershell-development-envitonment.md",title:"PowerShell \u30b9\u30af\u30ea\u30d7\u30c8\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",description:"PowerShell \u30b9\u30af\u30ea\u30d7\u30c8\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9\u306b\u3042\u305f\u308a\u3001\u4fbf\u5229\u306a\u30c4\u30fc\u30eb\u3084\u74b0\u5883\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2023-03-10T00:00:00.000Z",formattedDate:"March 10, 2023",tags:[{label:"powershell",permalink:"/en/blog/tags/powershell"}],readingTime:2.51,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"powershell-development-environment",title:"PowerShell \u30b9\u30af\u30ea\u30d7\u30c8\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",authors:"ks6088ts",tags:["powershell"]},prevItem:{title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089\u5b66\u3076 Azure ~ Web API \u7de8 ~",permalink:"/en/blog/learn-from-template-webapi"},nextItem:{title:"Azure Developer CLI \u306b\u3088\u308b\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u306e\u9ad8\u901f\u5316",permalink:"/en/blog/azure-developer-cli-get-started"}},i={authorsImageUrls:[void 0]},p=[{value:"\u30a8\u30c7\u30a3\u30bf",id:"\u30a8\u30c7\u30a3\u30bf",level:2},{value:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8",level:2},{value:"Code snippets",id:"code-snippets",level:3},{value:"\u9759\u7684\u89e3\u6790",id:"\u9759\u7684\u89e3\u6790",level:2},{value:"\u30c6\u30b9\u30c8",id:"\u30c6\u30b9\u30c8",level:2},{value:"Docker",id:"docker",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"PowerShell \u30b9\u30af\u30ea\u30d7\u30c8\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9\u306b\u3042\u305f\u308a\u3001\u4fbf\u5229\u306a\u30c4\u30fc\u30eb\u3084\u74b0\u5883\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,n.kt)("h1",{id:"powershell-\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9"},"PowerShell \u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9"),(0,n.kt)("h2",{id:"\u30a8\u30c7\u30a3\u30bf"},"\u30a8\u30c7\u30a3\u30bf"),(0,n.kt)("p",null,"Syntax highlighting\u3001\u30a4\u30f3\u30c6\u30ea\u30bb\u30f3\u30b9\u306a\u3069\u3092\u6709\u52b9\u306b\u3059\u308b\u305f\u3081\u3001",(0,n.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell"},"PowerShell for Visual Studio Code"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066 VS Code \u4e0a\u3067\u958b\u767a\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),(0,n.kt)("p",null,"\u57fa\u672c\u7684\u306b\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/powershell/"},"PowerShell Documentation"),"\u306e\u516c\u5f0f\u60c5\u5831\u3092\u53c2\u7167\u3057\u307e\u3059\u3002\n\u5177\u4f53\u7684\u306a\u6587\u6cd5\u3084\u4f7f\u3044\u65b9\u306b\u95a2\u3057\u3066\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u898b\u305f\u3044\u5834\u5408\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/powershell/scripting/learn/deep-dives/everything-about-arrays"},"~\u306b\u3064\u3044\u3066\u77e5\u308a\u305f\u304b\u3063\u305f\u3053\u3068\u306e\u3059\u3079\u3066"),"\u3092\u53c2\u7167\u3059\u308b\u3068\u826f\u3044\u3068\u601d\u3044\u307e\u3059\u3002\nPowerShell \u30b9\u30af\u30ea\u30d7\u30c8\u958b\u767a\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3092\u77e5\u308a\u305f\u3044\u5834\u5408\u306f\u3001",(0,n.kt)("a",{parentName:"p",href:"https://poshcode.gitbook.io/powershell-practice-and-style/"},"PowerShell Best Practices and Style Guide")," \u304c\u53c2\u8003\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",{id:"code-snippets"},"Code snippets"),(0,n.kt)("p",null,"\u500b\u4eba\u7684\u306b\u3088\u304f\u4f7f\u3046\u30b9\u30cb\u30da\u30c3\u30c8\u96c6\u3092\u4f5c\u6210\u3057\u3066\u3001\u30b3\u30fc\u30c9\u8cc7\u7523\u3092\u4f7f\u3044\u307e\u308f\u3059\u3068\u52b9\u7387\u7684\u3067\u3059\u3002\n\u7d30\u304b\u3044\u6587\u6cd5\u306a\u3069\u306f\u89e6\u3063\u3066\u3044\u306a\u3044\u3068\u5fd8\u308c\u304c\u3061\u306a\u306e\u3067\u3001\u3088\u304f\u4f7f\u3046\u30b9\u30cb\u30da\u30c3\u30c8\u306f\u4f7f\u3044\u307e\u308f\u305b\u308b\u3088\u3046\u306b\u3057\u3066\u304a\u304f\u3068\u3088\u3044\u3067\u3057\u3087\u3046\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Install PowerShell modules"',title:'"Install',PowerShell:!0,'modules"':!0},'#!/usr/bin/env pwsh\n\nWrite-Host "Running "$MyInvocation.MyCommand.Name" ..."\n\nSet-PSRepository -Name \'PSGallery\' -InstallationPolicy Trusted\n\n$modules = @(\n    "Microsoft.Graph"\n    "Pester"\n)\n\nforeach ($module in $modules) {\n    Write-Host "Installing $module"\n    Install-Module -Name $module -Scope CurrentUser\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell module: mymodule.psm1"',title:'"PowerShell',"module:":!0,'mymodule.psm1"':!0},'# mymodule \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\n$global:MyModuleVersion = "v0.0.1"\n\nfunction Initialize-MyModule {\n    # do something\n}\n\nExport-ModuleMember -Variable MyModuleVersion\nExport-ModuleMember -Function Initialize-MyModule\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="PowerShell script: client.test.ps1"',title:'"PowerShell',"script:":!0,'client.test.ps1"':!0},'# unit test by Pester\nusing module "./mymodule.psm1"\n\nDescribe "Smoke test" {\n    Context "Nominal case" {\n        It "Check global variables" {\n            # version variable settings\n            $MyModuleVersion | Should Be "v0.0.1"\n        }\n    }\n}\n')),(0,n.kt)("h2",{id:"\u9759\u7684\u89e3\u6790"},"\u9759\u7684\u89e3\u6790"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/PowerShell/PSScriptAnalyzer"},"PowerShell/PSScriptAnalyzer"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Module -Name PSScriptAnalyzer -Scope CurrentUser\n")),(0,n.kt)("p",null,"\u4f7f\u3044\u65b9\u306f ",(0,n.kt)("a",{parentName:"p",href:"https://qiita.com/nimzo6689/items/1c55c6782027a78a51e5"},"PSScriptAnalyzer\u3092\u4f7f\u3063\u3066PowerShell\u306e\u30b3\u30fc\u30c9\u3092\u30ad\u30ec\u30a4\u306b\u4fdd\u3068\u3046"),"\u3092\u53c2\u7167\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"\u30c6\u30b9\u30c8"},"\u30c6\u30b9\u30c8"),(0,n.kt)("p",null,"\u30e6\u30cb\u30c3\u30c8\u30c6\u30b9\u30c8\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3068\u3057\u3066",(0,n.kt)("a",{parentName:"p",href:"https://pester.dev/docs/quick-start/"},"Pester / Quick Start"),"\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Module -Name Pester -Scope CurrentUser\n")),(0,n.kt)("h2",{id:"docker"},"Docker"),(0,n.kt)("p",null,"PowerShell \u30b9\u30af\u30ea\u30d7\u30c8\u306e\u518d\u73fe\u6027\u62c5\u4fdd\u306e\u305f\u3081\u306b\u3001Docker \u30b3\u30f3\u30c6\u30ca\u4e0a\u3067\u958b\u767a\u3057\u305f\u3044\u5834\u5408\u3001\u30d9\u30fc\u30b9\u3068\u306a\u308b\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u306f ",(0,n.kt)("a",{parentName:"p",href:"https://mcr.microsoft.com/en-us/product/powershell/tags"},"mcr.microsoft.com/powershell")," \u306b\u3042\u308a\u307e\u3059\u3002\u5fc5\u8981\u306a tag \u3092\u6307\u5b9a\u3057\u3066\u5229\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u7279\u306b\u3001PowerShell module \u304c\u5ec3\u6b62\u306b\u306a\u308b\u5834\u5408\u306b\u3001\u305d\u306e module \u306e\u4f9d\u5b58\u3092\u5265\u304c\u3059\u958b\u767a\u3092\u3059\u308b\u5834\u5408\u306a\u3069\u3067\u91cd\u5b9d\u3057\u307e\u3057\u305f\u3002"))}m.isMDXComponent=!0}}]);
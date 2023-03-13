"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[4814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={slug:"learn-from-template-webapi",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089\u5b66\u3076 Azure ~ Web API \u7de8 ~",authors:"ks6088ts",tags:["terraform","azure","apim"]},l=void 0,i={permalink:"/en/blog/learn-from-template-webapi",source:"@site/blog/2023-03-10-learn-from-template-webapi.md",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089\u5b66\u3076 Azure ~ Web API \u7de8 ~",description:"\u7c21\u5358\u306a TODO \u30a2\u30d7\u30ea\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089 Azure \u3092\u5b66\u3076\u30b7\u30ea\u30fc\u30ba\u3002",date:"2023-03-10T00:00:00.000Z",formattedDate:"March 10, 2023",tags:[{label:"terraform",permalink:"/en/blog/tags/terraform"},{label:"azure",permalink:"/en/blog/tags/azure"},{label:"apim",permalink:"/en/blog/tags/apim"}],readingTime:4.145,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"learn-from-template-webapi",title:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089\u5b66\u3076 Azure ~ Web API \u7de8 ~",authors:"ks6088ts",tags:["terraform","azure","apim"]},prevItem:{title:"Azure Container Apps \u30cf\u30f3\u30ba\u30aa\u30f3",permalink:"/en/blog/container-apps-handson"},nextItem:{title:"PowerShell \u30b9\u30af\u30ea\u30d7\u30c8\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9",permalink:"/en/blog/powershell-development-environment"}},p={authorsImageUrls:[void 0]},m=[{value:"\u76ee\u7684",id:"\u76ee\u7684",level:2},{value:"\u30c7\u30d7\u30ed\u30a4",id:"\u30c7\u30d7\u30ed\u30a4",level:2},{value:"\u30b3\u30fc\u30c9\u3092\u8aad\u3080",id:"\u30b3\u30fc\u30c9\u3092\u8aad\u3080",level:2},{value:"IaC \u30b3\u30fc\u30c9\u306e\u6982\u8981\u3092\u3064\u304b\u3080",id:"iac-\u30b3\u30fc\u30c9\u306e\u6982\u8981\u3092\u3064\u304b\u3080",level:3},{value:"WIP: azure.yaml \u306e services \u306e\u30d3\u30eb\u30c9\u30d7\u30ed\u30bb\u30b9\u306b\u3064\u3044\u3066",id:"wip-azureyaml-\u306e-services-\u306e\u30d3\u30eb\u30c9\u30d7\u30ed\u30bb\u30b9\u306b\u3064\u3044\u3066",level:3}],s={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7c21\u5358\u306a TODO \u30a2\u30d7\u30ea\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304b\u3089 Azure \u3092\u5b66\u3076\u30b7\u30ea\u30fc\u30ba\u3002\n\u4eca\u56de\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/todo-nodejs-mongo-terraform"},"Azure-Samples/todo-nodejs-mongo-terraform"),"\u3092\u89e6\u3063\u3066\u52c9\u5f37\u3057\u307e\u3059\u3002"),(0,a.kt)("h1",{id:"azure-samplestodo-nodejs-mongo-terraform"},(0,a.kt)("a",{parentName:"h1",href:"https://github.com/Azure-Samples/todo-nodejs-mongo-terraform"},"Azure-Samples/todo-nodejs-mongo-terraform")),(0,a.kt)("h2",{id:"\u76ee\u7684"},"\u76ee\u7684"),(0,a.kt)("p",null,"\u7c21\u5358\u306a TODO \u30a2\u30d7\u30ea\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u3001\u5b9f\u52d5\u4f5c\u3068\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u78ba\u304b\u3081\u3064\u3064\u3001Azure \u306e\u57fa\u672c\u7684\u306a\u6a5f\u80fd\u3092\u5b66\u3073\u307e\u3059\u3002\n\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/Azure-Samples/todo-nodejs-mongo-terraform/raw/main/assets/resources.png",alt:"architecture"})),(0,a.kt)("h2",{id:"\u30c7\u30d7\u30ed\u30a4"},"\u30c7\u30d7\u30ed\u30a4"),(0,a.kt)("p",null,"\u307e\u305a\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/todo-nodejs-mongo-terraform/blob/main/README.md"},"README.md")," \u3092\u8aad\u307f\u3001\u30c7\u30d7\u30ed\u30a4\u624b\u9806\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"azd")," \u5bfe\u5fdc\u306a\u306e\u3067\u3001\u30b3\u30de\u30f3\u30c9\u4e00\u767a\u3067\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u307e\u3059\u3002\nazd \u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/en/blog/azure-developer-cli-get-started"},"Azure Developer CLI \u306b\u3088\u308b\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u306e\u9ad8\u901f\u5316"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u30ea\u30dd\u30b8\u30c8\u30ea\u3092 clone\ngit clone git@github.com:Azure-Samples/todo-nodejs-mongo-terraform.git\ncd todo-nodejs-mongo-terraform\n\n# APIM \u3092\u4f7f\u3044\u305f\u3044\u306e\u3067\u74b0\u5883\u5909\u6570\u3092\u8a2d\u5b9a\nazd env set USE_APIM true\n\n# \u30c7\u30d7\u30ed\u30a4\nazd up\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u3067 Azure \u4e0a\u306b\u30ea\u30bd\u30fc\u30b9\u304c\u4f5c\u6210\u3055\u308c\u3001\u30c7\u30d7\u30ed\u30a4\u304c\u5b8c\u4e86\u3057\u307e\u3059\u3002\n\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u305f API \u30b5\u30fc\u30d0\u30fc\u3084 Web \u30a2\u30d7\u30ea\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u52d5\u4f5c\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API \u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30af\u30bb\u30b9(Swagger UI \u304c\u958b\u304f): ",(0,a.kt)("inlineCode",{parentName:"li"},"https://app-api-{RESOURCE_TOKEN}.azurewebsites.net/")),(0,a.kt)("li",{parentName:"ul"},"Web \u30b5\u30fc\u30d0\u30fc\u306b\u30a2\u30af\u30bb\u30b9(Web \u30a2\u30d7\u30ea\u304c\u958b\u304f): ",(0,a.kt)("inlineCode",{parentName:"li"},"https://app-web-{RESOURCE_TOKEN}.azurewebsites.net/"))),(0,a.kt)("p",null,"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089\u52d5\u4f5c\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Azure Dashboard \u3092\u958b\u304f\nazd monitor --overview\n\n# Application Insights \u306e Live metrics stream \u3092\u958b\u304f\nazd monitor --live\n\n# Application Insights \u306e Logs \u3092\u958b\u304f\nazd monitor --logs\n")),(0,a.kt)("h2",{id:"\u30b3\u30fc\u30c9\u3092\u8aad\u3080"},"\u30b3\u30fc\u30c9\u3092\u8aad\u3080"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"azd")," \u5bfe\u5fdc\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u69cb\u9020\u306b\u898f\u5247\u6027\u304c\u3042\u308b\u306e\u3067\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u304c\u8aad\u307f\u3084\u3059\u3044\u3067\u3059\u3002\n\u4e00\u4f8b\u3068\u3057\u3066\u81ea\u5206\u306e\u30b3\u30fc\u30c9\u306e\u8aad\u307f\u65b9\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"iac-\u30b3\u30fc\u30c9\u306e\u6982\u8981\u3092\u3064\u304b\u3080"},"IaC \u30b3\u30fc\u30c9\u306e\u6982\u8981\u3092\u3064\u304b\u3080"),(0,a.kt)("p",null,"\u30a4\u30f3\u30d5\u30e9\u5074\u306e\u30ea\u30bd\u30fc\u30b9\u5b9a\u7fa9\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"infra/")," \u4ee5\u4e0b\u306b\u3042\u308a\u307e\u3059\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/todo-nodejs-mongo-terraform/blob/main/infra/main.tf"},"infra/main.tf")," \u304c\u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u30a8\u30f3\u30c8\u30ea\u30dd\u30a4\u30f3\u30c8\u306b\u306a\u3063\u3066\u3044\u3066\u3001\u3053\u3053\u3067\u5b9a\u7fa9\u3055\u308c\u308b\u5404\u7a2e module \u306e\u5b9f\u88c5\u8a73\u7d30\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},"modules/")," \u4ee5\u4e0b\u306b\u914d\u7f6e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u7d30\u90e8\u3092\u8aad\u307f\u8fbc\u3080\u524d\u306b\u3001\u307e\u305a\u306f\u3053\u306e main.tf \u3092\u8aad\u3093\u3067\u5168\u4f53\u50cf\u3092\u628a\u63e1\u3057\u3066\u304a\u304d\u307e\u3057\u3087\u3046\u3002\n\u3053\u3053\u3067\u306f\u4e00\u4f8b\u3068\u3057\u3066 ",(0,a.kt)("inlineCode",{parentName:"p"},"applicationinsights")," \u3092\u898b\u3066\u307f\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terraform"},'module "applicationinsights" {\n  source           = "./modules/applicationinsights"\n  location         = var.location\n  rg_name          = azurerm_resource_group.rg.name\n  environment_name = var.environment_name\n  workspace_id     = module.loganalytics.LOGANALYTICS_WORKSPACE_ID\n  tags             = azurerm_resource_group.rg.tags\n  resource_token   = local.resource_token\n}\n')),(0,a.kt)("p",null,"\u3053\u3053\u3067\u5f15\u6570\u3068\u3057\u3066\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"module.loganalytics.LOGANALYTICS_WORKSPACE_ID")," \u306b\u6ce8\u76ee\u3057\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u3053\u308c\u306f applicationinsights \u306f loganalytics \u306b\u4f9d\u5b58\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002\n\u3059\u3079\u3066\u3092\u982d\u306b\u5165\u308c\u308b\u306e\u306f\u5927\u5909\u306a\u306e\u3067\u3001\u3069\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u3069\u3046\u3044\u3046\u65b9\u5411\u3067\u4f9d\u5b58\u3092\u5f35\u3063\u3066\u3044\u308b\u306e\u304b\u306e\u6982\u8981\u3092\u3056\u3063\u304f\u308a\u628a\u63e1\u3057\u3066\u304a\u304f\u3068\u3001\u5f8c\u3005\u306e\u7d30\u90e8\u306e\u7406\u89e3\u304c\u697d\u306b\u306a\u308a\u307e\u3059\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","(\u56f3\u306b\u66f8\u3044\u3066\u30e2\u30b8\u30e5\u30fc\u30eb\u9593\u306e\u4f9d\u5b58\u3092\u77e2\u5370\u3067\u66f8\u304f\u3068\u826f\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093)"),(0,a.kt)("p",null,"Web \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068 API \u30b5\u30fc\u30d0\u30fc\u306e\u5b9f\u88c5\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"modules/appservicenode/")," \u4ee5\u4e0b\u306b\u3042\u308a\u307e\u3059\u3002\n\u305d\u308c\u305e\u308c\u74b0\u5883\u5909\u6570\u3068\u3057\u3066\u53c2\u7167\u3057\u3066\u3044\u308b\u30d1\u30e9\u30e1\u30fc\u30bf\u304b\u3089\u4f9d\u5b58\u95a2\u4fc2\u304c\u5224\u308a\u307e\u3059\u3002\n\u4ee5\u4e0b\u306f API \u30b5\u30fc\u30d0\u30fc\u306e\u8a2d\u5b9a\u5024\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terraform"},'  app_settings = {\n    "AZURE_COSMOS_CONNECTION_STRING_KEY"    = local.cosmos_connection_string_key\n    "AZURE_COSMOS_DATABASE_NAME"            = module.cosmos.AZURE_COSMOS_DATABASE_NAME\n    "SCM_DO_BUILD_DURING_DEPLOYMENT"        = "true"\n    "AZURE_KEY_VAULT_ENDPOINT"              = module.keyvault.AZURE_KEY_VAULT_ENDPOINT\n    "APPLICATIONINSIGHTS_CONNECTION_STRING" = module.applicationinsights.APPLICATIONINSIGHTS_CONNECTION_STRING\n  }\n')),(0,a.kt)("p",null,"\u3056\u3063\u304f\u308a\u4ee5\u4e0b\u306e\u3053\u3068\u304c\u5206\u308a\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module.cosmos"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"AZURE_COSMOS_CONNECTION_STRING_KEY")," \u304b\u3089 Cosmos DB \u306b\u4f9d\u5b58"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AZURE_KEY_VAULT_ENDPOINT")," \u304b\u3089 Key Vault \u306b\u4f9d\u5b58"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"module.applicationinsights.APPLICATIONINSIGHTS_CONNECTION_STRING")," \u304b\u3089 Application Insights \u306b\u4f9d\u5b58")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"azd up")," \u3067\u4f5c\u6210\u3055\u308c\u305f\u5404\u7a2e\u30ea\u30bd\u30fc\u30b9\u306f ",(0,a.kt)("inlineCode",{parentName:"p"},".azure/ENVIRONMENT_NAME/terraform.tfstate")," \u306b\u8a18\u9332\u3055\u308c\u3066\u3044\u307e\u3059\u306e\u3067\u3001\u5b9f\u969b\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u500b\u3005\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"wip-azureyaml-\u306e-services-\u306e\u30d3\u30eb\u30c9\u30d7\u30ed\u30bb\u30b9\u306b\u3064\u3044\u3066"},"WIP: azure.yaml \u306e services \u306e\u30d3\u30eb\u30c9\u30d7\u30ed\u30bb\u30b9\u306b\u3064\u3044\u3066"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"azd")," \u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"azure.yaml")," \u306b\u5b9a\u7fa9\u3055\u308c\u305f ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," \u306e\u30d3\u30eb\u30c9\u30d7\u30ed\u30bb\u30b9\u3092\u81ea\u52d5\u5316\u3057\u3066\u3044\u307e\u3059\u3002\n\u6319\u52d5\u306e\u8a73\u7d30\u306f\u628a\u63e1\u3057\u6b21\u7b2c\u8ffd\u8a18\u3057\u307e\u3059\u3002"))}c.isMDXComponent=!0}}]);
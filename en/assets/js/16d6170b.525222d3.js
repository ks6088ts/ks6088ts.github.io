"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[2704],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=a.createContext({}),p=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=p(n.components);return a.createElement(s.Provider,{value:e},n.children)},u="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),u=p(t),g=i,f=u["".concat(s,".").concat(g)]||u[g]||m[g]||r;return t?a.createElement(f,o(o({ref:e},c),{},{components:t})):a.createElement(f,o({ref:e},c))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[u]="string"==typeof n?n:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5098:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={slug:"aoai-function-calling",title:"Azure OpenAI Service \u3092\u7528\u3044\u305f Function Calling \u306e\u30cf\u30f3\u30ba\u30aa\u30f3",authors:"ks6088ts",tags:["azure","azure-openai-service","langchain"]},o=void 0,l={permalink:"/en/blog/aoai-function-calling",source:"@site/blog/2023-07-26-aoai-function-calling/index.md",title:"Azure OpenAI Service \u3092\u7528\u3044\u305f Function Calling \u306e\u30cf\u30f3\u30ba\u30aa\u30f3",description:"Azure OpenAI Service \u3092\u7528\u3044\u305f Function Calling \u3092\u7406\u89e3\u3059\u308b\u305f\u3081\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u884c\u3044\u307e\u3057\u305f\u3002\u521d\u898b\u3067\u306f\u4f55\u3092\u3057\u3066\u3044\u308b\u306e\u304b\u3088\u304f\u308f\u304b\u3089\u306a\u304b\u3063\u305f\u3053\u3068\u3082\u3042\u3063\u305f\u306e\u3067\u3001\u81ea\u5206\u304c\u7406\u89e3\u3057\u3066\u3044\u3063\u305f\u904e\u7a0b\u3092\u307e\u3068\u3081\u3066\u304a\u3044\u3066\u5f8c\u7d9a\u306e\u8ab0\u304b\u306b\u5f79\u306b\u7acb\u3066\u3070\u3068\u601d\u3044\u8db3\u8de1\u3092\u6b8b\u3057\u3066\u304a\u304d\u307e\u3059\u3002",date:"2023-07-26T00:00:00.000Z",formattedDate:"July 26, 2023",tags:[{label:"azure",permalink:"/en/blog/tags/azure"},{label:"azure-openai-service",permalink:"/en/blog/tags/azure-openai-service"},{label:"langchain",permalink:"/en/blog/tags/langchain"}],readingTime:15.04,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"aoai-function-calling",title:"Azure OpenAI Service \u3092\u7528\u3044\u305f Function Calling \u306e\u30cf\u30f3\u30ba\u30aa\u30f3",authors:"ks6088ts",tags:["azure","azure-openai-service","langchain"]},prevItem:{title:"Azure OpenAI Service \u306e\u53c2\u8003\u30ea\u30f3\u30af\u96c6",permalink:"/en/blog/bookmarks-aoai"},nextItem:{title:"Azure OpenAI Service \u3092\u5229\u7528\u3057\u305f ChatGPT \u304a\u8a66\u3057\u74b0\u5883\u306b\u30ed\u30b0\u51fa\u529b\u6a5f\u80fd\u3092\u8ffd\u52a0\u3059\u308b",permalink:"/en/blog/aoai-apim-easyauth"}},s={authorsImageUrls:[void 0]},p=[{value:"\u30cf\u30f3\u30ba\u30aa\u30f3\u306e\u6982\u8981",id:"\u30cf\u30f3\u30ba\u30aa\u30f3\u306e\u6982\u8981",level:2},{value:"1. REST API \u4ed5\u69d8\u66f8\u306e\u78ba\u8a8d",id:"1-rest-api-\u4ed5\u69d8\u66f8\u306e\u78ba\u8a8d",level:3},{value:"2. curl \u3067\u547c\u3073\u51fa\u3059",id:"2-curl-\u3067\u547c\u3073\u51fa\u3059",level:3},{value:"3. OpenAI \u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u547c\u3073\u51fa\u3059",id:"3-openai-\u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u547c\u3073\u51fa\u3059",level:3},{value:"4. LangChain \u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u547c\u3073\u51fa\u3059",id:"4-langchain-\u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u547c\u3073\u51fa\u3059",level:3},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",level:2}],c={toc:p},u="wrapper";function m(n){let{components:e,...r}=n;return(0,i.kt)(u,(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Azure OpenAI Service \u3092\u7528\u3044\u305f Function Calling \u3092\u7406\u89e3\u3059\u308b\u305f\u3081\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u884c\u3044\u307e\u3057\u305f\u3002\u521d\u898b\u3067\u306f\u4f55\u3092\u3057\u3066\u3044\u308b\u306e\u304b\u3088\u304f\u308f\u304b\u3089\u306a\u304b\u3063\u305f\u3053\u3068\u3082\u3042\u3063\u305f\u306e\u3067\u3001\u81ea\u5206\u304c\u7406\u89e3\u3057\u3066\u3044\u3063\u305f\u904e\u7a0b\u3092\u307e\u3068\u3081\u3066\u304a\u3044\u3066\u5f8c\u7d9a\u306e\u8ab0\u304b\u306b\u5f79\u306b\u7acb\u3066\u3070\u3068\u601d\u3044\u8db3\u8de1\u3092\u6b8b\u3057\u3066\u304a\u304d\u307e\u3059\u3002  "),(0,i.kt)("p",null,"OpenAI \u56de\u308a\u306e\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306f\u6025\u901f\u306b\u767a\u5c55\u3057\u3066\u3044\u3066\u3001 Function Calling \u306e feature \u81ea\u4f53\u306f OpenAI \u793e\u304c\u6a5f\u80fd\u3092\u516c\u958b\u3057\u3066\u304b\u3089\u3057\u3070\u3089\u304f\u7d4c\u3063\u3066\u3044\u308b\u305f\u3081\u65e2\u306b\u30e9\u30a4\u30d6\u30e9\u30ea\u5074\u3067\u306e\u30b5\u30dd\u30fc\u30c8\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002\u5b9f\u969b\u306e\u30a2\u30d7\u30ea\u958b\u767a\u3067\u306f LangChain, Semantic Kernel, OpenAI \u306a\u3069\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3057\u3066\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3059\u308b\u3053\u3068\u304c\u591a\u3044\u3068\u601d\u3046\u306e\u3067\u3001\u305d\u308c\u3089\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3057\u305f\u5834\u5408\u306e\u5b9f\u88c5\u4f8b\u3082\u4f75\u305b\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30cf\u30f3\u30ba\u30aa\u30f3\u306e\u6982\u8981"},"\u30cf\u30f3\u30ba\u30aa\u30f3\u306e\u6982\u8981"),(0,i.kt)("p",null,"\u4f4e\u5c64\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306e\u7406\u89e3\u304c\u3042\u308b\u3068\u3001\u4e0a\u4f4d\u306e\u30ec\u30a4\u30e4\u30fc\u306e\u5b9f\u88c5\u3092\u8aad\u3080\u969b\u306b\u3082\u5b9f\u88c5\u306e\u30a4\u30e1\u30fc\u30b8\u304c\u3064\u304b\u307f\u3084\u3059\u304f\u3001\u7406\u89e3\u304c\u6df1\u307e\u308b\u3068\u601d\u3044\u307e\u3059\u306e\u3067\u6de1\u3005\u3068\u4f4e\u5c64\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304b\u3089\u5f90\u3005\u306b\u7406\u89e3\u3057\u3066\u3044\u304f\u5f62\u3067\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"REST API \u4ed5\u69d8\u66f8\u306e\u78ba\u8a8d"),(0,i.kt)("li",{parentName:"ol"},"curl \u3067\u547c\u3073\u51fa\u3059"),(0,i.kt)("li",{parentName:"ol"},"OpenAI \u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u547c\u3073\u51fa\u3059"),(0,i.kt)("li",{parentName:"ol"},"LangChain \u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u547c\u3073\u51fa\u3059")),(0,i.kt)("p",null,"\u7279\u306b\u65b0\u3057\u3044\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u89e6\u308b\u5834\u5408\u3001\u4f9d\u5b58\u95a2\u4fc2\u306e\u5c11\u306a\u3044\u9806\u306b\u898b\u3066\u3044\u304f\u3068\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u56fa\u6709\u306e\u632f\u308b\u821e\u3044\u3084\u4e0d\u5177\u5408\u306b\u632f\u308a\u56de\u3055\u308c\u306a\u304f\u3066\u6e08\u3080\u306e\u3067\u3001\u4f4e\u5c64\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304b\u3089\u89e6\u3063\u3066\u3044\u304f\u30b9\u30bf\u30a4\u30eb\u304c\u597d\u304d\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"1-rest-api-\u4ed5\u69d8\u66f8\u306e\u78ba\u8a8d"},"1. REST API \u4ed5\u69d8\u66f8\u306e\u78ba\u8a8d"),(0,i.kt)("p",null,"API \u4ed5\u69d8\u66f8\u304c\u4e00\u6b21\u60c5\u5831\u3068\u306a\u308a\u307e\u3059\u306e\u3067\u3001",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#chat-completions"},"Azure OpenAI Service REST API reference / Chat completions")," \u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u306e\u30ea\u30f3\u30af\u3092\u305f\u3069\u308b\u3068\u3001\u3069\u3046\u3084\u3089 Azure \u306e REST API \u306f GitHub \u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u3067\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference"},"specification/cognitiveservices/data-plane/AzureOpenAI/inference")," \u306b\u5404 API \u30d0\u30fc\u30b8\u30e7\u30f3\u306e OpenAPI \u4ed5\u69d8\u66f8\u304c\u3042\u308a\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u6c17\u306b\u306a\u308b\u7b87\u6240\u3092 blame \u3057\u3066\u5dee\u5206\u306e\u610f\u56f3\u3092\u63a8\u6e2c\u3057\u305f\u308a\u3001\u30b3\u30df\u30c3\u30c8\u30ed\u30b0\u3092\u8aad\u3093\u3067\u5909\u66f4\u306e\u7d4c\u7def\u3092\u78ba\u8a8d\u3057\u305f\u308a\u3059\u308b\u3068\u5473\u308f\u3044\u6df1\u3044\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u4eca\u56de\u6ce8\u76ee\u3059\u308b\u306e\u306f\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/blob/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-07-01-preview/generated.json"},"2023-07-01-preview")," \u306e\u4ed5\u69d8\u3067\u3059\u3002json \u3060\u3068\u898b\u3065\u3089\u3044\u306e\u3067\u3001\u79c1\u306f ",(0,i.kt)("a",{parentName:"p",href:"https://petstore.swagger.io/"},"Swagger UI \u306e demo \u30b5\u30a4\u30c8")," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3001\u5165\u529b\u30d5\u30a9\u30fc\u30e0\u306b OpenAPI spec \u306e\u4ed5\u69d8\u66f8\u306e URL ",(0,i.kt)("inlineCode",{parentName:"p"},"https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-07-01-preview/generated.json")," \u3092\u8cbc\u308a\u4ed8\u3051\u3066\u30d6\u30e9\u30a6\u30b6\u3067\u78ba\u8a8d\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30b9\u30ad\u30fc\u30de\u3092\u78ba\u8a8d\u3059\u308b\u3068\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"POST /deployments/{deploymentId}/chat/completions")," \u306e\u30ea\u30af\u30a8\u30b9\u30c8 body \u306b ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," \u306a\u308b\u30b9\u30ad\u30fc\u30de\u304c\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"schema",src:t(6499).Z,width:"1051",height:"989"})),(0,i.kt)("h3",{id:"2-curl-\u3067\u547c\u3073\u51fa\u3059"},"2. curl \u3067\u547c\u3073\u51fa\u3059"),(0,i.kt)("p",null,"\u4ed5\u69d8\u3092\u78ba\u8a8d\u3067\u304d\u305f\u306e\u3067\u3001\u6b21\u306f\u5b9f\u969b\u306b Azure OpenAI Service \u306e\u30ea\u30bd\u30fc\u30b9\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u3066\u53e9\u3044\u3066\u307f\u307e\u3059\u3002",(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/azure-ai-services-blog/function-calling-is-now-available-in-azure-openai-service/ba-p/3879241"},"Function calling is now available in Azure OpenAI Service")," \u3092\u8aad\u3080\u3068\u3001"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Function calling is now available in Azure OpenAI Service and gives the latest 0613 versions of gpt-35-turbo and gpt-4 the ability to produce structured JSON outputs based on functions that you describe in the request.")),(0,i.kt)("p",null,"\u3068\u306e\u3053\u3068\u306a\u306e\u3067\u3001\u3053\u3053\u3067\u306f gpt-35-turbo \u306e 0613 \u30e2\u30c7\u30eb\u3092\u4f7f\u3063\u3066\u307f\u307e\u3059\u3002 \u9069\u5f53\u306a\u95a2\u6570\u306e\u4f8b\u3082\u6b32\u3057\u304b\u3063\u305f\u306e\u3067\u3001",(0,i.kt)("a",{parentName:"p",href:"https://openai.com/blog/function-calling-and-other-api-updates"},"Function calling and other API updates")," \u306b\u63b2\u8f09\u3055\u308c\u3066\u3044\u308b\u30b5\u30f3\u30d7\u30eb\u3092\u53c2\u8003\u306b\u3057\u3066\u307f\u307e\u3059\u3002"),(0,i.kt)("p",null,"API \u3092\u53e9\u304f\u65b9\u6cd5\u306f\u8272\u3005\u3042\u308a\u307e\u3059\u3002Postman \u3068\u304b\u3082\u4fbf\u5229\u3067\u826f\u3044\u3068\u601d\u3044\u307e\u3059\u304c\u3001\u4eca\u56de\u306f\u30b7\u30e5\u30c3\u3068\u624b\u65e9\u304f\u78ba\u8a8d\u3057\u305f\u3044\u3060\u3051\u306a\u306e\u3067\u3001curl \u3067\u4ee5\u4e0b\u306e\u901a\u308a\u53e9\u3044\u3066\u307f\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# Set variables\nAOAI_NAME="your-aoai-name"\nAOAI_DEPLOYMENT_ID="your-deployment-id"\nAOAI_API_KEY="your-aoai-api-key"\n\n\u276f curl -s "https://${AOAI_NAME}.openai.azure.com/openai/deployments/${AOAI_DEPLOYMENT_ID}/chat/completions?api-version=2023-07-01-preview" \\\n    -H "api-key: $AOAI_API_KEY" \\\n    -H \'Content-Type: application/json\' -d \'{\n  "model": "gpt-3.5-turbo-0613",\n  "messages": [\n    {"role": "user", "content": "What is the weather like in Boston?"}\n  ],\n  "functions": [\n    {\n      "name": "get_current_weather",\n      "description": "Get the current weather in a given location",\n      "parameters": {\n        "type": "object",\n        "properties": {\n          "location": {\n            "type": "string",\n            "description": "The city and state, e.g. San Francisco, CA"\n          },\n          "unit": {\n            "type": "string",\n            "enum": ["celsius", "fahrenheit"]\n          }\n        },\n        "required": ["location"]\n      }\n    }\n  ]\n}\' | jq -r .\n{\n  "id": "chatcmpl-7fN4Um1D4qgK4wqBIkm0i0ZQI3W4H",\n  "object": "chat.completion",\n  "created": 1690094490,\n  "model": "gpt-35-turbo",\n  "prompt_annotations": [\n    {\n      "prompt_index": 0,\n      "content_filter_results": {\n        "hate": {\n          "filtered": false,\n          "severity": "safe"\n        },\n        "self_harm": {\n          "filtered": false,\n          "severity": "safe"\n        },\n        "sexual": {\n          "filtered": false,\n          "severity": "safe"\n        },\n        "violence": {\n          "filtered": false,\n          "severity": "safe"\n        }\n      }\n    }\n  ],\n  "choices": [\n    {\n      "index": 0,\n      "finish_reason": "function_call",\n      "message": {\n        "role": "assistant",\n        "function_call": {\n          "name": "get_current_weather",\n          "arguments": "{\\n\\"location\\": \\"Boston, MA\\"\\n}"\n        }\n      },\n      "content_filter_results": {}\n    }\n  ],\n  "usage": {\n    "completion_tokens": 17,\n    "prompt_tokens": 82,\n    "total_tokens": 99\n  }\n}\n')),(0,i.kt)("p",null,"\u4f55\u3089\u304b\u306e\u30a8\u30e9\u30fc\u304c\u3067\u305f\u5834\u5408\u306f\u8a73\u7d30\u306a\u52d5\u4f5c\u3092\u898b\u308b\u305f\u3081\u306b\u3001verbose \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4ed8\u3051\u308b\u3068\u6319\u52d5\u306e\u8a73\u7d30\u304c\u8ffd\u3048\u307e\u3059\u306e\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"-vvv")," \u3092\u4ed8\u3051\u3066 deep dive \u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u30ec\u30b9\u30dd\u30f3\u30b9\u3092\u898b\u305f\u3068\u3053\u308d\u3001Function Calling \u306f API \u30b5\u30fc\u30d0\u30fc\u5074\u3067 Function \u3092 call \u3057\u3066\u304f\u308c\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3066\u3001Function \u306e\u30b7\u30b0\u30cd\u30c1\u30e3\u3068\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u5185\u5bb9\u3092 LLM \u306b\u6e21\u3059\u3068\u3001\u305d\u306e\u60c5\u5831\u3092\u5143\u306b\u547c\u3073\u51fa\u3059\u3079\u304d Function (\u3068\u305d\u306e\u5f15\u6570\u306e\u5024)\u3092 suggest \u3057\u3066\u304f\u308c\u308b\u3001\u3068\u3044\u3063\u305f\u611f\u3058\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u4f8b\u3067\u306f\u3001\u73fe\u5728\u306e\u5929\u6c17\u3092\u53d6\u5f97\u3059\u308b ",(0,i.kt)("inlineCode",{parentName:"p"},"get_current_weather")," \u306a\u308b\u95a2\u6570\u3092\u5b9a\u7fa9\u3057\u3066\u3001\u30dc\u30b9\u30c8\u30f3\u306e\u5929\u6c17\u3092\u805e\u304f\u8cea\u554f\u6587\u3092\u6dfb\u3048\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\n\u30ec\u30b9\u30dd\u30f3\u30b9\u306e\u4e2d\u306b ",(0,i.kt)("inlineCode",{parentName:"p"},"choices")," \u3068\u3044\u3046\u30ad\u30fc\u304c\u3042\u308a\u3001\u305d\u306e\u4e2d\u306b ",(0,i.kt)("inlineCode",{parentName:"p"},"finish_reason")," \u304c ",(0,i.kt)("inlineCode",{parentName:"p"},"function_call")," \u3068\u306a\u3063\u3066\u3044\u308b\u306e\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"get_current_weather")," \u3068\u3044\u3046\u95a2\u6570\u3092\u3069\u3093\u306a\u5f15\u6570\u3092\u6dfb\u3048\u3066\u547c\u3073\u51fa\u3059\u3079\u304d\u304b\u3092\u8fd4\u3057\u3066\u304f\u308c\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u81ea\u5206\u304c\u6700\u521d\u52d8\u9055\u3044\u3057\u3066\u3044\u305f\u306e\u3067\u7e70\u308a\u8fd4\u3057\u66f8\u304d\u307e\u3059\u304c\u3001Function Calling \u306f\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u81ea\u4f53\u306f\u3084\u3063\u3066\u304a\u3089\u305a\u3001\u3042\u304f\u307e\u3067\u547c\u3073\u51fa\u3059\u3079\u304d\u95a2\u6570\u547c\u3073\u51fa\u3057\u306e\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u308c\u3066\u3044\u308b\u5f62\u306b\u306a\u308a\u3001\u305d\u306e\u95a2\u6570\u3092\u547c\u3076\u304b\u5426\u304b\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u5074\u306e\u88c1\u91cf\u6b21\u7b2c\u3068\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u7d50\u5c40\u3053\u308c\u3001\u4f55\u304c\u5b09\u3057\u3044\u306e\uff1f\u3063\u3066\u3068\u3053\u308d\u3067\u3059\u304c\u3001\u30b7\u30b9\u30c6\u30e0\u9593\u9023\u643a\u306e\u5b9f\u88c5\u304c\u5927\u5206\u697d\u306b\u306a\u3063\u3066\u5b89\u5b9a\u6027\u3082\u4e0a\u304c\u308b\u70b9\u304c\u7269\u51c4\u304f\u5b09\u3057\u3044\u30dd\u30a4\u30f3\u30c8\u304b\u3068\u601d\u3044\u307e\u3059\u3002\u4eca\u307e\u3067\u306f\u30b7\u30b9\u30c6\u30e0\u9593\u9023\u643a\u3092 LLM \u3068\u5b9f\u65bd\u3059\u308b\u969b\u306b\u4e00\u751f\u61f8\u547d\u300c\u3053\u3093\u306a json \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u8fd4\u3057\u3066\u304f\u308c\u300d\u3001\u307f\u305f\u3044\u306a\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u66f8\u3044\u3066\u3001\u5e30\u3063\u3066\u304d\u305f\u6587\u5b57\u5217\u3092 validation \u3057\u3066 parse \u3057\u3066\u3001\u53d6\u5f97\u3057\u305f json \u3092\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u306b\u6e21\u3057\u3066\u3001\u3001\u307f\u305f\u3044\u306a\u82e6\u52b4\u304c\u3042\u308a\u307e\u3057\u305f\u3002\n\u3053\u3046\u3057\u305f\u82e6\u52b4\u304c\u3059\u3079\u3066\u7dba\u9e97\u306b LLM \u5074\u306e Function Calling \u3067\u7f6e\u304d\u63db\u3048\u3089\u308c\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u306e\u3067\u3001\u30a2\u30d7\u30ea\u306e\u5b9f\u88c5\u306f\u7c21\u7d20\u306b\u306a\u308a\u3001\u3055\u3089\u306b\u30a2\u30d7\u30ea\u306e\u5b89\u5b9a\u6027\u3082\u5897\u3059\u30e1\u30ea\u30c3\u30c8\u304c\u3067\u3066\u304d\u307e\u3057\u305f\u3002\u30b7\u30b9\u30c6\u30e0\u9593\u9023\u643a\u3092\u3059\u308b\u5834\u5408\u306b\u306f\u305c\u3072\u5229\u7528\u3059\u3079\u304d\u6a5f\u80fd\u3060\u3068\u601d\u3044\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"3-openai-\u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u547c\u3073\u51fa\u3059"},"3. OpenAI \u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u547c\u3073\u51fa\u3059"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure-Samples/openai/blob/main/Basic_Samples/Functions/working_with_functions.ipynb"},"Working with functions in Azure OpenAI")," \u304c\u3068\u3066\u3082\u53c2\u8003\u306b\u306a\u308a\u307e\u3059\u3002\n\u4e0a\u8a18\u306e curl \u306e\u4f8b\u3068\u540c\u3058\u51e6\u7406\u3092 OpenAI \u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u5b9f\u88c5\u3059\u308b\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def get_function_call(messages, function_call = "auto"):\n    # Define the functions to use\n    functions = [\n        {\n            "name": "get_current_weather",\n            "description": "Get the current weather in a given location",\n            "parameters": {\n                "type": "object",\n                "properties": {\n                    "location": {\n                        "type": "string",\n                        "description": "The city and state, e.g. San Francisco, CA",\n                    },\n                    "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},\n                },\n                "required": ["location"],\n            },\n        },\n    ]\n\n    # Call the model with the user query (messages) and the functions defined in the functions parameter\n    response = openai.ChatCompletion.create(\n        deployment_id = deployment_id,\n        messages=messages,\n        functions=functions,\n        function_call=function_call, \n    )\n\n    return response\n')),(0,i.kt)("p",null,"\u306a\u306b\u3084\u3089 ",(0,i.kt)("inlineCode",{parentName:"p"},"functions")," \u306a\u308b\u5de8\u5927\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u767b\u5834\u3057\u307e\u3057\u305f\u304c\u3001\u3053\u308c\u304c\u95a2\u6570\u306e\u8aac\u660e\u306b\u306a\u308a\u307e\u3059\u3002\u30b9\u30ad\u30fc\u30de\u3082 API \u306e\u4ed5\u69d8\u306b\u5408\u308f\u305b\u308b\u5fc5\u8981\u304c\u3042\u308b\u306e\u3067\u82e5\u5e72\u6ce8\u610f\u3092\u8981\u3057\u307e\u3059\u3002\n\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u95a2\u6570\u306e suggest \u307e\u3067\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u6b21\u306f suggest \u3055\u308c\u305f\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u9069\u5207\u306a\u56de\u7b54\u3092\u5f97\u308b\u30b3\u30fc\u30c9\u30b9\u30cb\u30da\u30c3\u30c8\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def run_multiturn_conversation(messages, functions, available_functions, deployment_id):\n    # Step 1: send the conversation and available functions to GPT\n\n    response = openai.ChatCompletion.create(\n        deployment_id=deployment_id,\n        messages=messages,\n        functions=functions,\n        function_call="auto", \n        temperature=0\n    )\n\n    # Step 2: check if GPT wanted to call a function\n    while response["choices"][0]["finish_reason"] == \'function_call\':\n        response_message = response["choices"][0]["message"]\n        print("Recommended Function call:")\n        print(response_message.get("function_call"))\n        print()\n        \n        # Step 3: call the function\n        # Note: the JSON response may not always be valid; be sure to handle errors\n        \n        function_name = response_message["function_call"]["name"]\n        \n        # verify function exists\n        if function_name not in available_functions:\n            return "Function " + function_name + " does not exist"\n        function_to_call = available_functions[function_name]  \n        \n        # verify function has correct number of arguments\n        function_args = json.loads(response_message["function_call"]["arguments"])\n        if check_args(function_to_call, function_args) is False:\n            return "Invalid number of arguments for function: " + function_name\n        function_response = function_to_call(**function_args)\n        \n        print("Output of function call:")\n        print(function_response)\n        print()\n        \n        # Step 4: send the info on the function call and function response to GPT\n        \n        # adding assistant response to messages\n        messages.append(\n            {\n                "role": response_message["role"],\n                "name": response_message["function_call"]["name"],\n                "content": response_message["function_call"]["arguments"],\n            }\n        )\n\n        # adding function response to messages\n        messages.append(\n            {\n                "role": "function",\n                "name": function_name,\n                "content": function_response,\n            }\n        )  # extend conversation with function response\n\n        print("Messages in next request:")\n        for message in messages:\n            print(message)\n        print()\n\n        response = openai.ChatCompletion.create(\n            messages=messages,\n            deployment_id=deployment_id,\n            function_call="auto",\n            functions=functions,\n            temperature=0\n        )  # get a new response from GPT where it can see the function response\n\n    return response\n')),(0,i.kt)("p",null,"suggest \u3055\u308c\u305f\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3001\u305d\u306e\u7d50\u679c\u3092 prompt \u306b\u8ffd\u52a0\u3057\u3001OpenAPI \u3092\u547c\u3073\u51fa\u3059\u51e6\u7406\u3092\u3072\u305f\u3059\u3089\u7e70\u308a\u8fd4\u3057\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"finish_reason")," \u304c ",(0,i.kt)("inlineCode",{parentName:"p"},"function_call")," \u3067\u306a\u304f\u306a\u3063\u305f\u3089\u3088\u3046\u3084\u304f\u56de\u7b54\u3092\u5f97\u308b\u3001\u3068\u3044\u3046\u6d41\u308c\u306b\u306a\u308a\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5b9f\u88c5\u306e\u30a4\u30e1\u30fc\u30b8\u306f\u3053\u308c\u3067\u5927\u4f53\u7406\u89e3\u3067\u304d\u307e\u3057\u305f\u3002"),(0,i.kt)("h3",{id:"4-langchain-\u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u547c\u3073\u51fa\u3059"},"4. LangChain \u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u547c\u3073\u51fa\u3059"),(0,i.kt)("p",null,"OpenAI \u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u95a2\u6570\u3092\u767b\u9332\u3059\u308b\u969b\u306b\u6b63\u76f4\u3057\u3093\u3069\u3044\u3068\u601d\u3046\u30dd\u30a4\u30f3\u30c8\u304c 2 \u3064\u3042\u308a\u307e\u3057\u305f\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u95a2\u6570\u306e\u8aac\u660e\u306e\u305f\u3081\u306e json \u304a\u5316\u3051\u307f\u305f\u3044\u306a\u3082\u306e\u4f5c\u308b"),(0,i.kt)("li",{parentName:"ol"},"suggest \u3055\u308c\u305f\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u56de\u7b54\u3092\u5f97\u308b\u307e\u3067\u306e\u7e70\u308a\u8fd4\u3057\u51e6\u7406")),(0,i.kt)("p",null,"1 \u306f\u578b\u306e\u5236\u7d04\u306a\u3069\u3082\u639b\u3051\u3089\u308c\u306a\u3044\u3067\u3059\u3057\u3001\u6b63\u76f4\u306b\u8a00\u3046\u3068\u3042\u307e\u308a\u66f8\u304d\u305f\u304f\u306a\u3044\u6c17\u6301\u3061\u306b\u306a\u308a\u307e\u3059\u30022 \u306f\u7d50\u679c\u3092\u5f97\u308b\u307e\u3067\u306e\u30eb\u30fc\u30d7\u51e6\u7406\u3092\u30a2\u30d7\u30ea\u5074\u306e\u30b3\u30fc\u30c9\u306b\u4ed5\u8fbc\u3080\u306e\u306f\u9762\u5012\u3067\u3059\u3002\n\u5c0f\u898f\u6a21\u306a\u30b5\u30f3\u30d7\u30eb\u3060\u3068\u3053\u306e\u3042\u305f\u308a\u3092\u30b3\u30d4\u30da\u3067\u6e08\u307e\u305b\u308b\u3053\u3068\u306f\u591a\u3044\u3068\u601d\u3046\u306e\u3067\u3059\u304c\u3001\u5c06\u6765\u7684\u306b\u30d7\u30ed\u30c0\u30af\u30c8\u306e\u30b3\u30fc\u30c9\u306b\u7d44\u307f\u8fbc\u3080\u5834\u5408\u306f\u3001\u30e9\u30a4\u30d6\u30e9\u30ea\u5074\u3067\u5438\u53ce\u3057\u3066\u304f\u308c\u308b\u3068\u5b09\u3057\u3044\u3067\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u3053\u3067\u306f\u4f8b\u3068\u3057\u3066\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/langchain-ai/langchain"},"LangChain")," \u3067\u306e\u5b9f\u88c5\u3092\u898b\u3066\u307f\u307e\u3059\u3002Release note \u3092\u307f\u305f\u3068\u3053\u308d\u3001",(0,i.kt)("a",{parentName:"p",href:"https://github.com/langchain-ai/langchain/releases/tag/v0.0.200"},"v0.0.200")," \u6642\u70b9\u3067\u65e2\u306b\u5165\u3063\u3066\u3044\u305f\u3088\u3046\u3067\u958b\u767a\u306e\u65e9\u3055\u304c\u4f3a\u3048\u307e\u3059\u3002"),(0,i.kt)("p",null,"Azure OpenAI Service \u3092\u5229\u7528\u3057\u3066\u3001LangChain \u3092\u5229\u7528\u3057\u305f\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'import logging\nimport os\n\nimport openai\nfrom dotenv import load_dotenv\nfrom langchain import LLMMathChain\nfrom langchain.agents import AgentType, Tool, initialize_agent\nfrom langchain.chat_models import ChatOpenAI\n\ndotenv_path = os.path.join(".", ".env")\nload_dotenv(dotenv_path)\n\nOPENAI_DEPLOYMENT_ID = os.getenv("OPENAI_DEPLOYMENT_ID")\nOPENAI_API_KEY = os.getenv("OPENAI_API_KEY")\nOPENAI_API_BASE = os.getenv("OPENAI_API_BASE")\n\nopenai.api_type = "azure"\nopenai.api_key = OPENAI_API_KEY\nopenai.api_base = OPENAI_API_BASE\nopenai.api_version = "2023-07-01-preview"\n\n\nif __name__ == "__main__":\n    llm = ChatOpenAI(\n        model_name="gpt-35-turbo",\n        temperature=0,\n        model_kwargs={"deployment_id": OPENAI_DEPLOYMENT_ID},\n    )\n\n    tools = [\n        Tool(\n            name="Calculator",\n            func=LLMMathChain.from_llm(llm=llm, verbose=True).run,\n            description="\u6570\u7406\u8a08\u7b97\u306e\u7d50\u679c\u3092\u8fd4\u3057\u307e\u3059",\n        ),\n    ]\n\n    agent = initialize_agent(\n        tools=tools, llm=llm, agent=AgentType.OPENAI_FUNCTIONS, verbose=True\n    )\n\n    for request in [\n        "1955\u5e7410\u670828\u65e5\u306f2023\u5e747\u670824\u65e5\u306e\u4f55\u65e5\u524d\u3067\u3059\u304b\uff1f",\n    ]:\n        logging.debug(agent.run(request))\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".env"',title:'".env"'},'# OpenAI API\nOPENAI_DEPLOYMENT_ID="YOUR_AOAI_DEPLOYMENT_ID"\nOPENAI_API_BASE="https://YOUR_AOAI_NAME.openai.azure.com/"\nOPENAI_API_KEY="YOUR_AOAI_API_KEY"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="requirements.txt"',title:'"requirements.txt"'},"aiohttp==3.8.5\naiosignal==1.3.1\nasync-timeout==4.0.2\nattrs==23.1.0\ncertifi==2023.7.22\ncharset-normalizer==3.2.0\ndataclasses-json==0.5.13\nfrozenlist==1.4.0\ngreenlet==2.0.2\nidna==3.4\nlangchain==0.0.242\nlangsmith==0.0.14\nmarshmallow==3.20.1\nmultidict==6.0.4\nmypy-extensions==1.0.0\nnumexpr==2.8.4\nnumpy==1.25.1\nopenai==0.27.8\nopenapi-schema-pydantic==1.2.4\npackaging==23.1\npydantic==1.10.12\npython-dotenv==1.0.0\nPyYAML==6.0.1\nrequests==2.31.0\nSQLAlchemy==2.0.19\ntenacity==8.2.2\ntqdm==4.65.0\ntyping-inspect==0.9.0\ntyping_extensions==4.7.1\nurllib3==2.0.4\nyarl==1.9.2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ python main.py\n\n\n> Entering new AgentExecutor chain...\n\nInvoking: `Calculator` with `2023\u5e747\u670824\u65e5 - 1955\u5e7410\u670828\u65e5`\n\n\n\n\n> Entering new LLMMathChain chain...\n2023\u5e747\u670824\u65e5 - 1955\u5e7410\u670828\u65e5\\```text\n(2023 * 365 + 7 * 30 + 24) - (1955 * 365 + 10 * 30 + 28)\n\\```\n...numexpr.evaluate("(2023 * 365 + 7 * 30 + 24) - (1955 * 365 + 10 * 30 + 28)")...\n\nAnswer: 24726\n> Finished chain.\nAnswer: 247261955\u5e7410\u670828\u65e5\u304b\u30892023\u5e747\u670824\u65e5\u307e\u3067\u306e\u65e5\u6570\u306f\u300124726\u65e5\u3067\u3059\u3002\n\n> Finished chain.\n')),(0,i.kt)("p",null,"(\u8a08\u7b97\u306f\u9593\u9055\u3063\u3066\u3044\u307e\u3059\u304c...) \u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u3068\u56de\u7b54\u306e\u53d6\u5f97\u307e\u3067\u306e\u51e6\u7406\u304c\u30e9\u30a4\u30d6\u30e9\u30ea\u5074\u3067\u5438\u53ce\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u4eca\u56de\u306f\u65e2\u5b58\u306e\u6570\u5024\u8a08\u7b97\u7528\u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"LLMMathChain")," \u3092\u5229\u7528\u3057\u307e\u3057\u305f\u304c\u3001LangChain \u3067\u306f\u30ab\u30b9\u30bf\u30e0\u306e Tool \u3092\u5b9f\u88c5\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\n",(0,i.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/modules/agents/tools/custom_tools"},"Defining Custom Tools"),"\u3092\u8aad\u3080\u3068\u30ab\u30b9\u30bf\u30e0\u30c4\u30fc\u30eb\u306e\u5b9f\u88c5\u65b9\u6cd5\u304c\u7406\u89e3\u3067\u304d\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","Agent \u306b Tool \u3092\u4ed8\u3051\u8db3\u3059\u5f62\u3067\u306e\u5b9f\u88c5\u304c\u3067\u304d\u308b\u306e\u3067\u3001\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u3068\u306e\u9023\u643a\u3082\u7c21\u5358\u306b\u5b9f\u88c5\u3067\u304d\u305d\u3046\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),(0,i.kt)("p",null,"\u4eca\u56de\u306f Azure OpenAI Service \u306e Function Calling \u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u884c\u3044\u307e\u3057\u305f\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","Function Calling \u306f\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u81ea\u4f53\u306f\u3084\u3063\u3066\u304a\u3089\u305a\u3001\u3042\u304f\u307e\u3067\u547c\u3073\u51fa\u3059\u3079\u304d\u95a2\u6570\u547c\u3073\u51fa\u3057\u306e\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u308c\u3066\u3044\u308b\u5f62\u306b\u306a\u308a\u3001\u305d\u306e\u95a2\u6570\u3092\u547c\u3076\u304b\u5426\u304b\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30a2\u30d7\u30ea\u5074\u306e\u88c1\u91cf\u6b21\u7b2c\u3068\u306a\u308a\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u30b7\u30b9\u30c6\u30e0\u9593\u9023\u643a\u306e\u5b9f\u88c5\u304c\u5927\u5206\u697d\u306b\u306a\u3063\u3066\u5b89\u5b9a\u6027\u3082\u4e0a\u304c\u308b\u70b9\u304c\u7269\u51c4\u304f\u5b09\u3057\u3044\u30dd\u30a4\u30f3\u30c8\u304b\u3068\u601d\u3044\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u547c\u3073\u51fa\u3057\u56de\u308a\u306e\u5b9f\u88c5\u306f\u8907\u96d1\u5316\u3057\u3084\u3059\u304f\u306a\u308b\u306e\u3067\u3001\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u89b3\u70b9\u3067\u3059\u3068\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u5229\u7528\u3059\u308b\u306a\u3069\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0},6499:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/schema-b7faad6a61413e4ddc36040e8bfdecae.png"}}]);
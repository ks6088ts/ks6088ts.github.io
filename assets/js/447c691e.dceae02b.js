"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[3271],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(t),h=a,g=u["".concat(p,".").concat(h)]||u[h]||m[h]||s;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const s={slug:"handson-rag-app",title:"RAG \u30a2\u30d7\u30ea\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\uff1aAzure OpenAI Service \u3068 Bing Search API \u306e\u6d3b\u7528\u6cd5",authors:"ks6088ts",tags:["azure","app-service","azure-openai-service"]},i=void 0,o={permalink:"/blog/handson-rag-app",source:"@site/blog/2024-02-05-handson-rag-app.md",title:"RAG \u30a2\u30d7\u30ea\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\uff1aAzure OpenAI Service \u3068 Bing Search API \u306e\u6d3b\u7528\u6cd5",description:"\u672c\u8a18\u4e8b\u3067\u306f Azure OpenAI Service \u3068 Bing Search API \u3092\u5229\u7528\u3057\u3066\u3001\u624b\u3063\u53d6\u308a\u65e9\u304f RAG \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002",date:"2024-02-05T00:00:00.000Z",formattedDate:"2024\u5e742\u67085\u65e5",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"app-service",permalink:"/blog/tags/app-service"},{label:"azure-openai-service",permalink:"/blog/tags/azure-openai-service"}],readingTime:8.72,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"handson-rag-app",title:"RAG \u30a2\u30d7\u30ea\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\uff1aAzure OpenAI Service \u3068 Bing Search API \u306e\u6d3b\u7528\u6cd5",authors:"ks6088ts",tags:["azure","app-service","azure-openai-service"]},nextItem:{title:"Microsoft Graph API \u95a2\u9023\u60c5\u5831\u306e\u307e\u3068\u3081",permalink:"/blog/graph-api-summary"}},p={authorsImageUrls:[void 0]},c=[{value:"Azure OpenAI Service \u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3059\u308b",id:"azure-openai-service-\u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3059\u308b",level:2},{value:"curl",id:"curl",level:3},{value:"Python",id:"python",level:3},{value:"Bing Search API \u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3059\u308b",id:"bing-search-api-\u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3059\u308b",level:2},{value:"curl",id:"curl-1",level:3},{value:"Python",id:"python-1",level:3},{value:"RAG \u30a2\u30d7\u30ea\u306e\u4f5c\u6210",id:"rag-\u30a2\u30d7\u30ea\u306e\u4f5c\u6210",level:2}],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8a18\u4e8b\u3067\u306f Azure OpenAI Service \u3068 Bing Search API \u3092\u5229\u7528\u3057\u3066\u3001\u624b\u3063\u53d6\u308a\u65e9\u304f RAG \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"azure-openai-service-\u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3059\u308b"},"Azure OpenAI Service \u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3059\u308b"),(0,a.kt)("p",null,"Azure OpenAI Service \u306e\u5916\u90e8\u4ed5\u69d8\u3068\u3057\u3066\u3001 OpenAPI \u3067\u66f8\u304b\u308c\u305f\u4ed5\u69d8\u66f8\u304c GitHub \u306e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference"},"specification/cognitiveservices/data-plane/AzureOpenAI/inference")," \u3067\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"API \u30d0\u30fc\u30b8\u30e7\u30f3\u3054\u3068\u306b\u4ed5\u69d8\u306f\u5225\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u5b9a\u7fa9\u3055\u308c\u3066\u304a\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"2023-12-01-preview")," \u3067\u3059\u3068 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/blob/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-12-01-preview/inference.json"},"specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-12-01-preview/inference.json"),"\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://petstore.swagger.io/"},"Swagger UI")," \u306e\u30c7\u30e2\u30b5\u30a4\u30c8\u306b Azure OpenAI Service \u306e\u4ed5\u69d8\u3092\u8aad\u307f\u8fbc\u307e\u305b\u308b\u3053\u3068\u3067\u3001API \u306e\u4ed5\u69d8\u3092\u30b0\u30e9\u30d5\u30a3\u30ab\u30eb\u306b\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\nOpenAPI \u4ed5\u69d8\u66f8\u306e JSON \u30d5\u30a1\u30a4\u30eb\u306f GitHub \u4e0a\u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"Raw")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-12-01-preview/inference.json")," \u3092 Swagger UI \u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"Explore")," \u30dc\u30bf\u30f3\u306b\u5165\u529b\u3059\u308b\u3053\u3068\u3067\u3001API \u306e\u4ed5\u69d8\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"curl"},"curl"),(0,a.kt)("p",null,"\u5916\u90e8\u4ed5\u69d8\u304c\u78ba\u8a8d\u51fa\u6765\u305f\u3089 curl \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066 API \u3092\u53e9\u3044\u3066\u307f\u307e\u3059\u3002\n\u307e\u305a curl \u3067\u78ba\u8a8d\u3059\u308b\u7406\u7531\u306f\u3001API \u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3059\u308b\u305f\u3081\u3067\u3059\u3002API \u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3059\u308b\u3053\u3068\u3067\u3001API \u306e\u6319\u52d5\u3092\u7406\u89e3\u3057\u3001\u305d\u308c\u306b\u5408\u308f\u305b\u305f\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u4ee5\u4e0b\u306e\u901a\u308a\u3001\u4f5c\u6210\u3057\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3057\u3066 API Key \u3084\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u6307\u5b9a\u3057\u3066\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u9001\u4fe1\u3059\u308b\u3068\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u3063\u3066\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'YOUR_AOAI_NAME="your-aoai-name"\nYOUR_DEPLOYMENT_ID="your-deployment-id"\nYOUR_API_KEY="your-api-key"\n\n\u276f curl -X \'POST\' \\\n    "https://$YOUR_AOAI_NAME.openai.azure.com/openai/deployments/$YOUR_DEPLOYMENT_ID/chat/completions?api-version=2023-12-01-preview" \\\n    -H \'accept: application/json\' \\\n    -H "api-key: $YOUR_API_KEY" \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n  "model": "gpt-3.5-turbo-0613",\n  "messages": [\n    {"role": "user", "content": "What is the weather like in Boston?"}\n  ],\n  "functions": [\n    {\n      "name": "get_current_weather",\n      "description": "Get the current weather in a given location",\n      "parameters": {\n        "type": "object",\n        "properties": {\n          "location": {\n            "type": "string",\n            "description": "The city and state, e.g. San Francisco, CA"\n          },\n          "unit": {\n            "type": "string",\n            "enum": ["celsius", "fahrenheit"]\n          }\n        },\n        "required": ["location"]\n      }\n    }\n  ]\n}\' | jq -r .\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100  1328  100   691  100   637    661    609  0:00:01  0:00:01 --:--:--  1272\n{\n  "id": "chatcmpl-8omgaCZuZzd91sW7xZK9tp7tKmGN6",\n  "object": "chat.completion",\n  "created": 1707114240,\n  "model": "gpt-35-turbo",\n  "prompt_filter_results": [\n    {\n      "prompt_index": 0,\n      "content_filter_results": {\n        "hate": {\n          "filtered": false,\n          "severity": "safe"\n        },\n        "self_harm": {\n          "filtered": false,\n          "severity": "safe"\n        },\n        "sexual": {\n          "filtered": false,\n          "severity": "safe"s\n        },\n        "violence": {\n          "filtered": false,\n          "severity": "safe"\n        }\n      }\n    }\n  ],\n  "choices": [\n    {\n      "finish_reason": "function_call",\n      "index": 0,\n      "message": {\n        "role": "assistant",\n        "function_call": {\n          "name": "get_current_weather",\n          "arguments": "{\\"location\\":\\"Boston, MA\\"}"\n        }\n      },\n      "content_filter_results": {}\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 82,\n    "completion_tokens": 17,\n    "total_tokens": 99\n  },\n  "system_fingerprint": "fp_68a7d165bf"\n}\n')),(0,a.kt)("h3",{id:"python"},"Python"),(0,a.kt)("p",null,"OpenAI \u793e\u304c\u63d0\u4f9b\u3059\u308b Python \u30e9\u30a4\u30d6\u30e9\u30ea ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openai/openai-python"},"openai/openai-python")," \u3092\u4f7f\u3063\u3066\u3001Python \u304b\u3089 Azure OpenAI Service \u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/ai-services/openai/how-to/switching-endpoints"},"Python \u3092\u4f7f\u7528\u3057\u3066 OpenAI \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068 Azure OpenAI \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u5207\u308a\u66ff\u3048\u308b\u65b9\u6cd5"),"\u3092\u53c2\u8003\u306b\u3001\u4ee5\u4e0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3001Azure OpenAI Service \u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="aoai.py"',title:'"aoai.py"'},'import os\nfrom openai import AzureOpenAI\n\nclient = AzureOpenAI(\n    api_key=os.getenv("YOUR_API_KEY"),\n    api_version="2023-12-01-preview",\n    azure_endpoint=os.getenv("YOUR_AOAI_ENDPOINT"),\n)\n\nchat_completion = client.chat.completions.create(\n    model="gpt-35-turbo",\n    messages=[\n        {"role": "system", "content": "\u3042\u306a\u305f\u306f\u512a\u79c0\u306a\u30d8\u30eb\u30d7\u30c7\u30b9\u30af\u30dc\u30c3\u30c8\u3067\u3059\u3002"},\n    ],\n)\n\nprint(chat_completion)\n')),(0,a.kt)("p",null,"\u5b9f\u884c\u7d50\u679c\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f python aoai.py\nChatCompletion(id='chatcmpl-8opmh8NPylnqJTdEpkYSeoLGDcHXo', choices=[Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01\u4f55\u304b\u304a\u624b\u4f1d\u3044\u3067\u304d\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u3059\u304b\uff1f', role='assistant', function_call=None, tool_calls=None), content_filter_results={'hate': {'filtered': False, 'severity': 'safe'}, 'self_harm': {'filtered': False, 'severity': 'safe'}, 'sexual': {'filtered': False, 'severity': 'safe'}, 'violence': {'filtered': False, 'severity': 'safe'}})], created=1707126151, model='gpt-35-turbo', object='chat.completion', system_fingerprint='fp_68a7d165bf', usage=CompletionUsage(completion_tokens=20, prompt_tokens=29, total_tokens=49), prompt_filter_results=[{'prompt_index': 0, 'content_filter_results': {'hate': {'filtered': False, 'severity': 'safe'}, 'self_harm': {'filtered': False, 'severity': 'safe'}, 'sexual': {'filtered': False, 'severity': 'safe'}, 'violence': {'filtered': False, 'severity': 'safe'}}}])\n")),(0,a.kt)("p",null,"\u307e\u305f\u3001Azure OpenAI Service \u306b\u306f Functions \u3068\u3044\u3046\u6a5f\u80fd\u304c\u3042\u308a\u307e\u3059\u3002Functions \u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u5b9a\u7fa9\u3057\u305f\u95a2\u6570\u3092\u30e2\u30c7\u30eb\u306b\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306f Functions \u3092\u5229\u7528\u3057\u305f\u4f8b\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="aoai_functions.py"',title:'"aoai_functions.py"'},'import os\nfrom openai import AzureOpenAI\n\nclient = AzureOpenAI(\n    api_key=os.getenv("YOUR_API_KEY"),\n    api_version="2023-12-01-preview",\n    azure_endpoint=os.getenv("YOUR_AOAI_ENDPOINT"),\n)\n\n\nfunctions = []\nfunctions.append(\n    {\n        "name": "bing_search_function",\n        "description": "\u4e0e\u3048\u3089\u308c\u305f\u691c\u7d22\u30af\u30a8\u30ea\u3092\u4f7f\u3063\u3066 Bing \u691c\u7d22\u3092\u884c\u3046",\n        "parameters": {\n            "type": "object",\n            "properties": {\n                "query": {"type": "string", "description": "\u691c\u7d22\u30af\u30a8\u30ea"},\n            },\n            "required": ["query"],\n        },\n    }\n)\n\nchat_completion = client.chat.completions.create(\n    model="gpt-35-turbo",\n    messages=[\n        {"role": "system", "content": "\u3042\u306a\u305f\u306f\u512a\u79c0\u306a\u30d8\u30eb\u30d7\u30c7\u30b9\u30af\u30dc\u30c3\u30c8\u3067\u3059\u3002"},\n        {"role": "user", "content": "\u6700\u65b0\u306e\u30d7\u30ea\u30ad\u30e5\u30a2\u306e\u6982\u8981\u3092\u6559\u3048\u3066"},\n    ],\n    functions=functions,\n)\n\nprint(chat_completion)\n')),(0,a.kt)("p",null,"\u5b9f\u884c\u7d50\u679c\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f python aoai_functions.py\nChatCompletion(id='chatcmpl-8opnH31wBoVBd8wIOcOOPwnka09wN', choices=[Choice(finish_reason='function_call', index=0, logprobs=None, message=ChatCompletionMessage(content=None, role='assistant', function_call=FunctionCall(arguments='{\"query\":\"\u30d7\u30ea\u30ad\u30e5\u30a2\"}', name='bing_search_function'), tool_calls=None), content_filter_results={})], created=1707126187, model='gpt-35-turbo', object='chat.completion', system_fingerprint='fp_68a7d165bf', usage=CompletionUsage(completion_tokens=20, prompt_tokens=114, total_tokens=134), prompt_filter_results=[{'prompt_index': 0, 'content_filter_results': {'hate': {'filtered': False, 'severity': 'safe'}, 'self_harm': {'filtered': False, 'severity': 'safe'}, 'sexual': {'filtered': False, 'severity': 'safe'}, 'violence': {'filtered': False, 'severity': 'safe'}}}])\n")),(0,a.kt)("h2",{id:"bing-search-api-\u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3059\u308b"},"Bing Search API \u306e\u4ed5\u69d8\u3092\u7406\u89e3\u3059\u308b"),(0,a.kt)("p",null,"RAG \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u3001\u5916\u90e8\u306e\u60c5\u5831\u6e90\u3092\u5229\u7528\u3059\u308b\u305f\u3081\u306b Bing Search API \u3092\u5229\u7528\u3057\u307e\u3059\u3002\nBing Search API \u306e\u5916\u90e8\u4ed5\u69d8\u306f ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/bing/search-apis/bing-web-search/"},"Bing Search API documentation")," \u3067\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/bing/search-apis/bing-web-search/create-bing-search-service-resource"},"Create Bing Search resource through Azure Marketplace"),"\u306e\u624b\u9806\u306b\u5f93\u3044\u3001Azure Portal \u3067 ",(0,a.kt)("inlineCode",{parentName:"p"},"Bing Resources")," \u3092\u691c\u7d22\u3057\u3001\u30ea\u30bd\u30fc\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u4f5c\u6210\u3059\u308b\u3068 API \u30ad\u30fc\u304c\u767a\u884c\u3055\u308c\u308b\u306e\u3067\u3001\u305d\u308c\u3092\u5229\u7528\u3057\u3066 Bing Search API \u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"curl-1"},"curl"),(0,a.kt)("p",null,"curl \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066 Bing Search API \u3092\u53e9\u3044\u3066\u307f\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'YOUR_BING_SEARCH_API_KEY="your-bing-search-api-key"\n\ncurl "https://api.bing.microsoft.com/v7.0/search?q=\'Microsoft\'" \\\n    -H "Ocp-Apim-Subscription-Key: $YOUR_BING_SEARCH_API_KEY"\n')),(0,a.kt)("h3",{id:"python-1"},"Python"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/bing/search-apis/bing-web-search/samples#samples-using-native-http-get-requests"},"Bing Web Search samples")," \u306b\u5404\u7a2e\u8a00\u8a9e\u306e\u30b5\u30f3\u30d7\u30eb\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u306f Python \u306e\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="bing_search.py"',title:'"bing_search.py"'},'import os\nimport requests\nimport json\n\nsubscription_key = os.getenv("YOUR_BING_SEARCH_API_KEY")\nsearch_url = "https://api.bing.microsoft.com/v7.0/search"\nsearch_term = "\u6700\u65b0\u306e\u30d7\u30ea\u30ad\u30e5\u30a2\u306e\u30bf\u30a4\u30c8\u30eb\u3092\u6559\u3048\u3066"\n\nheaders = {"Ocp-Apim-Subscription-Key": subscription_key}\nparams = {"q": search_term, "textDecorations": True, "textFormat": "HTML"}\nresponse = requests.get(search_url, headers=headers, params=params)\nresponse.raise_for_status()\nsearch_results = response.json()\n\nsources = []\nfor search_result in search_results["webPages"]["value"]:\n    sources.append(search_result["name"])\n\nprint("\\n".join(sources))\n')),(0,a.kt)("p",null,"\u5b9f\u884c\u7d50\u679c\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f python bing_search.py\n\u65b0\u4f5c\u30d7\u30ea\u30ad\u30e5\u30a2\u30bf\u30a4\u30c8\u30eb\u767a\u8868\uff01 \u300e\u308f\u3093\u3060\u3075\u308b\u3077\u308a\u304d\u3085\u3042\uff01\u300f\u306f ...\n\u30d7\u30ea\u30ad\u30e5\u30a2\u65b0\u4f5c\u30bf\u30a4\u30c8\u30eb\u767a\u8868 21\u4f5c\u76ee\u306f\u300e\u308f\u3093\u3060\u3075\u308b\u3077\u308a\u304d\u3085\u3042 ...\n\u30d7\u30ea\u30ad\u30e5\u30a2\u65b0\u4f5c\u30bf\u30a4\u30c8\u30eb\u767a\u8868 21\u4f5c\u76ee\u306f\u300e\u308f\u3093\u3060\u3075\u308b\u3077\u308a\u304d\u3085\u3042 ...\n\u3010\u30d7\u30ea\u30ad\u30e5\u30a2\u3011\u65b0\u30b7\u30ea\u30fc\u30ba\u306e\u30bf\u30a4\u30c8\u30eb\u306f\u300e\u308f\u3093\u3060\u3075\u308b ...\n\u300c\u30d7\u30ea\u30ad\u30e5\u30a2\u300d\u7b2c19\u5f3e\u30bf\u30a4\u30c8\u30eb\u304c\u300c\u30c7\u30ea\u30b7\u30e3\u30b9\u30d1\u30fc\u30c6\u30a3 ...\n\u30d7\u30ea\u30ad\u30e5\u30a2\u7b2c21\u5f3e\u30bf\u30a4\u30c8\u30eb\u300c\u308f\u3093\u3060\u3075\u308b\u3077\u308a\u304d\u3085\u3042\uff01\u300d\u306b\u6c7a\u5b9a ...\n\u300c\u30d7\u30ea\u30ad\u30e5\u30a2\u300d\u65b0\u4f5c\u30bf\u30a4\u30c8\u30eb\u306f\u300c\u308f\u3093\u3060\u3075\u308b\u3077\u308a\u304d\u3085\u3042\uff01\u300d\u521d ...\n\u30d7\u30ea\u30ad\u30e5\u30a2\u30b7\u30ea\u30fc\u30ba\u6700\u65b0\u4f5c\u300e\u30c7\u30ea\u30b7\u30e3\u30b9\u30d1\u30fc\u30c6\u30a3\u2661\u30d7\u30ea\u30ad\u30e5\u30a2 ...\n\u30d7\u30ea\u30ad\u30e5\u30a2\u65b0\u4f5c\u3001\u30bf\u30a4\u30c8\u30eb\u767a\u8868 \u30b7\u30ea\u30fc\u30ba\u7b2c19\u5f3e\u306f\u300e\u30c7\u30ea\u30b7\u30e3\u30b9 ...\n\u300c\u30d7\u30ea\u30ad\u30e5\u30a2\u300d\u65b0\u4f5c\u30bf\u30a4\u30c8\u30eb\u306f\u300c\u308f\u3093\u3060\u3075\u308b\u3077\u308a\u304d\u3085\u3042\uff01\u300d\u521d ...\n")),(0,a.kt)("h2",{id:"rag-\u30a2\u30d7\u30ea\u306e\u4f5c\u6210"},"RAG \u30a2\u30d7\u30ea\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"Azure OpenAI Service \u3068 Bing Search API \u3092\u5229\u7528\u3057\u3066\u3001RAG \u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u4ee5\u4e0b\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u3001Bing Search API \u3092\u5229\u7528\u3057\u3066\u691c\u7d22\u7d50\u679c\u3092\u53d6\u5f97\u3057\u3001\u305d\u308c\u3092 Azure OpenAI Service \u306b\u6e21\u3057\u3066\u56de\u7b54\u3092\u53d6\u5f97\u3059\u308b\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="rag.py"',title:'"rag.py"'},'import os\nfrom openai import AzureOpenAI\nimport os\nimport requests\n\n\ndef get_sources_string(search_term: str):\n\n    subscription_key = os.getenv("YOUR_BING_SEARCH_API_KEY")\n    search_url = "https://api.bing.microsoft.com/v7.0/search"\n\n    headers = {"Ocp-Apim-Subscription-Key": subscription_key}\n    params = {"q": search_term, "textDecorations": True, "textFormat": "HTML"}\n    response = requests.get(search_url, headers=headers, params=params)\n    response.raise_for_status()\n    search_results = response.json()\n\n    sources = []\n    for search_result in search_results["webPages"]["value"]:\n        sources.append(search_result["name"])\n\n    return "\\n".join(sources)\n\n\ndef get_response_with_sources(sources_str: str):\n    client = AzureOpenAI(\n        api_key=os.getenv("YOUR_API_KEY"),\n        api_version="2023-12-01-preview",\n        azure_endpoint=os.getenv("YOUR_AOAI_ENDPOINT"),\n    )\n    messages = [\n        {"role": "system", "content": "\u3042\u306a\u305f\u306f\u512a\u79c0\u306a\u30d8\u30eb\u30d7\u30c7\u30b9\u30af\u30dc\u30c3\u30c8\u3067\u3059\u3002"},\n        {"role": "user", "content": search_term},\n    ]\n\n    messages.append({"role": "system", "content": f"Sources: {sources_str}"})\n\n    chat_completion = client.chat.completions.create(\n        model="gpt-35-turbo",\n        messages=messages,\n    )\n    return chat_completion.choices[0].message.content\n\n\nif __name__ == "__main__":\n    search_term = "\u6700\u65b0\u306e\u30d7\u30ea\u30ad\u30e5\u30a2\u306e\u30bf\u30a4\u30c8\u30eb\u3092\u6559\u3048\u3066"\n    sources_str = get_sources_string(search_term)\n    response = get_response_with_sources(sources_str)\n    print(f"\u30dc\u30c3\u30c8\u306e\u56de\u7b54: {response}")\n')),(0,a.kt)("p",null,"\u5b9f\u884c\u7d50\u679c\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u276f python rag.py\n\u30dc\u30c3\u30c8\u306e\u56de\u7b54: \u6700\u65b0\u306e\u30d7\u30ea\u30ad\u30e5\u30a2\u30b7\u30ea\u30fc\u30ba\u306e\u30bf\u30a4\u30c8\u30eb\u306f\u300e\u308f\u3093\u3060\u3075\u308b\u3077\u308a\u304d\u3085\u3042\uff01\u300f\u3067\u3059\u3002\n")),(0,a.kt)("p",null,"Bing Search \u306e\u6700\u65b0\u306e\u691c\u7d22\u7d50\u679c\u3092 Azure OpenAI Service \u306b\u6e21\u3057\u3066\u56de\u7b54\u3092\u53d6\u5f97\u3067\u304d\u307e\u3057\u305f\u3002\n2024/02 \u73fe\u5728\u653e\u9001\u4e2d\u306e\u30d7\u30ea\u30ad\u30e5\u30a2\u30b7\u30ea\u30fc\u30ba\u306f",(0,a.kt)("a",{parentName:"p",href:"https://ja.wikipedia.org/wiki/%E3%82%8F%E3%82%93%E3%81%A0%E3%81%B5%E3%82%8B%E3%81%B7%E3%82%8A%E3%81%8D%E3%82%85%E3%81%82!"},"\u300e\u308f\u3093\u3060\u3075\u308b\u3077\u308a\u304d\u3085\u3042\uff01\u300f"),"\u3067\u3059\u306e\u3067\u6b63\u3057\u304f\u56de\u7b54\u304c\u751f\u6210\u3067\u304d\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"Bing Search API \u306e\u7d50\u679c\u306e\u4e2d\u306b\u3001",(0,a.kt)("a",{parentName:"p",href:"https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%AA%E3%82%B7%E3%83%A3%E3%82%B9%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E2%99%A1%E3%83%97%E3%83%AA%E3%82%AD%E3%83%A5%E3%82%A2"},"\u30c7\u30ea\u30b7\u30e3\u30b9\u30d1\u30fc\u30c6\u30a3\u30d7\u30ea\u30ad\u30e5\u30a2")," \u3082\u5165\u3063\u3066\u3044\u307e\u3057\u305f\u304c\u300121 \u4f5c\u76ee\u3068 19 \u4f5c\u76ee\u3068\u3044\u3046\u60c5\u5831\u304c\u5165\u3063\u3066\u3044\u305f\u305f\u3081\u3001Azure OpenAI Service \u306b\u3066\u6b63\u3057\u3044\u56de\u7b54\u304c\u751f\u6210\u3067\u304d\u305f\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkks_6088_ts_github_io=self.webpackChunkks_6088_ts_github_io||[]).push([[8339],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:"handson-iot-edge",title:"Azure IoT Edge \u3092\u7528\u3044\u305f\u30cf\u30f3\u30ba\u30aa\u30f3",authors:"ks6088ts",tags:["azure","iot-edge"]},i=void 0,l={permalink:"/blog/handson-iot-edge",source:"@site/blog/2023-03-22-handson-iot-edge.md",title:"Azure IoT Edge \u3092\u7528\u3044\u305f\u30cf\u30f3\u30ba\u30aa\u30f3",description:"Azure IoT Edge \u3092\u4f7f\u3063\u305f\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002",date:"2023-03-22T00:00:00.000Z",formattedDate:"2023\u5e743\u670822\u65e5",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"iot-edge",permalink:"/blog/tags/iot-edge"}],readingTime:4.21,hasTruncateMarker:!0,authors:[{name:"ks6088ts",title:"Software Engineer / Solutions Architect",url:"https://github.com/ks6088ts",imageURL:"https://github.com/ks6088ts.png",key:"ks6088ts"}],frontMatter:{slug:"handson-iot-edge",title:"Azure IoT Edge \u3092\u7528\u3044\u305f\u30cf\u30f3\u30ba\u30aa\u30f3",authors:"ks6088ts",tags:["azure","iot-edge"]},nextItem:{title:"textlint \u3092\u6709\u52b9\u5316\u3059\u308b",permalink:"/blog/how-to-apply-textlint"}},u={authorsImageUrls:[void 0]},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Azure \u30ea\u30bd\u30fc\u30b9\u69cb\u7bc9",id:"azure-\u30ea\u30bd\u30fc\u30b9\u69cb\u7bc9",level:2},{value:"Azure CLI",id:"azure-cli",level:3},{value:"Terraform",id:"terraform",level:3},{value:"IoT Edge Module \u958b\u767a",id:"iot-edge-module-\u958b\u767a",level:2},{value:"Azure Container Registry \u306e\u63a5\u7d9a\u8a2d\u5b9a",id:"azure-container-registry-\u306e\u63a5\u7d9a\u8a2d\u5b9a",level:3},{value:"IoT Edge Module \u306e Build &amp; Push",id:"iot-edge-module-\u306e-build--push",level:3},{value:"IoT Module \u306e\u30c7\u30d7\u30ed\u30a4",id:"iot-module-\u306e\u30c7\u30d7\u30ed\u30a4",level:3}],d={toc:s},p="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Azure IoT Edge \u3092\u4f7f\u3063\u305f\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u3057\u307e\u3057\u305f\u3002\n\u57fa\u790e\u7684\u306a\u691c\u8a3c\u306b\u5fc5\u8981\u306a\u60c5\u5831\u306e\u30ea\u30f3\u30af\u3092\u307e\u3068\u3081\u307e\u3059\u3002"),(0,o.kt)("h1",{id:"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9"},"\u958b\u767a\u74b0\u5883\u306e\u69cb\u7bc9"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker"),(0,o.kt)("li",{parentName:"ul"},"Visual Studio Code"),(0,o.kt)("li",{parentName:"ul"},"Azure"),(0,o.kt)("li",{parentName:"ul"},"Azure CLI")),(0,o.kt)("h2",{id:"azure-\u30ea\u30bd\u30fc\u30b9\u69cb\u7bc9"},"Azure \u30ea\u30bd\u30fc\u30b9\u69cb\u7bc9"),(0,o.kt)("h3",{id:"azure-cli"},"Azure CLI"),(0,o.kt)("p",null,"\u30b5\u30fc\u30d3\u30b9\u5074\u306e\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u3001Azure IoT Hub, Azure Container Registry \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# Parameters\nLOCATION="japaneast"\nRESOURCE_GROUP_NAME="handson_iotedge"\nIOTHUB_NAME="iothub0322"\nCONTAINER_REGISTRY_NAME="acr0322"\nDEVICE_ID="myEdgeDevice"\n\n# create resource group\naz group create \\\n    --name $RESOURCE_GROUP_NAME \\\n    --location $LOCATION\n\n# create Azure IoT Hub\naz iot hub create \\\n    --resource-group $RESOURCE_GROUP_NAME \\\n    --name $IOTHUB_NAME \\\n    --sku F1 \\\n    --partition-count 2\n\n# create device identity in IoT Hub\naz iot hub device-identity create \\\n    --device-id $DEVICE_ID \\\n    --edge-enabled \\\n    --hub-name $IOTHUB_NAME\n\n# create Azure Container Registry\n# ref. https://learn.microsoft.com/ja-jp/azure/container-registry/container-registry-get-started-azure-cli#create-a-container-registry\naz acr create \\\n    --resource-group $RESOURCE_GROUP_NAME \\\n    --name $CONTAINER_REGISTRY_NAME \\\n    --sku Basic \\\n    --admin-enabled true\n\n# copy connection string for creating VM later.\nCONNECTION_STRING=$(az iot hub device-identity connection-string show --device-id $DEVICE_ID --hub-name $IOTHUB_NAME -o tsv)\n')),(0,o.kt)("p",null,"\u30a8\u30c3\u30b8\u5074\u306e\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u3001\u4eee\u60f3\u30de\u30b7\u30f3\u4e0a\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Azure IoT Edge \u306b\u3088\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c7\u30d7\u30ed\u30a4\u3067\u306f\u3001\u30a8\u30c3\u30b8\u5074\u306b\u30b3\u30f3\u30c6\u30ca\u30e9\u30f3\u30bf\u30a4\u30e0\u3084\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/iot-edge/quickstart-linux?view=iotedge-1.4#deploy-the-iot-edge-device"},"\u30af\u30a4\u30c3\u30af \u30b9\u30bf\u30fc\u30c8:\u521d\u3081\u3066\u306e IoT Edge \u30e2\u30b8\u30e5\u30fc\u30eb\u3092 Linux \u4eee\u60f3\u30c7\u30d0\u30a4\u30b9\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b"),"\u3092\u53c2\u8003\u306b ARM \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u5229\u7528\u3057\u3066\u3001\u4eee\u60f3\u30de\u30b7\u30f3\u3092\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# Parameters\nLOCATION="japaneast"\nRESOURCE_GROUP_NAME="handson_iotedge_device"\n\n# create resource group\naz group create \\\n    --name $RESOURCE_GROUP_NAME \\\n    --location $LOCATION\n\n# create VM instance via Azure Portal\n#   1. Go to `Deploy a custom template` at Azure Portal\n#   2. Go to `Build your own template in the editor` to paste template at `https://raw.githubusercontent.com/Azure/iotedge-vm-deploy/1.4/edgeDeploy.json`\n#   3. Fill in the parameters and create VM\n')),(0,o.kt)("p",null,"\u4eee\u60f3\u30de\u30b7\u30f3\u4e0a\u3067\u306f\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306b ",(0,o.kt)("inlineCode",{parentName:"p"},"iotedge")," \u30b3\u30de\u30f3\u30c9\u3092\u7528\u3044\u3066\u72b6\u614b\u306e\u78ba\u8a8d\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# login to VM via SSH with the password specified above\nssh adminUser@"$VM_NAME.$LOCATION".cloudapp.azure.com\n\nsudo iotedge -h\nsudo iotedge system status\nsudo iotedge system logs\nsudo iotedge list\nsudo iotedge logs <module> -f\n')),(0,o.kt)("h3",{id:"terraform"},"Terraform"),(0,o.kt)("p",null,"WIP"),(0,o.kt)("h1",{id:"\u958b\u767a"},"\u958b\u767a"),(0,o.kt)("h2",{id:"iot-edge-module-\u958b\u767a"},"IoT Edge Module \u958b\u767a"),(0,o.kt)("p",null,"IoT Edge Module \u3068\u3057\u3066\u30a8\u30c3\u30b8\u306b\u914d\u4fe1\u3059\u308b\u305f\u3081\u306e Docker \u30a4\u30e1\u30fc\u30b8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002Visual Studio Code \u62e1\u5f35\u6a5f\u80fd\u3092\u5165\u308c\u3066 GUI \u64cd\u4f5c\u3067\u7c21\u5358\u306b\u30c7\u30d7\u30ed\u30a4\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u64cd\u4f5c\u624b\u9806\u306f ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/iot-edge/tutorial-develop-for-linux?view=iotedge-1.4"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb: Linux \u30b3\u30f3\u30c6\u30ca\u30fc\u3092\u4f7f\u7528\u3057\u3066 IoT Edge \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u958b\u767a\u3059\u308b")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002\n\u5404\u8a00\u8a9e\u3054\u3068\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306f\u3001\u4f8b\u3048\u3070 Python \u306e\u5834\u5408 ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/ja-jp/azure/iot-edge/tutorial-python-module?view=iotedge-1.4"},"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb: Linux \u30b3\u30f3\u30c6\u30ca\u30fc\u3092\u4f7f\u7528\u3057\u3066 Python IoT Edge \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u30c7\u30d7\u30ed\u30a4\u3059\u308b")," \u304c\u53c2\u8003\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"azure-container-registry-\u306e\u63a5\u7d9a\u8a2d\u5b9a"},"Azure Container Registry \u306e\u63a5\u7d9a\u8a2d\u5b9a"),(0,o.kt)("p",null,"Azure Container Registry \u306b Docker image \u3092 push \u3059\u308b\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# create .env corresponding to your Azure Container Registry\ncat .env\nCONTAINER_REGISTRY_ADDRESS="YOUR_CONTAINER_REGISTRY.azurecr.io"\nCONTAINER_REGISTRY_USERNAME="YOUR_USERNAME"\nCONTAINER_REGISTRY_PASSWORD="YOUR_PASSWORD"\n')),(0,o.kt)("p",null,"\u8a2d\u5b9a\u60c5\u5831\u306f\u3001Azure Portal \u306e ",(0,o.kt)("inlineCode",{parentName:"p"},"Azure Container Registry > Settings > Access Keys")," \u304b\u3089\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","ACR \u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u305f\u3081\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az acr login --name $CONTAINER_REGISTRY_NAME\n")),(0,o.kt)("h3",{id:"iot-edge-module-\u306e-build--push"},"IoT Edge Module \u306e Build & Push"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-toolkit"},"Azure IoT Hub \u306e VSCode \u62e1\u5f35"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,o.kt)("li",{parentName:"ol"},"\u30b3\u30de\u30f3\u30c9\u30d1\u30ec\u30c3\u30c8\u3092\u958b\u304d\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Azure IoT Hub : Select IoT Hub")," \u304b\u3089\u5bfe\u8c61\u3068\u306a\u308b IoT Hub \u3092\u9078\u629e"),(0,o.kt)("li",{parentName:"ol"},"VSCode \u306e Explorer \u306b\u3066 ",(0,o.kt)("inlineCode",{parentName:"li"},"deployment.template.json")," \u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"Build and Push IoT Edge Solution")," \u3092\u9078\u629e"),(0,o.kt)("li",{parentName:"ol"},"Docker Image \u306e Build \u3068 ACR \u3078\u306e Push \u304c\u5b9f\u884c\u3055\u308c\u3001ACR \u306e Repository \u306b\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u304c\u8ffd\u52a0\u3055\u308c\u308b")),(0,o.kt)("h3",{id:"iot-module-\u306e\u30c7\u30d7\u30ed\u30a4"},"IoT Module \u306e\u30c7\u30d7\u30ed\u30a4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"VSCode \u306e Explorer \u306e ",(0,o.kt)("inlineCode",{parentName:"li"},"AZURE IOT HUB")," \u30bf\u30d6\u306e\u5bfe\u8c61\u30c7\u30d0\u30a4\u30b9\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057 ",(0,o.kt)("inlineCode",{parentName:"li"},"Create Deployment for Single Device")," \u3092\u9078\u629e"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"config/deployment.json")," \u3092\u9078\u629e\u3057\u3066 IoT Edge Module \u3092\u8ee2\u9001")),(0,o.kt)("p",null,"Azure Portal \u306e ",(0,o.kt)("inlineCode",{parentName:"p"},"Azure IoT Hub > IoT Edge")," \u304b\u3089\u9069\u5207\u306b IoT Edge Module \u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u304b\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u307e\u305f\u306f\u3001\u8ee2\u9001\u5148\u306e Edge \u304b\u3089\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067 IoT Edge Module \u306e\u8d77\u52d5\u72b6\u614b\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo iotedge list\n")),(0,o.kt)("h1",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=UsxycuFpC8c&list=PLSmINpYYRBsO4Es9FxVfKg6n4e3QdFbcs"},"Hands on workshop / Azure IoT Edge #1 - Azure IoT Edge \u306b\u3064\u3044\u3066"))))}c.isMDXComponent=!0}}]);
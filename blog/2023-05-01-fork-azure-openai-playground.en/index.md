---
slug: fork-azure-openai-playground-en
title: Building a ChatGPT trial environment using Azure OpenAI Service
authors: ks6088ts
tags: [azure, azure-ad, azure-openai-service, app-service]
---

* This article is translated from [Azure OpenAI Service を利用した ChatGPT お試し環境の構築](../2023-05-01-fork-azure-openai-playground)

---

We have created a trial environment for ChatGPT using Azure OpenAI Service.  
Both OpenAI and Azure OpenAI Service already have easy-to-use web apps for experiencing ChatGPT, and all you need is a browser and an account to try it out.

- OpenAI: [ChatGPT Web App](https://chat.openai.com/), [Playground](https://platform.openai.com/playground)
- Azure: [Azure OpenAI Studio](https://oai.azure.com/portal)

From the perspective of a personal trial, just using these web applications is sufficient.  
However, when considering the use case of trial use within a wide range of organizations with a view to business application, various issues arise.

For example, if you simply obtain an API Token and use it in a direct way, you cannot prevent unauthorized use when the API Token is leaked. Also, if you want to limit users to members of your organization, you will need to authenticate them in some way. If you tackle these issues from scratch, you will have less time to spend on the trial of ChatGPT, which is the original purpose of this project.

Therefore, this article introduces how to build a trial environment for OpenAI API using Azure OpenAI Service with sample code, with a view to using OpenAI API for business PoC.

<!--truncate-->

## Overview

The following diagram shows the architecture of the trial environment we will build.

![architecture](../2023-05-01-fork-azure-openai-playground/architecture.png)

## Hands on

The following steps are required to build the trial environment.

---
1. Create Azure OpenAI Service resource
2. Develop a Chat app
3. Deploy to App Service
4. Add authentication to the web app running on App Service
5. Add private endpoint settings
6. Add VNET integration settings for App Service
---

The following sections will walk you through these steps.
When you are done, go to the App Service URL and try ChatGPT.

### 1. Create Azure OpenAI Service resource

See [Create a resource and deploy a model using Azure OpenAI
](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=cli) to create Azure OpenAI Service resource.

The `Azure OpenAI resource name`, `deployed model name`, and `API key` will be used later.

### 2. Develop a Chat app

There are many necessary UI components such as chat forms for OpenAI and parameter setting UI for Playground, and writing a front-end app from scratch will take a lot of time.  
Since the implementation of a front-end app is not our goal, we will look for a good OSS to achieve our goal in the shortest time possible.

I sorted by Star count on GitHub and scoured some OSS, and could not find the exact app that uses the Azure OpenAI Service, but I did find [Nashex/gpt4-playground](https://github.com/Nashex/gpt4-playground), an OSS clone of OpenAI's Playground.

There is a demo site ([GPT-4 Playground](https://www.gpt4-playground.com/)), and it seems to be almost in line with the purpose of this project, except that it uses OpenAI's API.  

If we fork this OSS and modify the code that calls OpenAI API to use Azure OpenAI Service, it should work easily.  
The following code is applicable.

```typescript title="gpt4-playground/src/utils/OpenAI/OpenAI.ts"
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });
```

By rewriting the `Authorization` in the fetch destination url and request header to `api-key`, the same functionality worked with Azure OpenAI Service.  

Since I planned to deploy a Docker image in the final stage, I used environment variables to set confidential information such as `API KEY` and resource names from the outside. [Next.js / Environment Variables
](https://nextjs.org/docs/basic-features/environment-variables).

After confirming that it works in the local environment, write a Dockerfile to containerize it and push it to Docker Hub.

When creating the image, production build for the Next.js app should be applied and place the artifact into the image.

The source code of the forked and modified application is available at [ks6088ts-labs/azure-openai-playground](https://github.com/ks6088ts-labs/azure-openai-playground).  

Please note that many parts of the source code have been modified in an ad-hoc manner for the purpose of quick implementation, so please use it only as a reference.  

Docker images are available at [ks6088ts/azure-openai-playground](https://hub.docker.com/r/ks6088ts/azure-openai-playground).  

If you just want to run the service in local environment, you can check the service operation with the following command

```shell
# run the following command and access to localhost:3000 with your browser
docker run --platform=linux/amd64 --rm \
    -p "3000:3000" \
    --env "AZURE_OPENAI_API_KEY=<YOUR API KEY>" \
    --env "AZURE_OPENAI_NAME=<YOUR AOAI NAME>" \
    --env "AZURE_OPENAI_DEPLOYMENT_NAME=<YOUR DEPLOYMENT NAME>" \
    --env "AZURE_OPENAI_API_VERSION=$(AZURE_OPENAI_API_VERSION)" \
    ks6088ts/azure-openai-playground:0.0.5
```

### 3. Deploy to App Service

The app implemented in step 2 will be published on the Azure App Service.
In this scenario, the Docker container image in the Docker Hub will be pulled and published to the App Service.

Execute the following commands in the Azure CLI.

```shell
# create resource group
az group create \
    --name $RESOURCE_GROUP_NAME \
    --location japaneast

# create App Service Plan
az appservice plan create \
    --name $APP_SERVICE_PLAN_NAME \
    --resource-group $RESOURCE_GROUP_NAME \
    --location japaneast \
    --sku B1 \
    --is-linux

# create App Service
az webapp create \
    --name $APP_SERVICE_NAME \
    --plan $APP_SERVICE_PLAN_NAME \
    --resource-group $RESOURCE_GROUP_NAME \
    --deployment-container-image-name $CONTAINER_IMAGE_NAME

# set environment variables for App Service
az webapp config appsettings set \
    --name $APP_SERVICE_NAME \
    --resource-group $RESOURCE_GROUP_NAME \
    --settings \
        WEBSITES_PORT=3000 \
        AZURE_OPENAI_API_KEY=$AZURE_OPENAI_API_KEY \
        AZURE_OPENAI_NAME=$AZURE_OPENAI_NAME \
        AZURE_OPENAI_DEPLOYMENT_NAME=$AZURE_OPENAI_DEPLOYMENT_NAME \
        AZURE_OPENAI_API_VERSION=$AZURE_OPENAI_API_VERSION

# restart App Service to reflect the environment variables
az webapp restart \
    --name $APP_SERVICE_NAME \
    --resource-group $RESOURCE_GROUP_NAME
```

Now, when you access the App Service URL, it should work the same way it did when you ran it locally earlier.

### 4. Add authentication to the web app running on App Service

Since the App Service supports built-in authentication (=EasyAuth) and authorization, you can have users sign in without writing any code in your web app.  
For instructions, see [Tutorial: Add app authentication to your web app running on Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/scenario-secure-app-authentication-app-service).  
Simply follow `AppService > Authentication > Add identity provider` from the Azure Portal to add the desired authentication provider. The major authentication providers are supported, so it is easy to add authentication functionality.

### 5. Add private endpoint settings

Configure Azure OpenAI Service to be available only for private network connections via Azure Virtual Network (VNet).
By limiting requests to those made via the private network, you can prevent unauthorized use of resources from outside, even in the unlikely event that the API Key is leaked.  
For instructions, please refer to [Azure OpenAIにプライベートエンドポイント（Private Endpoint）を設定して東日本リージョンの仮想ネットワークのみから使う](https://blog.jbs.co.jp/entry/2023/04/07/173940) (*This article is in Japanese, unfortunately).
Following the article, I performed the following operation from Azure Portal and confirmed that the API cannot be called from Azure OpenAI Playground, as expected.

- Check `Azure OpenAI > Networking > Firewalls and virtual networks > Disabled` and then activate Private Endpoint
- Create Private Endpoint from `Azure OpenAI > Networking > Private endpoint connections > + Private endpoint`

Note that the network settings are not immediately reflected, so you need to wait a bit before checking. When I hurriedly checked, it was not reflected and I got stuck...  
To confirm content of the API response, you can simply use `curl` to call the REST API.

```shell
curl "https://${AOAI_NAME}.openai.azure.com/openai/deployments/${MODEL_NAME}/completions?api-version=2022-12-01" \
  -H 'api-key: your-api-key' \
  -H 'content-type: application/json' \
  --data-raw '{"prompt":"Write a product launch email for new AI-powered headphones that are priced at $79.99 and available at Best Buy, Target and Amazon.com. The target audience is tech-savvy music lovers and the tone is friendly and exciting.\n\n1. What should be the subject line of the email?  \n2. What should be the body of the email?","temperature":1,"top_p":1,"frequency_penalty":0,"presence_penalty":0,"max_tokens":350,"stop":null,"stream":true}' \
  --compressed -vvvv
```

It seems that Private Endpoint is indeed enabled, since the following parameters were also found in the response.

- `policy-id: ThrowExceptionDueToTrafficDenied`
- `{"error":{"code":"AccessDenied","message": "Public access is disabled. Please configure private endpoint."}}`

### 6. Add VNet integration settings for App Service

Enable VNet integration in the Outbound communication settings of the App Service and configure it to send requests from the App Service to the Azure OpenAI Service via VNet.
Refer to [【Azure】App ServiceのVNet統合とプライベートリンクを利用した通信閉域化](https://techblog.ap-com.co.jp/entry/2021/03/12/150117)(*This article is in Japanese, unfortunately) and set `AppService > Networking > Outbound Traffic > VNet integration > + Add VNet` to add VNet.

## Summary

After following the steps described in the article, the following behavior has been confirmed

- Unauthenticated users are redirected to the authentication screen of the given authentication provider
- Upon successful authentication, users can access to the web app
- Azure OpenAI Service responds to the text sent from the chat form
- API requests failed from Azure OpenAI Playground, which is outside the VNet

This article summarizes the steps to use Azure OpenAI Service from the App Service.
By using the App Service's built-in authentication and Vnet integration, we were able to build a secure environment to use Azure OpenAI Service without any hassle.

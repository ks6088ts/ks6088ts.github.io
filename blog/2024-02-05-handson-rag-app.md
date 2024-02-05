---
slug: handson-rag-app
title: RAG アプリのハンズオン：Azure OpenAI Service と Bing Search API の活用法
authors: ks6088ts
tags: [azure, app-service, azure-openai-service]
---

本記事では Azure OpenAI Service と Bing Search API を利用して、手っ取り早く RAG アプリを作成する方法を紹介します。

<!--truncate-->

## Azure OpenAI Service の仕様を理解する

<!-- textlint-disable -->

Azure OpenAI Service の外部仕様として、 OpenAPI で書かれた仕様書が GitHub の [specification/cognitiveservices/data-plane/AzureOpenAI/inference](https://github.com/Azure/azure-rest-api-specs/tree/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference) で公開されています。

API バージョンごとに仕様は別ファイルとして定義されております。例えば、`2023-12-01-preview` ですと [specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-12-01-preview/inference.json](https://github.com/Azure/azure-rest-api-specs/blob/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-12-01-preview/inference.json)で確認できます。

[Swagger UI](https://petstore.swagger.io/) のデモサイトに Azure OpenAI Service の仕様を読み込ませることで、API の仕様をグラフィカルに確認できます。
OpenAPI 仕様書の JSON ファイルは GitHub 上で `Raw` ボタンをクリックすることで取得できます。例えば、`https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-12-01-preview/inference.json` を Swagger UI の `Explore` ボタンに入力することで、API の仕様を確認できます。

<!-- textlint-enable -->

### curl

外部仕様が確認出来たら curl コマンドを使って API を叩いてみます。
まず curl で確認する理由は、API の仕様を理解するためです。API の仕様を理解することで、API の挙動を理解し、それに合わせたプログラムを書くことができます。
以下の通り、作成したエンドポイントに対して API Key やプロンプトを指定してリクエストを送信すると、レスポンスが返ってきます。

```shell
YOUR_AOAI_NAME="your-aoai-name"
YOUR_DEPLOYMENT_ID="your-deployment-id"
YOUR_API_KEY="your-api-key"

❯ curl -X 'POST' \
    "https://$YOUR_AOAI_NAME.openai.azure.com/openai/deployments/$YOUR_DEPLOYMENT_ID/chat/completions?api-version=2023-12-01-preview" \
    -H 'accept: application/json' \
    -H "api-key: $YOUR_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
  "model": "gpt-3.5-turbo-0613",
  "messages": [
    {"role": "user", "content": "What is the weather like in Boston?"}
  ],
  "functions": [
    {
      "name": "get_current_weather",
      "description": "Get the current weather in a given location",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The city and state, e.g. San Francisco, CA"
          },
          "unit": {
            "type": "string",
            "enum": ["celsius", "fahrenheit"]
          }
        },
        "required": ["location"]
      }
    }
  ]
}' | jq -r .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1328  100   691  100   637    661    609  0:00:01  0:00:01 --:--:--  1272
{
  "id": "chatcmpl-8omgaCZuZzd91sW7xZK9tp7tKmGN6",
  "object": "chat.completion",
  "created": 1707114240,
  "model": "gpt-35-turbo",
  "prompt_filter_results": [
    {
      "prompt_index": 0,
      "content_filter_results": {
        "hate": {
          "filtered": false,
          "severity": "safe"
        },
        "self_harm": {
          "filtered": false,
          "severity": "safe"
        },
        "sexual": {
          "filtered": false,
          "severity": "safe"s
        },
        "violence": {
          "filtered": false,
          "severity": "safe"
        }
      }
    }
  ],
  "choices": [
    {
      "finish_reason": "function_call",
      "index": 0,
      "message": {
        "role": "assistant",
        "function_call": {
          "name": "get_current_weather",
          "arguments": "{\"location\":\"Boston, MA\"}"
        }
      },
      "content_filter_results": {}
    }
  ],
  "usage": {
    "prompt_tokens": 82,
    "completion_tokens": 17,
    "total_tokens": 99
  },
  "system_fingerprint": "fp_68a7d165bf"
}
```

### Python

OpenAI 社が提供する Python ライブラリ [openai/openai-python](https://github.com/openai/openai-python) を使って、Python から Azure OpenAI Service を利用できます。

<!-- textlint-disable -->

[Python を使用して OpenAI エンドポイントと Azure OpenAI エンドポイントを切り替える方法](https://learn.microsoft.com/ja-jp/azure/ai-services/openai/how-to/switching-endpoints)を参考に、以下のプログラムを実行することで、Azure OpenAI Service を利用できます。

<!-- textlint-enable -->

```python title="aoai.py"
import os
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key=os.getenv("YOUR_API_KEY"),
    api_version="2023-12-01-preview",
    azure_endpoint=os.getenv("YOUR_AOAI_ENDPOINT"),
)

chat_completion = client.chat.completions.create(
    model="gpt-35-turbo",
    messages=[
        {"role": "system", "content": "あなたは優秀なヘルプデスクボットです。"},
    ],
)

print(chat_completion)
```

実行結果は以下の通りです。

```shell
❯ python aoai.py
ChatCompletion(id='chatcmpl-8opmh8NPylnqJTdEpkYSeoLGDcHXo', choices=[Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='ありがとうございます！何かお手伝いできることはありますか？', role='assistant', function_call=None, tool_calls=None), content_filter_results={'hate': {'filtered': False, 'severity': 'safe'}, 'self_harm': {'filtered': False, 'severity': 'safe'}, 'sexual': {'filtered': False, 'severity': 'safe'}, 'violence': {'filtered': False, 'severity': 'safe'}})], created=1707126151, model='gpt-35-turbo', object='chat.completion', system_fingerprint='fp_68a7d165bf', usage=CompletionUsage(completion_tokens=20, prompt_tokens=29, total_tokens=49), prompt_filter_results=[{'prompt_index': 0, 'content_filter_results': {'hate': {'filtered': False, 'severity': 'safe'}, 'self_harm': {'filtered': False, 'severity': 'safe'}, 'sexual': {'filtered': False, 'severity': 'safe'}, 'violence': {'filtered': False, 'severity': 'safe'}}}])
```

また、Azure OpenAI Service には Functions という機能があります。Functions は、ユーザーが定義した関数をモデルに渡すことができます。以下は Functions を利用した例です。

```python title="aoai_functions.py"
import os
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key=os.getenv("YOUR_API_KEY"),
    api_version="2023-12-01-preview",
    azure_endpoint=os.getenv("YOUR_AOAI_ENDPOINT"),
)


functions = []
functions.append(
    {
        "name": "bing_search_function",
        "description": "与えられた検索クエリを使って Bing 検索を行う",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "検索クエリ"},
            },
            "required": ["query"],
        },
    }
)

chat_completion = client.chat.completions.create(
    model="gpt-35-turbo",
    messages=[
        {"role": "system", "content": "あなたは優秀なヘルプデスクボットです。"},
        {"role": "user", "content": "最新のプリキュアの概要を教えて"},
    ],
    functions=functions,
)

print(chat_completion)
```

実行結果は以下の通りです。

```shell
❯ python aoai_functions.py
ChatCompletion(id='chatcmpl-8opnH31wBoVBd8wIOcOOPwnka09wN', choices=[Choice(finish_reason='function_call', index=0, logprobs=None, message=ChatCompletionMessage(content=None, role='assistant', function_call=FunctionCall(arguments='{"query":"プリキュア"}', name='bing_search_function'), tool_calls=None), content_filter_results={})], created=1707126187, model='gpt-35-turbo', object='chat.completion', system_fingerprint='fp_68a7d165bf', usage=CompletionUsage(completion_tokens=20, prompt_tokens=114, total_tokens=134), prompt_filter_results=[{'prompt_index': 0, 'content_filter_results': {'hate': {'filtered': False, 'severity': 'safe'}, 'self_harm': {'filtered': False, 'severity': 'safe'}, 'sexual': {'filtered': False, 'severity': 'safe'}, 'violence': {'filtered': False, 'severity': 'safe'}}}])
```

## Bing Search API の仕様を理解する

RAG アプリを作成するために、外部の情報源を利用するために Bing Search API を利用します。
Bing Search API の外部仕様は [Bing Search API documentation](https://learn.microsoft.com/en-us/bing/search-apis/bing-web-search/) で公開されています。

<!-- textlint-disable -->

[Create Bing Search resource through Azure Marketplace](https://learn.microsoft.com/en-us/bing/search-apis/bing-web-search/create-bing-search-service-resource)の手順に従い、Azure Portal で `Bing Resources` を検索し、リソースを作成します。

<!-- textlint-enable -->

作成すると API キーが発行されるので、それを利用して Bing Search API を利用できます。

### curl

curl コマンドを使って Bing Search API を叩いてみます。

```shell
YOUR_BING_SEARCH_API_KEY="your-bing-search-api-key"

curl "https://api.bing.microsoft.com/v7.0/search?q='Microsoft'" \
    -H "Ocp-Apim-Subscription-Key: $YOUR_BING_SEARCH_API_KEY"
```

### Python

[Bing Web Search samples](https://learn.microsoft.com/en-us/bing/search-apis/bing-web-search/samples#samples-using-native-http-get-requests) に各種言語のサンプルがあります。ここでは Python の例を示します。

```python title="bing_search.py"
import os
import requests
import json

subscription_key = os.getenv("YOUR_BING_SEARCH_API_KEY")
search_url = "https://api.bing.microsoft.com/v7.0/search"
search_term = "最新のプリキュアのタイトルを教えて"

headers = {"Ocp-Apim-Subscription-Key": subscription_key}
params = {"q": search_term, "textDecorations": True, "textFormat": "HTML"}
response = requests.get(search_url, headers=headers, params=params)
response.raise_for_status()
search_results = response.json()

sources = []
for search_result in search_results["webPages"]["value"]:
    sources.append(search_result["name"])

print("\n".join(sources))
```

実行結果は以下の通りです。

```shell
❯ python bing_search.py
新作プリキュアタイトル発表！ 『わんだふるぷりきゅあ！』は ...
プリキュア新作タイトル発表 21作目は『わんだふるぷりきゅあ ...
プリキュア新作タイトル発表 21作目は『わんだふるぷりきゅあ ...
【プリキュア】新シリーズのタイトルは『わんだふる ...
「プリキュア」第19弾タイトルが「デリシャスパーティ ...
プリキュア第21弾タイトル「わんだふるぷりきゅあ！」に決定 ...
「プリキュア」新作タイトルは「わんだふるぷりきゅあ！」初 ...
プリキュアシリーズ最新作『デリシャスパーティ♡プリキュア ...
プリキュア新作、タイトル発表 シリーズ第19弾は『デリシャス ...
「プリキュア」新作タイトルは「わんだふるぷりきゅあ！」初 ...
```

## RAG アプリの作成

Azure OpenAI Service と Bing Search API を利用して、RAG アプリを作成します。
以下のプログラムは、Bing Search API を利用して検索結果を取得し、それを Azure OpenAI Service に渡して回答を取得するプログラムです。

```python title="rag.py"
import os
from openai import AzureOpenAI
import os
import requests


def get_sources_string(search_term: str):

    subscription_key = os.getenv("YOUR_BING_SEARCH_API_KEY")
    search_url = "https://api.bing.microsoft.com/v7.0/search"

    headers = {"Ocp-Apim-Subscription-Key": subscription_key}
    params = {"q": search_term, "textDecorations": True, "textFormat": "HTML"}
    response = requests.get(search_url, headers=headers, params=params)
    response.raise_for_status()
    search_results = response.json()

    sources = []
    for search_result in search_results["webPages"]["value"]:
        sources.append(search_result["name"])

    return "\n".join(sources)


def get_response_with_sources(sources_str: str):
    client = AzureOpenAI(
        api_key=os.getenv("YOUR_API_KEY"),
        api_version="2023-12-01-preview",
        azure_endpoint=os.getenv("YOUR_AOAI_ENDPOINT"),
    )
    messages = [
        {"role": "system", "content": "あなたは優秀なヘルプデスクボットです。"},
        {"role": "user", "content": search_term},
    ]

    messages.append({"role": "system", "content": f"Sources: {sources_str}"})

    chat_completion = client.chat.completions.create(
        model="gpt-35-turbo",
        messages=messages,
    )
    return chat_completion.choices[0].message.content


if __name__ == "__main__":
    search_term = "最新のプリキュアのタイトルを教えて"
    sources_str = get_sources_string(search_term)
    response = get_response_with_sources(sources_str)
    print(f"ボットの回答: {response}")
```

実行結果は以下の通りです。

```shell
❯ python rag.py
ボットの回答: 最新のプリキュアシリーズのタイトルは『わんだふるぷりきゅあ！』です。
```

Bing Search の最新の検索結果を Azure OpenAI Service に渡して回答を取得できました。
2024/02 現在放送中のプリキュアシリーズは[『わんだふるぷりきゅあ！』](https://ja.wikipedia.org/wiki/%E3%82%8F%E3%82%93%E3%81%A0%E3%81%B5%E3%82%8B%E3%81%B7%E3%82%8A%E3%81%8D%E3%82%85%E3%81%82!)ですので正しく回答が生成できています。

<!-- textlint-disable -->

Bing Search API の結果の中に、[デリシャスパーティプリキュア](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%AA%E3%82%B7%E3%83%A3%E3%82%B9%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E2%99%A1%E3%83%97%E3%83%AA%E3%82%AD%E3%83%A5%E3%82%A2) も入っていましたが、21 作目と 19 作目という情報が入っていたため、Azure OpenAI Service にて正しい回答が生成できたと考えられます。

<!-- textlint-enable -->

---
slug: handson-rag-app
title: Azure 上で作る RAG アプリ開発入門
authors: ks6088ts
tags: [azure, app-service, azure-openai-service]
---

<!-- textlint-disable -->

本記事では Azure 上で RAG アプリを開発するにあたり、必要となる関連リソースとして Azure OpenAI Service, Azure AI Search, Bing Search のベーシックな機能を確認します。実際に、Bing Search API や Azure AI Search と連携した小規模な RAG アプリの作成も行います。

<!-- textlint-enable -->

本記事で掲載している Python スクリプトは、以下のリポジトリに配置しています。
[https://github.com/ks6088ts-labs/recipes/python/handson_rag_apps](https://github.com/ks6088ts-labs/recipes/blob/main/python/handson_rag_apps/README.md)

<!--truncate-->

## Azure 関連サービスのキャッチアップ方法

<!-- textlint-disable -->

サービスを使いこなしてアプリを開発・リリースするためには、いくつかのステップを踏むことが必要です。
私は以下のステップでサービスのキャッチアップをすることが多いです。

<!-- textlint-enable -->

### 1. 仕様を理解する

Microsoft Azure の AI 関連サービスについては、Microsoft Learn に多くのドキュメントが公開されています。基本的に最初に仕様を理解するためには、公式ドキュメントを読むことが重要です。

- MS Learn の概要ページ
- REST API リファレンス
- (詳細の理解が必要な場合) OpenAPI 仕様書

が適切な一次情報です。

日本語のドキュメントが古い場合は英語に切り替えるなどして、最新の情報を確認できる場合があります。
Azure の REST API 仕様は [Azure/azure-rest-api-specs](https://github.com/Azure/azure-rest-api-specs) で公開されています。
過去の API 仕様からの変遷や、ドキュメントが不足している場合は、OpenAPI 仕様書を確認することで補完できます。API リファレンスでは詳細が書ききれていないこともあるため、必要に応じてこちらのリポジトリを参照すると良いです。

<!-- textlint-disable -->

リポジトリの見方ですが、例えば Azure OpenAI Service では、API バージョンごとに仕様は別ファイルとして定義されております。
`2023-12-01-preview` ですと [specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-12-01-preview/inference.json](https://github.com/Azure/azure-rest-api-specs/blob/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-12-01-preview/inference.json)で確認できます。

[Swagger UI](https://petstore.swagger.io/) のデモサイトに Azure OpenAI Service の仕様を読み込ませることで、簡単に API の仕様をグラフィカルに確認できます。
OpenAPI 仕様書の JSON ファイルは GitHub 上で `Raw` ボタンをクリックすることで取得できます。例えば、`https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/cognitiveservices/data-plane/AzureOpenAI/inference/preview/2023-12-01-preview/inference.json` を Swagger UI の `Explore` ボタンに入力することで、API の仕様を確認できます。

#### Azure OpenAI Service の参考情報

- [Azure OpenAI Service とは](https://learn.microsoft.com/ja-jp/azure/ai-services/openai/overview)
- [Azure OpenAI Service の REST API リファレンス](https://learn.microsoft.com/ja-jp/azure/ai-services/openai/reference)
- [specification/cognitiveservices/data-plane/AzureOpenAI](https://github.com/Azure/azure-rest-api-specs/tree/main/specification/cognitiveservices/data-plane/AzureOpenAI)

#### Azure AI Search の参考情報

- [Azure AI Search とは](https://learn.microsoft.com/ja-jp/azure/search/search-what-is-azure-search)
- [Azure AI Search REST API リファレンス](https://learn.microsoft.com/ja-jp/rest/api/searchservice/)
- [specification/search/data-plane/Azure.Search](https://github.com/Azure/azure-rest-api-specs/tree/main/specification/search/data-plane/Azure.Search)

<!-- textlint-enable -->

### 2. 動かしてみる

MS Learn のドキュメントを見ると、"チュートリアル"や"クイックスタート"があります。これらを実際に動かしてみることで、サービスの動作を理解できます。ドキュメントを読むだけだと想像がつかない場合には、実際に動かしてみることが重要です。

例えば Azure の AI 関連リソースについては以下の情報があります。

#### Azure OpenAI Service の参考情報

- [チュートリアル: Azure OpenAI Service の埋め込みとドキュメント検索を確認する](https://learn.microsoft.com/ja-jp/azure/ai-services/openai/tutorials/embeddings?tabs=python%2Ccommand-line&pivots=programming-language-python)
- [クイック スタート: Azure OpenAI Service を使用してテキストの生成を開始する](https://learn.microsoft.com/ja-jp/azure/ai-services/openai/quickstart?tabs=command-line%2Cpython&pivots=programming-language-studio)

#### Azure AI Search の参考情報

- [1 - Python による Web サイトへの検索の追加の概要](https://learn.microsoft.com/ja-jp/azure/search/tutorial-python-overview)
- [クイックスタート: Azure OpenAI Studio で検索インデックスとチャットする](https://learn.microsoft.com/ja-jp/azure/search/search-get-started-retrieval-augmented-generation)

### 3. アプリを作る

SDK 付属のサンプルコードは、各種機能を説明的かつシンプルに実装している場合が多く、非常に参考になります。以下は Python SDK のサンプルの参照リンクです。

- [openai/openai-python](https://github.com/openai/openai-python)
- [Azure AI Search の Python サンプル](https://learn.microsoft.com/ja-jp/azure/search/samples-python)

## Azure OpenAI Service のハンズオン

<!-- textlint-disable -->

外部仕様が確認できたら、なるべくライブラリ等の依存関係が無い状態で素の HTTP リクエストを発行して動作確認すると理解が深まります。
ここでは curl コマンドを使って API を叩いてみます。

curl だけだと複雑なリクエストを送るのに手間がかかるため、OpenAI 社が提供する Python ライブラリ [openai/openai-python](https://github.com/openai/openai-python) を使って、Python から Azure OpenAI Service を利用する方法も紹介します。

[Python を使用して OpenAI エンドポイントと Azure OpenAI エンドポイントを切り替える方法](https://learn.microsoft.com/ja-jp/azure/ai-services/openai/how-to/switching-endpoints)を参考に、以下のプログラムを実行することで、Azure OpenAI Service を利用できます。

ここでは、以下 4 つのユースケースについて、curl コマンドと Python プログラムを使って Azure OpenAI Service を利用する方法を紹介します。

1. シンプルな Chat Completions API 呼び出し
2. Functions を利用した Chat Completions API 呼び出し (非推奨)
3. Tools を利用した Chat Completions API 呼び出し (推奨)
4. JSON mode を利用した Chat Completions API 呼び出し

<!-- textlint-disable -->

Functions は非推奨となり、代わりに tools を利用することが推奨されていますが、Tools を利用した並列関数呼び出しがサポートされるモデル・API バージョンは[Azure OpenAI Service (プレビュー) で関数呼び出しを使用する方法](https://learn.microsoft.com/ja-jp/azure/ai-services/openai/how-to/function-calling?tabs=python)のとおり比較的新しいものに限定されるため、非推奨の functions を利用した例も併せて紹介しております。

<!-- textlint-enable -->

### 1. シンプルな Chat Completions API 呼び出し

#### curl 版

```shell
YOUR_AOAI_NAME="your-aoai-name"
YOUR_DEPLOYMENT_ID="your-deployment-id"
YOUR_API_KEY="your-api-key"

❯ curl -X 'POST' \
    "https://$YOUR_AOAI_NAME.openai.azure.com/openai/deployments/$YOUR_DEPLOYMENT_ID/chat/completions?api-version=2023-12-01-preview" \
    -H "api-key: $YOUR_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
      "messages": [
        {"role": "user", "content": "What is the weather like in Boston and New York?"}
      ]
    }' | jq -r .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1141  100  1018  100   123    721     87  0:00:01  0:00:01 --:--:--   808
{
  "id": "chatcmpl-8p6zGrVKz9baniwtCzlrYuU4dya57",
  "object": "chat.completion",
  "created": 1707192278,
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
          "severity": "safe"
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
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "As an AI, I cannot provide real-time weather updates. However, you can easily check the current weather in Boston and New York by using a weather app, checking a weather website, or asking a virtual assistant like Siri or Alexa."
      },
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
          "severity": "safe"
        },
        "violence": {
          "filtered": false,
          "severity": "safe"
        }
      }
    }
  ],
  "usage": {
    "prompt_tokens": 18,
    "completion_tokens": 47,
    "total_tokens": 65
  },
  "system_fingerprint": "fp_68a7d165bf"
}
```

Azure OpenAI Service の Chat Completions API には逐次部分的にレスポンスを返す stream mode があります。チャット UI などリアルタイム性を要求するアプリにはこちらが有効です。stream をオンにしてリクエストを投げると以下のような挙動になります。

```shell
❯ curl -X 'POST' \
    "https://$YOUR_AOAI_NAME.openai.azure.com/openai/deployments/$YOUR_DEPLOYMENT_ID/chat/completions?api-version=2023-12-01-preview" \
    -H "api-key: $YOUR_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
      "messages": [
        {"role": "user", "content": "What is the weather like in Boston and New York?"}
      ],
      "stream": true
    }'
data: {"id":"","object":"","created":0,"model":"","prompt_filter_results":[{"prompt_index":0,"content_filter_results":{"hate":{"filtered":false,"severity":"safe"},"self_harm":{"filtered":false,"severity":"safe"},"sexual":{"filtered":false,"severity":"safe"},"violence":{"filtered":false,"severity":"safe"}}}],"choices":[]}

data: {"id":"chatcmpl-8uw19bQk3hDKNIlwyK5md5wkLdBgA","object":"chat.completion.chunk","created":1708580079,"model":"gpt-35-turbo","choices":[{"finish_reason":null,"index":0,"delta":{"role":"assistant"},"content_filter_results":{}}],"system_fingerprint":"fp_68a7d165bf"}

data: {"id":"chatcmpl-8uw19bQk3hDKNIlwyK5md5wkLdBgA","object":"chat.completion.chunk","created":1708580079,"model":"gpt-35-turbo","choices":[{"finish_reason":null,"index":0,"delta":{"content":"As"},"content_filter_results":{"hate":{"filtered":false,"severity":"safe"},"self_harm":{"filtered":false,"severity":"safe"},"sexual":{"filtered":false,"severity":"safe"},"violence":{"filtered":false,"severity":"safe"}}}],"system_fingerprint":"fp_68a7d165bf"}

data: {"id":"chatcmpl-8uw19bQk3hDKNIlwyK5md5wkLdBgA","object":"chat.completion.chunk","created":1708580079,"model":"gpt-35-turbo","choices":[{"finish_reason":null,"index":0,"delta":{"content":" of"},"content_filter_results":{"hate":{"filtered":false,"severity":"safe"},"self_harm":{"filtered":false,"severity":"safe"},"sexual":{"filtered":false,"severity":"safe"},"violence":{"filtered":false,"severity":"safe"}}}],"system_fingerprint":"fp_68a7d165bf"}

data: {"id":"chatcmpl-8uw19bQk3hDKNIlwyK5md5wkLdBgA","object":"chat.completion.chunk","created":1708580079,"model":"gpt-35-turbo","choices":[{"finish_reason":null,"index":0,"delta":{"content":" now"},"content_filter_results":{"hate":{"filtered":false,"severity":"safe"},"self_harm":{"filtered":false,"severity":"safe"},"sexual":{"filtered":false,"severity":"safe"},"violence":{"filtered":false,"severity":"safe"}}}],"system_fingerprint":"fp_68a7d165bf"}

data: {"id":"chatcmpl-8uw19bQk3hDKNIlwyK5md5wkLdBgA","object":"chat.completion.chunk","created":1708580079,"model":"gpt-35-turbo","choices":[{"finish_reason":null,"index":0,"delta":{"content":","},"content_filter_results":{"hate":{"filtered":false,"severity":"safe"},"self_harm":{"filtered":false,"severity":"safe"},"sexual":{"filtered":false,"severity":"safe"},"violence":{"filtered":false,"severity":"safe"}}}],"system_fingerprint":"fp_68a7d165bf"}

...

data: {"id":"chatcmpl-8uw19bQk3hDKNIlwyK5md5wkLdBgA","object":"chat.completion.chunk","created":1708580079,"model":"gpt-35-turbo","choices":[{"finish_reason":null,"index":0,"delta":{"content":" winds"},"content_filter_results":{"hate":{"filtered":false,"severity":"safe"},"self_harm":{"filtered":false,"severity":"safe"},"sexual":{"filtered":false,"severity":"safe"},"violence":{"filtered":false,"severity":"safe"}}}],"system_fingerprint":"fp_68a7d165bf"}

data: {"id":"chatcmpl-8uw19bQk3hDKNIlwyK5md5wkLdBgA","object":"chat.completion.chunk","created":1708580079,"model":"gpt-35-turbo","choices":[{"finish_reason":null,"index":0,"delta":{"content":"."},"content_filter_results":{"hate":{"filtered":false,"severity":"safe"},"self_harm":{"filtered":false,"severity":"safe"},"sexual":{"filtered":false,"severity":"safe"},"violence":{"filtered":false,"severity":"safe"}}}],"system_fingerprint":"fp_68a7d165bf"}

data: {"id":"chatcmpl-8uw19bQk3hDKNIlwyK5md5wkLdBgA","object":"chat.completion.chunk","created":1708580079,"model":"gpt-35-turbo","choices":[{"finish_reason":"stop","index":0,"delta":{},"content_filter_results":{}}],"system_fingerprint":"fp_68a7d165bf"}

data: [DONE]
```

#### Python 版

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
        {"role": "user", "content": "What is the weather like in Boston and New York?"},
    ],
)

print(chat_completion)
```

実行結果は以下の通りです。

```shell
❯ python aoai.py
ChatCompletion(id='chatcmpl-8p74TiwwCMW4aLHsDK0Q1bujqYARa', choices=[Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='The current weather in Boston is 57°F with overcast skies. In New York, the temperature is 61°F with cloudy skies.', role='assistant', function_call=None, tool_calls=None), content_filter_results={'hate': {'filtered': False, 'severity': 'safe'}, 'self_harm': {'filtered': False, 'severity': 'safe'}, 'sexual': {'filtered': False, 'severity': 'safe'}, 'violence': {'filtered': False, 'severity': 'safe'}})], created=1707192601, model='gpt-35-turbo', object='chat.completion', system_fingerprint='fp_68a7d165bf', usage=CompletionUsage(completion_tokens=28, prompt_tokens=18, total_tokens=46), prompt_filter_results=[{'prompt_index': 0, 'content_filter_results': {'hate': {'filtered': False, 'severity': 'safe'}, 'self_harm': {'filtered': False, 'severity': 'safe'}, 'sexual': {'filtered': False, 'severity': 'safe'}, 'violence': {'filtered': False, 'severity': 'safe'}}}])
```

### 2. Functions を利用した Chat Completions API 呼び出し (非推奨)

#### curl 版

```shell
YOUR_AOAI_NAME="your-aoai-name"
YOUR_DEPLOYMENT_ID="your-deployment-id"
YOUR_API_KEY="your-api-key"

❯ curl -X 'POST' \
    "https://$YOUR_AOAI_NAME.openai.azure.com/openai/deployments/$YOUR_DEPLOYMENT_ID/chat/completions?api-version=2023-12-01-preview" \
    -H "api-key: $YOUR_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
      "messages": [
        {"role": "user", "content": "What is the weather like in Boston and New York?"}
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
100  1405  100   692  100   713    612    631  0:00:01  0:00:01 --:--:--  1244
{
  "id": "chatcmpl-8p6vmJOIC42rotQPE00q3qlKbbVn4",
  "object": "chat.completion",
  "created": 1707192062,
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
          "severity": "safe"
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
    "prompt_tokens": 85,
    "completion_tokens": 17,
    "total_tokens": 102
  },
  "system_fingerprint": "fp_68a7d165bf"
}
```

#### Python 版

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
        "name": "get_current_weather",
        "description": "Get the current weather in a given location",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The city and state, e.g. San Francisco, CA",
                },
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
            },
            "required": ["location"],
        },
    }
)

chat_completion = client.chat.completions.create(
    model="gpt-35-turbo",
    messages=[
        {"role": "user", "content": "What is the weather like in Boston and New York?"},
    ],
    functions=functions,
)

print(chat_completion)
```

実行結果は以下の通りです。

```shell
❯ python aoai_functions.py
ChatCompletion(id='chatcmpl-8p78fyrbkZLx2cOZxEeZeQqWA2FJT', choices=[Choice(finish_reason='function_call', index=0, logprobs=None, message=ChatCompletionMessage(content=None, role='assistant', function_call=FunctionCall(arguments='{"location":"Boston, MA"}', name='get_current_weather'), tool_calls=None), content_filter_results={})], created=1707192861, model='gpt-35-turbo', object='chat.completion', system_fingerprint='fp_68a7d165bf', usage=CompletionUsage(completion_tokens=17, prompt_tokens=85, total_tokens=102), prompt_filter_results=[{'prompt_index': 0, 'content_filter_results': {'hate': {'filtered': False, 'severity': 'safe'}, 'self_harm': {'filtered': False, 'severity': 'safe'}, 'sexual': {'filtered': False, 'severity': 'safe'}, 'violence': {'filtered': False, 'severity': 'safe'}}}])
```

### 3. Tools を利用した Chat Completions API 呼び出し (推奨)

#### curl 版

```shell
YOUR_AOAI_NAME="your-aoai-name"
YOUR_DEPLOYMENT_ID="your-deployment-id"
YOUR_API_KEY="your-api-key"

❯ curl -X 'POST' \
    "https://$YOUR_AOAI_NAME.openai.azure.com/openai/deployments/$YOUR_DEPLOYMENT_ID/chat/completions?api-version=2023-12-01-preview" \
    -H "api-key: $YOUR_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{
      "messages": [
        {"role": "user", "content": "What is the weather like in Boston and New York?"}
      ],
      "tools": [
        {
          "type": "function",
          "function": {
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
        }
      ]
    }' | jq -r .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1748  100   941  100   807    754    646  0:00:01  0:00:01 --:--:--  1401
{
  "id": "chatcmpl-8p6wgRFekQXcrd1dfDs8qxD4D7GFw",
  "object": "chat.completion",
  "created": 1707192118,
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
          "severity": "safe"
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
      "finish_reason": "tool_calls",
      "index": 0,
      "message": {
        "role": "assistant",
        "tool_calls": [
          {
            "id": "call_vhjgnb3JxWZH8lwKkxAHKAIg",
            "type": "function",
            "function": {
              "name": "get_current_weather",
              "arguments": "{\"location\": \"Boston\", \"unit\": \"celsius\"}"
            }
          },
          {
            "id": "call_iS1plHIkgjE87DveKHMaWi8V",
            "type": "function",
            "function": {
              "name": "get_current_weather",
              "arguments": "{\"location\": \"New York\", \"unit\": \"celsius\"}"
            }
          }
        ]
      },
      "content_filter_results": {}
    }
  ],
  "usage": {
    "prompt_tokens": 85,
    "completion_tokens": 56,
    "total_tokens": 141
  },
  "system_fingerprint": "fp_68a7d165bf"
}
```

#### Python 版

```python title="aoai_tools.py"
import os
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key=os.getenv("YOUR_API_KEY"),
    api_version="2023-12-01-preview",
    azure_endpoint=os.getenv("YOUR_AOAI_ENDPOINT"),
)

tools = []
tools.append(
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "Get the current weather in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA",
                    },
                    "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
                },
                "required": ["location"],
            },
        },
    }
)

chat_completion = client.chat.completions.create(
    model="gpt-35-turbo",
    messages=[
        {"role": "user", "content": "What is the weather like in Boston and New York?"},
    ],
    tools=tools,
)

print(chat_completion)
```

実行結果は以下の通りです。

```shell
❯ python aoai_tools.py
ChatCompletion(id='chatcmpl-8p7Bf2YPutAOCQsGZtrWsBC6fksEq', choices=[Choice(finish_reason='tool_calls', index=0, logprobs=None, message=ChatCompletionMessage(content=None, role='assistant', function_call=None, tool_calls=[ChatCompletionMessageToolCall(id='call_zjvQkpjG6VNvOuIqahk7Izzo', function=Function(arguments='{"location": "Boston", "unit": "celsius"}', name='get_current_weather'), type='function'), ChatCompletionMessageToolCall(id='call_myRctsQpRHmrwsnF5u1HUwxn', function=Function(arguments='{"location": "New York", "unit": "celsius"}', name='get_current_weather'), type='function')]), content_filter_results={})], created=1707193047, model='gpt-35-turbo', object='chat.completion', system_fingerprint='fp_68a7d165bf', usage=CompletionUsage(completion_tokens=56, prompt_tokens=85, total_tokens=141), prompt_filter_results=[{'prompt_index': 0, 'content_filter_results': {'hate': {'filtered': False, 'severity': 'safe'}, 'self_harm': {'filtered': False, 'severity': 'safe'}, 'sexual': {'filtered': False, 'severity': 'safe'}, 'violence': {'filtered': False, 'severity': 'safe'}}}])
```

### 4. JSON mode を利用した Chat Completions API 呼び出し

[Learn how to use JSON mode](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/json-mode?tabs=python) を参考に JSON モードの Chat Completions API を呼び出します。

#### curl 版

```shell
YOUR_AOAI_NAME="your-aoai-name"
YOUR_DEPLOYMENT_ID="your-deployment-id"
YOUR_API_KEY="your-api-key"

❯ curl -X 'POST' \
  "https://$YOUR_AOAI_NAME.openai.azure.com/openai/deployments/$YOUR_DEPLOYMENT_ID/chat/completions?api-version=2023-12-01-preview" \
  -H "api-key: $YOUR_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{
      "response_format": {
        "type": "json_object"
      },
      "messages": [
        {"role": "system", "content": "You are a helpful assistant designed to output JSON."},
        {"role": "user", "content": "What is the weather like in Boston and New York?"}
      ]
    }' | jq -r .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1414  100  1130  100   284    721    181  0:00:01  0:00:01 --:--:--   902
{
  "id": "chatcmpl-8p7nWSptPghX7ss4ko9AI638VBRIG",
  "object": "chat.completion",
  "created": 1707195394,
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
          "severity": "safe"
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
      "finish_reason": "stop",
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "{\n  \"locations\": {\n    \"Boston\": {\n      \"weather\": \"Partly cloudy\",\n      \"temperature\": \"72°F\",\n      \"humidity\": \"56%\",\n      \"wind\": \"10 mph\"\n    },\n    \"New York\": {\n      \"weather\": \"Sunny\",\n      \"temperature\": \"78°F\",\n      \"humidity\": \"50%\",\n      \"wind\": \"8 mph\"\n    }\n  }\n}"
      },
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
          "severity": "safe"
        },
        "violence": {
          "filtered": false,
          "severity": "safe"
        }
      }
    }
  ],
  "usage": {
    "prompt_tokens": 32,
    "completion_tokens": 87,
    "total_tokens": 119
  },
  "system_fingerprint": "fp_68a7d165bf"
}
```

#### Python 版

```python title="aoai_json_mode.py"
import os
from openai import AzureOpenAI

client = AzureOpenAI(
    api_key=os.getenv("YOUR_API_KEY"),
    api_version="2023-12-01-preview",
    azure_endpoint=os.getenv("YOUR_AOAI_ENDPOINT"),
)

chat_completion = client.chat.completions.create(
    model="gpt-35-turbo",
    response_format={"type": "json_object"},
    messages=[
        {
            "role": "system",
            "content": "You are a helpful assistant designed to output JSON.",
        },
        {"role": "user", "content": "What is the weather like in Boston and New York?"},
    ],
)

print(chat_completion.choices[0].message.content)
```

実行結果は以下の通りです。

```shell
❯ python aoai_json_mode.py
{
  "locations": {
    "Boston": {
      "weather": "Partly cloudy",
      "temperature": "57°F"
    },
    "New York": {
      "weather": "Mostly sunny",
      "temperature": "62°F"
    }
  }
}
```

## Bing Search API を使った RAG の例

### Bing Search API のハンズオン

RAG アプリを作成するために、外部の情報源として Bing Search API を利用します。
Bing Search API の外部仕様は [Bing Search API documentation](https://learn.microsoft.com/en-us/bing/search-apis/bing-web-search/) で公開されています。

<!-- textlint-disable -->

[Create Bing Search resource through Azure Marketplace](https://learn.microsoft.com/en-us/bing/search-apis/bing-web-search/create-bing-search-service-resource) の手順に従い、Azure Portal で `Bing Resources` を検索し、リソースを作成します。

<!-- textlint-enable -->

作成すると API キーが発行されるので、それを利用して Bing Search API を利用できます。

#### curl 版

```shell
YOUR_BING_SEARCH_API_KEY="your-bing-search-api-key"

curl "https://api.bing.microsoft.com/v7.0/search?q='Microsoft'" \
    -H "Ocp-Apim-Subscription-Key: $YOUR_BING_SEARCH_API_KEY"
```

#### Python 版

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

### RAG アプリの作成

Azure OpenAI Service と Bing Search API を利用して、RAG アプリを作成します。
curl でも実装は可能ですが、コードが複雑になるためここでは Python で実装した例のみ紹介します。
以下のプログラムは、Bing Search API を利用して検索結果を取得し、それを Azure OpenAI Service に渡して回答を取得するプログラムです。

```python title="rag_bing.py"
import os
from openai import AzureOpenAI
import requests


def get_sources_string(search_term: str):
    """Bing Search APIを使って検索結果のソースを取得する"""
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
    """Azure OpenAI を使ってボットの回答を取得する"""
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
❯ python rag_bing.py
ボットの回答: 最新のプリキュアシリーズのタイトルは『わんだふるぷりきゅあ！』です。
```

Bing Search の最新の検索結果を Azure OpenAI Service に渡して回答を取得できました。
2024/02 現在放送中のプリキュアシリーズは[『わんだふるぷりきゅあ！』](https://ja.wikipedia.org/wiki/%E3%82%8F%E3%82%93%E3%81%A0%E3%81%B5%E3%82%8B%E3%81%B7%E3%82%8A%E3%81%8D%E3%82%85%E3%81%82!)ですので正しく回答が生成できています。

<!-- textlint-disable -->

Bing Search API の結果の中に、[デリシャスパーティプリキュア](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%AA%E3%82%B7%E3%83%A3%E3%82%B9%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E2%99%A1%E3%83%97%E3%83%AA%E3%82%AD%E3%83%A5%E3%82%A2) も入っていましたが、21 作目と 19 作目という情報が入っていたため、Azure OpenAI Service にて正しい回答が生成できたと考えられます。

<!-- textlint-enable -->

## Azure AI Search を使った RAG の例

Azure AI Search の利用方法について参考情報を以下に示します。

- [Azure AI Search REST API リファレンス](https://learn.microsoft.com/ja-jp/rest/api/searchservice/?view=rest-searchservice-2023-11-01)
- [REST API バージョン (Azure AI Search)](https://learn.microsoft.com/ja-jp/rest/api/searchservice/search-service-api-versions)
- [Azure AI Search の各種操作](https://learn.microsoft.com/ja-jp/rest/api/searchservice/operation-groups?view=rest-searchservice-2023-11-01)
- [OpenAPI specification: Azure/azure-rest-api-specs](https://github.com/Azure/azure-rest-api-specs/tree/master/specification/search/data-plane/Azure.Search)
- [SDK サンプルコード / Samples for Azure Cognitive Search client library for Python](https://github.com/Azure/azure-sdk-for-python/tree/main/sdk/search/azure-search-documents/samples)

### Azure AI Search のハンズオン

[ポータルで Azure AI Search サービスを作成する](https://learn.microsoft.com/ja-jp/azure/search/search-create-service-portal) を参考に、Azure Portal で Azure AI Search サービスを作成します。  
Azure AI Search でベクトル検索を利用するためには、別途 Azure OpenAI Service のリソースも必要です。[Azure OpenAI Service リソースを作成してデプロイする](https://learn.microsoft.com/ja-JP/azure/ai-services/openai/how-to/create-resource?pivots=web-portal)を参考にデプロイします。

[python/azure_ai_search_client](https://github.com/ks6088ts-labs/recipes/tree/main/python/azure_ai_search_client) に全体の実装例を掲載しています。

#### curl 版

[API リファレンス / データ プレーン](https://learn.microsoft.com/ja-jp/rest/api/searchservice/operation-groups?view=rest-searchservice-2023-11-01) 以下に各種操作の API とその実行例があります。

<!-- table -->

| API                                                                                                                                                    | 説明                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| [Indexes - Create](https://learn.microsoft.com/en-us/rest/api/searchservice/indexes/create?view=rest-searchservice-2023-11-01&tabs=HTTP)               | インデックスの作成                     |
| [Add, Update or Delete Documents (Azure AI Search REST API)](https://learn.microsoft.com/en-us/rest/api/searchservice/addupdate-or-delete-documents)   | ドキュメントの登録                     |
| [Documents - Search Post](https://learn.microsoft.com/en-us/rest/api/searchservice/documents/search-post?view=rest-searchservice-2023-11-01&tabs=HTTP) | インデックス上にあるドキュメントの検索 |

[ks6088ts-labs/cogsearchctl](https://github.com/ks6088ts-labs/cogsearchctl/tree/main/examples) に配置されたサンプル用 json ファイルを使って以下の通り実行します。  
json フォーマットのリクエストを送信するため、`-d @examples/create_index.json` のように `-d` オプションを使ってリクエストボディを指定します。

```shell
YOUR_AZURE_AI_SEARCH_ENDPOINT="https://youar-azure-ai-search-name.search.windows.net"
YOUR_AZURE_AI_SEARCH_API_KEY="your-azure-ai-search-api-key"
YOUR_AZURE_AI_SEARCH_INDEX_NAME="your-azure-ai-search-index-name"

# インデックスの作成
curl -X PUT "$YOUR_AZURE_AI_SEARCH_ENDPOINT/indexes/$YOUR_AZURE_AI_SEARCH_INDEX_NAME?api-version=2023-11-01" \
  -H "Content-Type: application/json" \
  -H "api-key: $YOUR_AZURE_AI_SEARCH_API_KEY" -d @examples/create_index.json

❯ cat examples/create_index.json
{
  "fields": [
    {
      "name": "content",
      "type": "Edm.String",
      "facetable": false,
      "filterable": false,
      "key": false,
      "retrievable": true,
      ...
    }
  ],
  "suggesters": [
    {
      "name": "sg1",
      "searchMode": "analyzingInfixMatching",
      "sourceFields": ["merged_content"]
    }
  ],
  "scoringProfiles": [],
  "defaultScoringProfile": "",
  "corsOptions": {
    "allowedOrigins": ["*"],
    "maxAgeInSeconds": null
  },
  "analyzers": [],
  "charFilters": [],
  "tokenFilters": [],
  "tokenizers": [],
  "similarity": {
    "@odata.type": "#Microsoft.Azure.Search.BM25Similarity",
    "k1": null,
    "b": null
  }
}
```

#### Python 版

[recipes/python/handson_rag_apps/scripts
/azure_ai_search.py](https://github.com/ks6088ts-labs/recipes/blob/main/python/handson_rag_apps/scripts/azure_ai_search.py) にサンプルコードを掲載しています。  
インデックスの作成、ドキュメントの登録、検索の 3 つの操作を実施する CLI プログラムです。

### Azure Portal から検索する方法

[クイック スタート: Search エクスプローラーを使用して Azure portal でクエリを実行する](https://learn.microsoft.com/ja-jp/azure/search/search-explorer) を参考に、Azure Portal から Azure AI Search を利用します。
呼び出している API は [Documents - Search Post](https://learn.microsoft.com/ja-jp/rest/api/searchservice/documents/search-post?view=rest-searchservice-2023-11-01&tabs=HTTP) となります。

例えば[検索結果内のフィールドを制限](https://learn.microsoft.com/ja-jp/azure/search/search-explorer#limit-fields-in-search-results)したい場合、`select` を利用します。ベクトル検索利用時に embedding フィールドがあると見通しが悪い時などに利用することが多いです。

```shell
{
   "search": "*",
   "select": "content, id, category, sourcefile, sourcepage"
}
```

### RAG のプログラムに Azure AI Search を組み込む

Azure AI Search を利用して RAG アプリを作成します。
RAG のデータソースを取得する箇所が Azure AI Search で置き換わっただけで、その他の処理は変更がありません。

```shell
@app.command()
def rag(query_text="河原町さんの好きなスポーツは何ですか？"):
    index_name = get_index_name()
    documents = asyncio.run(
        search_impl(
            query_text=query_text,
            index_name=index_name,
        )
    )
    sources = []
    for document in documents:
        sources.append(document["content"])
    sources_str = "\n".join(sources)
    client = get_azure_openai_client()
    messages = [
        {"role": "system", "content": "あなたは優秀なヘルプデスクボットです。"},
        {"role": "user", "content": query_text},
    ]
    messages.append({"role": "system", "content": f"Sources: {sources_str}"})

    chat_completion = client.chat.completions.create(
        model=os.getenv("azure_deployment_gpt"),
        messages=messages,
    )
    print(chat_completion.choices[0].message.content)
```

[Azure AI Search / RAG](https://github.com/ks6088ts-labs/recipes/blob/main/python/handson_rag_apps/README.md#rag-1) に実行例がありますが、注目すべき点は Azure AI Search で取得した知識を元に自然な回答が生成されていることです。
Azure AI Search に登録されていない知識に関しては正しく回答できないため、データソースの充実が重要です。

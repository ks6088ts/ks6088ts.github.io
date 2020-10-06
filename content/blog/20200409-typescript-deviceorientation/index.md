---
title: Device Orientation API でセンサー入力を取得する
date: "2020-04-10T09:00:00.000Z"
description: "Device Orientation API でセンサー入力を取得する"
---

[An Introduction to the Device Orientation API](https://code.tutsplus.com/tutorials/an-introduction-to-the-device-orientation-api--cms-21067) を参考に、  
スマホのセンサデータを収集するシステムを構築してみる。  
記事によると Device Orientation API を使えば Web アプリからデバイスのセンサー入力を取得することができる様子。  

# フロントエンド

Web ブラウザからセンサデータを収集するための Web アプリを TypeScript で実装する。  
デバッグの際、デバイスのセンサー入力を PC のブラウザからエミュレーションするため、  
Chrome Dev Tools の Sensors 機能を使った。  
Sensors の Orientation タブを Custom Orientation に変更して、  
表示される端末をマウスドラッグで変更すると device orientation event が発行されて、デバッグできた。  

* [Simulate Device Orientation With Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/device-mode/orientation)

取得したデータは json に変換して axios 等の HTTP POST リクエストを飛ばしてサーバに収集する。  

# サーバ

POST リクエストを受けて保存するだけの簡素なサーバを構築する。  
ここではサーバを Go 言語(gin) で立てた。  
受けた json データの保存方法はどうすべきか。。  
InfluxDB に入れて Grafana で可視化できるとよいのだが、これは未実装。  

# Device Orientation API は非推奨 API

Android スマホの Chrome では動作確認できたが、  
iPad, iPhone では動作確認できなかった。  
どうやらセンサデータはブラウザからデフォルトでは取れなくする変更が最近あった様子。  

> [Added Motion & Orientation settings on iOS to enable the DeviceMotionEvent and DeviceOrientationEvent events.](https://developer.apple.com/documentation/safari_release_notes/safari_12_1_release_notes)

Unity でネイティブアプリ書いたほうがいいのかな。。

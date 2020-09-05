---
title: CMake 
date: "2020-08-28T07:00:00.000Z"
description: "GatsbyJS 製サイトの記事追加を GitHub Actions で自動化したメモ"
---

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=ks6088ts-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=1788470710&linkId=3db6e2fa396b939dc86a184ea1f5b545"></iframe>

# Memo

## Chapter 1. From a Simple Executable to Libraries

**Usage**

```bash
# https://github.com/PacktPublishing/CMake-Cookbook/tree/master/chapter-01/recipe-01/cxx-example
cd chapter-01/recipe-01/cxx-example

# out-of-source build
# `cmake -H. -Bbuild` と同義
mkdir -p build
cd build
cmake ..
# use -G option to switch generators
# `cmake -G Ninja ..`

# クロスプラットフォームに対応したネイティブコマンドのラッパ
cmake --build .

./hello-world
```

**Commands**
```cmake
# [add_library]
# following codes will generate libmessage.a
add_library(message
  STATIC
    Message.hpp
    Message.cpp
  )

# [option]
# `cmake -H. -Bbuild -D USE_LIBRARY=ON` to specify value
option(USE_LIBRARY "Compile sources into a library" OFF)
if(USE_LIBRARY)
  ...
else()
  ...
endif()
```

**help**
```bash
cmake --help-module CMakeDependentOption
```

**options**

- ```CMAKE_<LANG>_COMPILER```
  - 明示的に指定しなくても環境変数で指定されることもあるが、```Explicit is better than implicit``` なので -D オプションで CMAKE_<LANG>_COMPILER を指定すべき。
  - ```cmake -D CMAKE_CXX_COMPILER=clang++ ..```
- ```CMAKE_BUILD_TYPE```
  - ```cmake -D CMAKE_BUILD_TYPE=Debug ..```
- ```CMAKE_<LANG>_FLAGS_<CONFIG>```
  - コンパイルオプションを汚染しないように、```list(APPEND flags "-fPIC" "-Wall")``` でオプション追加するのが良い。
  - ```cmake --build . --VERBOSE=1``` でビルド時のオプションを確認する

```cmake
# 言語のバージョン指定
set_target_properties(animal-farm
  PROPERTIES
    CXX_STANDARD 14
    CXX_EXTENSIONS OFF
    CXX_STANDARD_REQUIRED ON
  )

# 制御構文
# https://cmake.org/cmake/help/latest/command/foreach.html
foreach(_source ${sources_with_lower_optimization})
  get_source_file_property(_flags ${_source} COMPILE_FLAGS)
  message(STATUS "Source ${_source} has the following extra COMPILE_FLAGS: ${_flags}")
endforeach()
```

## Chapter 2. Detecting the Environment

# リンク

* [doc: Running CMake](https://cmake.org/runningcmake/)
* [PacktPublishing/CMake-Cookbook](https://github.com/PacktPublishing/CMake-Cookbook)

URL ?= hello-world
TITLE ?= hello world
DESC ?= $(TITLE)

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.DEFAULT_GOAL := help

# https://stackoverflow.com/a/649462/4457856
define TEMPLATE
---
title: $(TITLE)
date: "$(shell date '+%Y-%m-%dT%H:%M:%S.000Z')"
description: "$(DESC)"
---
endef
export TEMPLATE
# make add URL="url" TITLE="hello world" DESC="desc"
.PHONY: add
add: ## add article
	$(eval DIR ?= content/blog/$(shell date '+%Y%m%d')_$(URL))
	mkdir -p $(DIR) && echo "$$TEMPLATE" > $(DIR)/index.md

.PHONY: server
server: ## run server
	yarn start

.PHONY: install
install: ## install
	yarn install --frozen-lockfile

.PHONY: build
build: ## build
	yarn build

.PHONY: ci
ci: install build ## ci

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.DEFAULT_GOAL := help

.PHONY: install-deps-dev
install-deps-dev: ## install dependencies for development
	@# https://classic.yarnpkg.com/lang/en/docs/install
	@which yarn || npm install -g yarn
	yarn install --frozen-lockfile

.PHONY: fix
fix: ## fix code style
	yarn run fix

.PHONY: lint
lint: ## lint
	yarn run lint

.PHONY: build
build: ## build applications
	yarn run build

.PHONY: ci-test
ci-test: install-deps-dev lint build ## run CI test

.PHONY: run
run: ## run applications
	yarn run start

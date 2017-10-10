export SHELL = /bin/bash

.DEFAULT: help
.PHONY: dist test

help:
	@echo Available targets:
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

bypass:
	@echo Nothing to see here...

# BOOTSTRAPPING

install:
	npm install

# RUNNING (WEB)

dev: ## runs express in dev mode serving with hot replacement
	PORT=$(PORT) \
	BROWSER=none \
	NODE_PATH=src/:src/web/ \
	node_modules/.bin/react-scripts start

# BUILDING

build-dist:
	NODE_PATH=src/web/:src/ \
	node_modules/.bin/react-scripts build

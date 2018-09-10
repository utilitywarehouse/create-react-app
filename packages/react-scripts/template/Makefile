export SHELL = /bin/bash

.DEFAULT: help
.PHONY: dist test ios web android

help:
	@echo Available targets:
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

bypass:
	@echo Nothing to see here...

clean:
	@echo "Removing dependencies"
	-@rm -Rf node_modules || true

# BOOTSTRAPPING

install:
	npm install

link:
	react-native link react-native-vector-icons
	# https://github.com/utilitywarehouse/cerdo-sdk/issues/407#issuecomment-406276949
	
test:
	npm test

storybook:
	npm run storybook

# RUNNING (WEB)

web: ## runs express in dev mode serving with hot replacement
	PORT=$(PORT) \
	BROWSER=none \
	NODE_PATH=src/:src/web/ \
	node_modules/.bin/react-scripts start

bundler:
	npm run bundler

ios:
	npm run ios

android:
	npm run android

# BUILDING

build-dist:
	NODE_PATH=src/web/:src/ \
	node_modules/.bin/react-scripts build

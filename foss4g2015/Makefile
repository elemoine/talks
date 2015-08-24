.PHONY: all
all: serve

.PHONY: install
install: node_modules/reveal.js/js/reveal.js

.PHONY: serve
serve: install
	python -m SimpleHTTPServer

node_modules/reveal.js/js/reveal.js:
	npm install

.PHONY: all
all: install

.PHONY: install
install:
	npm install

.PHONY: serve
serve:
	npm start

.PHONY: serve-tiles
serve-tiles:
	cd ~/src/tilecloud/ && /home/elemoine/.virtualenvs/tilecloud/bin/python ./tc-viewer mapquest.mbtiles

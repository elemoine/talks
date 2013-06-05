

.PHONY: frog2013
frog2013: frog2013/index.html
	cd frog2013 && ./node_modules/.bin/grunt jade copy

.PHONY: gh-pages
gh-pages: .gh-pages
	(cd .gh-pages && \
	 git checkout gh-pages && \
	 git fetch origin && \
	 git  merge --ff-only origin/gh-pages && \
	 mkdir -p frog2013 && \
	 cp -r ../frog2013/.grunt/self/* frog2013 && \
	 cp ../frog2013/ol3.pdf frog2013 && \
	 git add --all . && \
	 git commit -m 'Update' && \
	 git push origin gh-pages)

.gh-pages:
	git clone --branch gh-pages git@github.com:elemoine/talks.git .gh-pages



.PHONY: frog2013
frog2013: frog2013/ol3.html
	cd frog2013 && ./node_modules/.bin/grunt jade copy

.PHONY: foss4g2013
foss4g2013: foss4g2013/geoalchemy.html
	cd foss4g2013 && npm install

.PHONY: gh-pages
gh-pages: .gh-pages
	(cd .gh-pages && \
	 git checkout gh-pages && \
	 git fetch origin && \
	 git  merge --ff-only origin/gh-pages && \
	 mkdir -p frog2013 && \
	 cp -r ../frog2013/.grunt/self/* frog2013 && \
	 cp ../frog2013/ol3.pdf frog2013 && \
	 mkdir -p foss4g2013 && \
	 cp -r ../foss4g2013/.grunt/self/* foss4g2013 && \
	 mkdir -p c2cstaff102013 && \
	 cp -r ../c2cstaff102013/.grunt/self/* c2cstaff102013 && \
	 git add --all . && \
	 git commit -m 'Update' && \
	 git push origin gh-pages)

.gh-pages:
	git clone --branch gh-pages git@github.com:elemoine/talks.git .gh-pages


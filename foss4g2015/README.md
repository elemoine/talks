# FOSS4G 2015 Talks

Talks for the FOSS4G 2015 conference. Available online at
http://erilem.net/talks/foss4g2015/ngeo.html.

Dependencies:

 * Node/NPM
 * Python

Clone the repository:

    $ git clone git@github.com:elemoine/talks.git

Download and install dependencies:

    $ make install

Run the HTTP server:

    $ make serve

Open http://localhost:8000/.

Update the version on erilem.net:

    $ make -C .. foss4g2015 gh-pages

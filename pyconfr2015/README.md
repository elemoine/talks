# PyconFR 2015 / GeoAlchemy talk

GeoAlchemy talk for the PyconFR 2015 conference. Available online at
http://erilem.net/talks/pyconfr2015.

Dependencies:

 * Node/NPM
 * Python

Clone the repository:

    $ git clone git@github.com:elemoine/talks.git

Change to the `pyconfr2015` directory:

    $ cd pyconfr2015

Download and install dependencies:

    $ make install

Run the HTTP server:

    $ make serve

Open http://localhost:8000/.

Update the version on erilem.net:

    $ make -C .. pyconfr2015 gh-pages

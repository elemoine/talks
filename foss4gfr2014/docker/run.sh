#!/bin/bash

courewaredir=$(dirname $(pwd))
docker run -i -t --rm -v $courewaredir:/courseware -p 9090:9090 elemoine/courseware $*

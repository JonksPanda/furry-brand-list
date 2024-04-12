#!/bin/bash

npm run build

docker build -t furry-brand-list_dev .

docker run -d -p 80:80 furry-brand-list_dev 
#!/bin/bash

cd ..

echo "Running docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml pull"
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml pull
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d --build
```
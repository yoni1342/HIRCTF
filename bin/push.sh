#!/bin/bash

# if [[ $1 = "prod" || $1 = "dev" ]] && [[ $2 = 'build' ]]; then
cd ..
# fileEnv="docker-compose.${1}.yaml"
echo "Running docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml build"
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml build
docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml push

# else
# echo 'Need to follow format ./deploy prod|dev build'
# fi

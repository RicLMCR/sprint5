#!/bin/bash

# This script will kill all of the images *USE WITH CATUION*

# Stop and remove all Docker containers
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

# Remove all Docker images
docker rmi $(docker images -q)
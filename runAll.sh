#!/bin/bash

  # Delete existing containers and images
  docker-compose down
  docker rmi $(docker images -q)

  # Build and run new containers with updated code 
  docker-compose up --build
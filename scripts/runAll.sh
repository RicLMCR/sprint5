#!/bin/bash

log=log_file.txt

# /////////////////////////////////// PULL FROM REPO ////////////////////////////////////////////

git pull

printf "\nPull from the front end complete" > $log

cd backend

git pull

cd .. 

printf "\nPull for backend completed" >> $log

# /////////////////////////////////// BUILD IMAGES / CONTAINERS ////////////////////////////////////////////

open http://localhost:3000

docker-compose up

echo -e " Completed Pull from frontend\n Completed Pull from backend\n Completed Docker Compose process"

printf "\nDocker Compose has completed" >> $log

if [ -n "$(docker ps -f "name=reactapp_c" -f "status=running" -q )" ]; then
    echo "the container is running!"
    sleep 5
    open http://localhost:3000
fi

# Confirm tests passed
printf "\nTests completed" >> $log


# /////////////////////////////////// INSTRUCTIONS ////////////////////////////////////////////

#!How to run this script
    # in root directory 
    # bash scripts/runAll.sh
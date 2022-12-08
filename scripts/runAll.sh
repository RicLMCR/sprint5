#!/bin/bash

log=log_file.txt

# npm test

git pull

printf "\nPull from the front end complete" > $log

cd backend

git pull

cd .. 

printf "\nPull for backend completed" >> $log

docker-compose up

echo -e " Completed Pull from frontend\n Completed Pull from backend\n Completed Docker Compose process"

printf "\nDocker Compose has completed" >> $log

# docker exec -ti frontend sh -c "npm run testauto"

if [ -n "$(docker ps -f "name=reactapp_c" -f "status=running" -q )" ]; then
    echo "the container is running!"
    sleep 5
    open http://localhost:3000
fi

#!How to run this script
    # in root directory 
    # bash scripts/runAll.sh
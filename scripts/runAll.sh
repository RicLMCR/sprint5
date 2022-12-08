#!/bin/bash

log=log_file.txt

# npm test

git pull



cd backend

git pull

cd .. 

printf "\nPull from the front end complete" > $log
printf "\nPull for backend completed" >> $log

docker-compose up -d

echo -e " Completed Pull from frontend\n Completed Pull from backend\n Completed Docker Compose process"

# confirm compose complete
printf "\nDocker Compose has completed" >> $log


# docker exec -ti frontend sh -c "npm run testauto"

if [ -n "$(docker ps -f "name=reactapp_c" -f "status=running" -q )" ]; then
    echo "the container is running!"
    sleep 5
    open http://localhost:3000
fi

# confirm tests complete
printf "\nTests completed" >> $log

#!How to run this script
    # in root directory 
    # bash scripts/runAll.sh
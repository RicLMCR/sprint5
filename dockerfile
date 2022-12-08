FROM node:17-alpine

# all commands will be done from this working directory - instead of root
WORKDIR /app

# by adding jso file and npm i before the main copy declaration (line 13) we can cache
# and reduce build times for future iterations
COPY package.json .

RUN npm install

# first '.' means target everything in the local dir
#  second '.' means copy to same location noted above - /app
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

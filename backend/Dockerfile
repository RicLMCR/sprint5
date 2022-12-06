FROM node:19-alpine

COPY package.json .

RUN npm install -g nodemon

RUN npm install -g cors

WORKDIR /app

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
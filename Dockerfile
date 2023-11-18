FROM node:18-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY package*.json ./

RUN apk update && \ 
    apk add --no-cache make gcc g++ && \ 
    apk add --no-cache python3 || apk add --no-cache python && \ 
    yarn install && \ 
    yarn add bcrypt --force && \ 
    apk del make gcc g++

COPY . .

RUN yarn build

EXPOSE 4000
CMD [ "yarn", "start:dev" ]
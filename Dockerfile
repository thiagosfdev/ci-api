FROM node:alpine3.12

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .
COPY --chown=node:node . .

USER node

EXPOSE 8080

ENTRYPOINT [ "npm", "start" ]

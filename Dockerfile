FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --save yarn-install

RUN rm ./package-lock.json

RUN yarn

COPY ./dist .

RUN file="$(ls -1 /usr/app)" && echo $file

EXPOSE 3335

CMD [ "yarn", "start" ]
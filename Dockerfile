FROM node:14-alpine

# update packages
RUN apk update

RUN mkdir -p /app
WORKDIR /app

# copy configs to /app folder
COPY package.json ./
COPY tsconfig.json ./
COPY tslint.json ./

RUN npm install
COPY . /app

EXPOSE 8080

CMD [ "npm", "start" ]
FROM node:18.15.0-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM node:18.15.0-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/ .

EXPOSE 3333

CMD ["yarn", "start"]
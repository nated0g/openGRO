FROM node:16.14.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
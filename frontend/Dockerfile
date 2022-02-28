FROM node:16.14.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY app/package.json ./
RUN npm install 
RUN npm install react-scripts -g

COPY app/ ./

CMD ["npm", "start"]
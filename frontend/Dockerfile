FROM node:16.14.0-alpine as build
WORKDIR /app
COPY ./app ./
RUN yarn
RUN yarn build

FROM nginx:1.21-alpine
ENTRYPOINT ["/docker-entrypoint.sh"]
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
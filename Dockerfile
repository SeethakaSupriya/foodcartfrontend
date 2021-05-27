FROM node:14.16.0-alpine AS build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:1.17.1-alpine AS prod-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
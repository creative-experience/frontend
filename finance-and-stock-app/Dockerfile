FROM node:16.14.2 as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]

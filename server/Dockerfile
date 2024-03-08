# server/Dockerfile
FROM node:18-alpine3.19

RUN npm install -g nodemon

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "app.js"]
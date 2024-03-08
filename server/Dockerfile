# server/Dockerfile
FROM node:18

RUN npm install -g nodemon

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 6247

CMD ["npm", "run", "app.js"]
FROM node:18-alpine

WORKDIR /

COPY package.json .

RUN npm install  
RUN npm install -g json-server

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
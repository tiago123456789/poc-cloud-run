FROM node:20-alpine3.19

WORKDIR app/

COPY package.json package-lock.json ./

COPY . ./

RUN  npm install 

CMD ["node", "index.js"]
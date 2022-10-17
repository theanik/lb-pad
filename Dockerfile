FROM node:alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD ["node", "index.js"]
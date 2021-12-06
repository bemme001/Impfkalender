FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache


COPY . ./

CMD ["npm", "start"]
FROM node:alpine

WORKDIR /var/www/app

COPY . .

ENV PATH /var/www/app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "run", "dev"]
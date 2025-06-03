FROM node:alpine

RUN addgroup portfolio && adduser -S -G portfolio portfolio

USER portfolio

WORKDIR /portfolio

COPY package.json ./

USER root

RUN chown -R portfolio:portfolio .

USER portfolio

RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]

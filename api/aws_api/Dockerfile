FROM node

WORKDIR /usr/src

RUN apt-get update && apt-get install -y vim

COPY ./package*.json ./
COPY ./src ./src
COPY ./.env ./

RUN npm install

COPY ./prisma ./prisma

RUN npx prisma generate

EXPOSE 8080

CMD npx prisma migrate dev --preview-feature && npm run dev

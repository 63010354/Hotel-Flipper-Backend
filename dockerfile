FROM node:18.12.1-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/
COPY .env ./

RUN npm install --only=development

COPY . .

RUN npm install

RUN npx prisma generate

RUN npm run build

FROM node:18.12.1-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npx prisma generate

EXPOSE 4001
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
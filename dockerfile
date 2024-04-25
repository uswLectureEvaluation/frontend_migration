FROM node:20.10.0-alpine as builder
LABEL stage=builder

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY .env ./.env

RUN npm run build

FROM node:20.10.0-alpine as runner

WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next/standalone ./
COPY --from=builder /usr/src/app/.next/static ./.next/static
COPY --from=builder /usr/src/app/.next/cache ./.next/cache

ENV TZ=Asia/Seoul

ENTRYPOINT ["node","server.js"]
EXPOSE 3000
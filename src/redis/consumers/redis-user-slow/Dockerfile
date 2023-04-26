FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src/redis/consumers/redis-user-slow/redis-user-slow.consumer.ts ./
COPY src/redis/redis.module.ts ./

CMD ["npm", "run", "start:redis-user-slow"]

FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src/redis/consumers/redis-user-fast/redis-user.consumer.ts ./
COPY src/redis/redis.module.ts ./

CMD ["npm", "run", "start:redis-user-fast"]

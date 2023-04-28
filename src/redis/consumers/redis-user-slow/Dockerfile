FROM node:14-alpine

WORKDIR /app

# Install TypeScript
RUN npm install -g typescript

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src/redis/consumers/redis-user-slow/redis-user-slow.consumer.ts ./src/redis/consumers/redis-user-slow/

EXPOSE 3006

RUN npm run build

CMD ["npm", "run", "start:redis-user-slow"]

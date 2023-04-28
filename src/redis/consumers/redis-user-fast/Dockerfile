FROM node:14-alpine

WORKDIR /app

# Install TypeScript
RUN npm install -g typescript

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src/redis/consumers/redis-user-fast/redis-user.consumer.ts ./src/redis/consumers/redis-user-fast/

RUN npm run build

CMD ["npm", "run", "start:redis-user-fast"]

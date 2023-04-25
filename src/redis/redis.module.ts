import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { RedisUserService } from './services/redis-user.service';
import { RedisUserController } from './controllers/redis-cache.controller';
import { RedisUserConsumer } from './consumers/redis-user.consumer';
import { RedisUserSlowConsumer } from './consumers/redis-user-slow.consumer';
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'users',
    }),
    BullModule.registerQueue({
      name: 'users-slow',
    }),
  ],
  providers: [RedisUserService, RedisUserConsumer, RedisUserSlowConsumer],
  controllers: [RedisUserController]
})
export class RedisUsersModule {}

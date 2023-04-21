import { Module } from '@nestjs/common';
import { RedisCacheController } from './controllers/redis-cache.controller';
import { RedisCacheService } from './services/redis-cache.service';

@Module({
  imports: [],
  controllers: [RedisCacheController],
  providers: [RedisCacheService],
})
export class RedisModule {}

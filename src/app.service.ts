import { Injectable } from '@nestjs/common';
import { InjectRedis, DEFAULT_REDIS_NAMESPACE } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class AppService {
  constructor() {} // @InjectRedis() private readonly redis: Redis // or // @InjectRedis(DEFAULT_REDIS_NAMESPACE) private readonly redis: Redis

  async set() {
    console.log('123456');
    // return await this.redis.set('key', 'value', 'EX', 10);
  }
}

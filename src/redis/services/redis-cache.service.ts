import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class RedisCacheService {
  constructor(private readonly redisService: RedisService) {}

  async set(key: string, value: string): Promise<string> {
    const client = await this.redisService.getClient();
    return await client.set(key, value);
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { RedisCacheService } from '../services/redis-cache.service';

@Controller()
export class RedisCacheController {
  constructor(private readonly redisCacheService: RedisCacheService) {}

  @Post('cache')
  async setCache(@Body('key') key: string, @Body('value') value: string) {
    console.log('3456');
    return this.redisCacheService.set(key, value);
  }
}

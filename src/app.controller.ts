import { Controller, Get } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Controller()
export class AppController {
  constructor(
    // private readonly redisService: RedisService
    ) {}

  @Get()
  getHello(): string {
    console.log('2345');
    // this.appService.set();
    return 'asdf';
  }
  
  // @Get()
  // async getHello(): Promise<string> {
  //   const client = this.redisService.getClient();
  //   await client.set('hello', 'world');
  //   const result = await client.get('hello');
  //   return `Hello ${result}!`;
  // }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { RedisUserService } from '../services/redis-user.service';
@Controller('users')
export class RedisUserController {
  constructor(private readonly redisUserService: RedisUserService) {}

  @Get()
  async getUsers(): Promise<string> {
    console.log('4444');
    const result = await this.redisUserService.getUsers();
    return result;
  }

  @Post()
  async createUser(@Body() data: any): Promise<any> {
    console.log('createUser controller', data);
    const result = await this.redisUserService.createUser(data.name);
    return result;
  }
}

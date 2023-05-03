import { Injectable } from '@nestjs/common';
import { SlowService } from './slow/services/slow.service';

@Injectable()
export class AppService {
  constructor(private readonly slowService: SlowService) {}

  async createUser(name: any): Promise<any> {
    console.log('name1234', name);
    await this.slowService.addSlowJob({ someData: 'data' });
    console.log('create userService');
    return name;
  }
}

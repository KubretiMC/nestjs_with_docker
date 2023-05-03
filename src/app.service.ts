import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
@Injectable()
export class AppService {
  constructor(@InjectQueue('slow') private readonly slowQueue: Queue) {}

  async createUser(name: any): Promise<any> {
    console.log('name1234', name);
    const job = await this.slowQueue.add('slow-job', {
      someData: 'data',
    });
    console.log('create userService');
    return job.data.name;
  }
}

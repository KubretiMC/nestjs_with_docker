import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class JobService {
  constructor(@InjectQueue('slow') private readonly slowQueue: Queue) {}

  async addJob(data: unknown): Promise<void> {
    console.log('22222', data);
    await this.slowQueue.add('slow-job', data);
  }
}

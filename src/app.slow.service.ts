import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class SlowService {
  constructor(@InjectQueue('slow') private readonly slowQueue: Queue) {}

  async addSlowJob(data: unknown): Promise<void> {
    await this.slowQueue.add('slow-job', data);
  }
}

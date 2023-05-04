import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class JobService {
  constructor(
    @InjectQueue('slow') private readonly slowQueue: Queue,
    @InjectQueue('fast') private readonly fastQueue: Queue,
  ) {}

  async addJob(data: any): Promise<void> {
    console.log('22222', data);
    if (data.name === 'user5') {
      console.log('slower');
      await this.slowQueue.add('slow-job', data);
    } else {
      console.log('faster');
      await this.fastQueue.add('fast-job', data);
    }
  }
}

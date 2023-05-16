import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class JobService {
  constructor(
    @InjectQueue('slow') private readonly slowQueue: Queue,
    @InjectQueue('fast') private readonly fastQueue: Queue,
  ) { }

  async addJob(data: any): Promise<void> {

    if (process.env.REDIS_TLS_URL) {
      const redisUrl = process.env.REDIS_TLS_URL;
      console.log(redisUrl);

      const parsedUrl = new URL(redisUrl);
      console.log(parsedUrl);
    }

    if (data.name === 'user5') {
      await this.slowQueue.add('slow-job', data);
    } else {
      await this.fastQueue.add('fast-job', data);
    }
  }
}

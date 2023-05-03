import { Controller, Get, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { SlowWorker } from './workers/slow.worker';

@Controller()
export class AppController {
  constructor(@InjectQueue('slow') private readonly slowQueue: Queue) {
    console.log('88787878');
  }
  private readonly logger = new Logger(AppController.name);

  @Get('/slow-job')
  async addSlowJob(): Promise<any> {
    console.log('888888888888888888');
    this.logger.log('Hello world!');
    await this.slowQueue.add(SlowWorker.JOB_NAME, { someData: 'data' });
    return 'Hello World!';
  }
}

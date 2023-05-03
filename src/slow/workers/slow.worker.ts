import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { SlowService } from '../services/slow.service';

@Processor('slow')
export class SlowWorker {
  constructor(private readonly slowService: SlowService) {
    console.log('do something4444');
  }

  @Process('slow-job')
  async handleJob(job: Job<unknown>): Promise<void> {
    console.log('666666666666666');
    console.log(`Processing job slow-job, data: ${JSON.stringify(job.data)}`);
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate slow processing
    console.log(`Job slow-job done!`);
    console.log('process.env.HOSTNAME', process.env.HOSTNAME);
  }
}

import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('fast')
export class FastWorker {
  constructor() {
    console.log('12345');
  }

  @Process('fast-job')
  async handleJob(job: Job<unknown>): Promise<void> {
    console.log(`Processing fast-job, data: ${JSON.stringify(job.data)}`);
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate fast processing
    console.log(`Fast-job done!`);
  }
}

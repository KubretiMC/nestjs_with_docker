import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('fast')
export class FastWorker {

  @Process('fast-job')
  async handleJob(job: Job<unknown>): Promise<void> {
    console.log(`Processing job fast-job, data: ${JSON.stringify(job.data)}`);
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate slow processing
    console.log(`Job fast-job done!`);
  }
}

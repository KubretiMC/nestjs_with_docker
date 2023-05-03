import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('slow')
export class SlowWorker {

  @Process('slow-job')
  async handleJob(job: Job<unknown>): Promise<void> {
    console.log(`Processing job slow-job, data: ${JSON.stringify(job.data)}`);
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate slow processing
    console.log(`Job slow-job done!`);
  }
}

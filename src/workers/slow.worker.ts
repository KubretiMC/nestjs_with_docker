import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('slow')
export class SlowWorker {
  constructor() {
    console.log('do something4444');
  }
  static JOB_NAME = 'slow-job';

  @Process(SlowWorker.JOB_NAME)
  async handleJob(job: Job<unknown>): Promise<void> {
    console.log('666666666666666');
    console.log(
      `Processing job ${SlowWorker.JOB_NAME}, data: ${JSON.stringify(
        job.data,
      )}`,
    );
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate slow processing
    console.log(`Job ${SlowWorker.JOB_NAME} done!`);
  }
}

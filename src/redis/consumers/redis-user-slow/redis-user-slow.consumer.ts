import { Processor, Process, OnGlobalQueueActive } from '@nestjs/bull';
import { Job } from 'bull';
@Processor('users-slow')
export class RedisUserSlowConsumer {
  constructor() {
    console.log('do something');
  }
  @OnGlobalQueueActive()
  onActive() {
    console.log(`Processing slow job...`);
  }

  @Process()
  async users(job: Job<unknown>) {
    const user = job.data;
    console.log('user slow', user);
    return {};
  }
}

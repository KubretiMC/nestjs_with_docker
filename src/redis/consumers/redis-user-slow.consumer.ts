import { Processor, Process, OnGlobalQueueActive } from '@nestjs/bull';
import { Job } from 'bull';
import { RedisUserService } from '../services/redis-user.service';

@Processor('users-slow')
export class RedisUserSlowConsumer {
  constructor(private readonly redisUserService: RedisUserService) {}
  @OnGlobalQueueActive()
  onActive() {
    console.log(`Processing slow job...`);
  }

  @Process()
  async users(job: Job<unknown>) {
    // let progress = 0;
    console.log('job slow', job);
    // for (let i = 0; i < 100; i++) {
    //   progress += 1;
    //   await job.progress(progress);
    //   if (progress === 20 || progress === 80) {
    //     console.log('progress slow:', progress);
    //   }
    // }
    const user = job.data;
    console.log('user slow', user);
    return {};
  }
}

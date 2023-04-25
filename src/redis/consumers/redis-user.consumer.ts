import {
  Processor,
  Process,
  OnQueueActive,
  OnGlobalQueueActive,
} from '@nestjs/bull';
import { Job } from 'bull';
import { RedisUserService } from '../services/redis-user.service';

@Processor('users')
export class RedisUserConsumer {
  constructor(private readonly redisUserService: RedisUserService) {}
  @OnGlobalQueueActive()
  onActive() {
    console.log(`Processing fast job...`);
  }

  @Process()
  async users(job: Job<unknown>) {
    const progress = 0;
    console.log('job fast', job);
    // for (let i = 0; i < 100; i++) {
    //   progress += 1;
    // await job.progress(progress);
    // if (progress === 20 || progress === 80) {
    //   console.log('progress:', progress);
    // }
    // }
    const user = job.data;
    console.log('user fast', user);
    return {};
  }
}

import {
  Processor,
  Process,
  OnQueueActive,
  OnGlobalQueueActive,
} from '@nestjs/bull';
import { Job } from 'bull';
import { RedisUserService } from '../../services/redis-user.service';

@Processor('users')
export class RedisUserConsumer {
  constructor(private readonly redisUserService: RedisUserService) {
    console.log('asdf');
  }
  @OnGlobalQueueActive()
  onActive() {
    console.log(`Processing fast job...`);
  }

  @Process()
  async users(job: Job<unknown>) {
    const user = job.data;
    console.log('user fast', user);
    return {};
  }
}

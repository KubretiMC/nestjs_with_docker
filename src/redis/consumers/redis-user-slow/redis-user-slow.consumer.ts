import { Processor, Process, OnGlobalQueueActive } from '@nestjs/bull';
import { Job } from 'bull';
import { RedisUserService } from '../../services/redis-user.service';

@Processor('users-slow')
export class RedisUserSlowConsumer {
  constructor(private readonly redisUserService: RedisUserService) {}
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

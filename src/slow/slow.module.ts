import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SlowWorker } from './workers/slow-worker/slow.worker';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'slow',
      url: process.env.REDIS_URL
    }),
  ],
  controllers: [],
  providers: [SlowWorker],
})
export class SlowModule {}

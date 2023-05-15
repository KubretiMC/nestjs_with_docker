import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SlowWorker } from './workers/slow-worker/slow.worker';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST || 'redis',
        port: Number(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD || null,
      },
    }),
    BullModule.registerQueue({
      name: 'slow',
    }),
  ],
  controllers: [],
  providers: [SlowWorker],
})
export class SlowModule {}

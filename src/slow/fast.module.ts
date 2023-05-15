import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { FastWorker } from './workers/fast-worker/fast.worker';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
        //tls: ???
      },
    }),
    BullModule.registerQueue({
      name: 'fast',
      url: process.env.REDIS_URL
    }),
  ],
  controllers: [],
  providers: [FastWorker],
})
export class FastModule {}

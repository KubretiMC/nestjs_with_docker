import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SlowWorker } from './workers/slow.worker';
import { AppController } from './app.controller';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'slow',
      useFactory: () => ({
        redis: {
          host: 'redis',
          port: 6379,
        },
      }),
    }),
    BullModule.registerQueueAsync({
      name: 'fast',
      useFactory: () => ({
        redis: {
          host: 'redis',
          port: 6379,
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [SlowWorker],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SlowWorker } from './slow/workers/slow.worker';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlowService } from './slow/services/slow.service';

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
    // BullModule.registerQueueAsync({
    //   name: 'fast',
    //   useFactory: () => ({
    //     redis: {
    //       host: 'redis',
    //       port: 6379,
    //     },
    //   }),
    // }),
  ],
  controllers: [AppController],
  providers: [SlowWorker, AppService, SlowService],
})
export class AppModule {}

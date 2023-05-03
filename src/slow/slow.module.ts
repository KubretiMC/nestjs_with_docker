import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SlowController } from './controllers/slow.controller';
import { SlowService } from './services/slow.service';

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
  controllers: [SlowController],
  providers: [SlowService],
})
export class SlowModule {}

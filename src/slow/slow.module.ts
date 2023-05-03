import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { JobController } from './controllers/job.controller';
import { JobService } from './services/job.service';

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
  controllers: [JobController],
  providers: [JobService],
})
export class SlowModule {}

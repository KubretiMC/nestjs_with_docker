import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { JobController } from './controllers/job.controller';
import { JobService } from './services/job.service';
import { SlowWorker } from './workers/slow-worker/slow.worker';
import { FastWorker } from './workers/fast-worker/fast.worker';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    BullModule.registerQueue(
      {
        name: 'slow',
      },
      {
        name: 'fast',
      },
    ),
  ],
  controllers: [
    // JobController
  ],
  providers: [
    //JobService,
    SlowWorker,
    FastWorker,
  ],
})
export class WorkersModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobService } from './slow/services/job.service';
import { JobController } from './slow/controllers/job.controller';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
        //tls: ??
      },
    }),
    BullModule.registerQueue(
      {
        name: 'slow',
        url: process.env.REDIS_URL
      },
      {
        name: 'fast',
        url: process.env.REDIS_URL
      },
    ),
  ],
  controllers: [AppController, JobController],
  providers: [AppService, JobService],
})
export class AppModule {}

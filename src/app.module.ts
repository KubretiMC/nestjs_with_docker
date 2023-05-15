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
        host: process.env.REDIS_HOST || 'redis',
        port: Number(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD || null,
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
  controllers: [AppController, JobController],
  providers: [AppService, JobService],
})
export class AppModule {}

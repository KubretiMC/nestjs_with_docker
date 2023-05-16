import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SlowWorker } from './workers/slow-worker/slow.worker';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        tls: {
          servername: 'ec2-34-192-212-159.compute-1.amazonaws.com',
          rejectUnauthorized: false
        },
        host: 'ec2-34-192-212-159.compute-1.amazonaws.com',
        port: 20270,
        password: 'pf0620e9019feca0f5b594f08d9796936b6bcfa011c33bd68da9de4a058b742ba',
        username: '',
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

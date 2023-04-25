import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { RedisModule } from 'nestjs-redis';
// import { RedisCacheModule } from './redis/redis.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    // RedisCacheModule,
    // RedisModule.register({
    //   host: 'redis', // the hostname of the Redis container in Docker
    //   port: 6379, // the Redis port
    // }),

    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
      }
    }),
    UsersModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

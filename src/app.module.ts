import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RedisModule } from 'nestjs-redis';

@Module({
  imports: [
    RedisModule.register({
      url: 'redis://localhost:6379',
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

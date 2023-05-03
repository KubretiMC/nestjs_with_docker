import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
// import { RedisUserService } from './redis/services/redis-user.service';
// import { Logger } from '@nestjs/common';
import { AppController } from './app.controller';

// const logger = new Logger('Main');

async function bootstrap() {
  console.log('hi1234564444');
  const app = await NestFactory.create(AppModule);
  // app.useLogger(logger); // add this line to use the logger
   // increase the maximum allowed request body size to 10MB
  console.log('process.env.HOSTNAME', process.env.HOSTNAME);
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  console.log('hi23488888');
  const userService = app.get(AppController);
  console.log('eeee');
  await userService.addSlowJob();
  await app.listen(3000);
}
bootstrap();

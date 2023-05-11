import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
import { WorkersModule } from './slow/slow.module';

async function bootstrap() {
  console.log('hi1234564444');
  const app = await NestFactory.create(WorkersModule);
  // app.useLogger(logger); // add this line to use the logger
  // increase the maximum allowed request body size to 10MB
  console.log('process.env.HOSTNAME234', process.env.HOSTNAME);
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  console.log('hi234888881234');


  console.log('eeee');
  await app.listen(6379);
}
bootstrap();

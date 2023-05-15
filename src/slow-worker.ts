import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { SlowModule } from './slow/slow.module';

async function bootstrap() {
  const app = await NestFactory.create(SlowModule);
  // increase the maximum allowed request body size to 10MB
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  const port = process.env.PORT || 3002;
  console.log('port: ', port);
  await app.listen(port);
}
bootstrap();

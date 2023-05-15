import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { FastModule } from './slow/fast.module';

async function bootstrap() {
  const app = await NestFactory.create(FastModule);
  // increase the maximum allowed request body size to 10MB
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  const port = process.env.PORT || 3003;
  console.log('port: ', port);
  await app.listen(port);
}
bootstrap();

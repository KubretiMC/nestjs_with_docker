import { Module } from '@nestjs/common';
import { SlowModule } from './slow/slow.module';

@Module({
  imports: [SlowModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

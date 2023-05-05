import { Module } from '@nestjs/common';
import { WorkersModule } from './slow/slow.module';

@Module({
  imports: [WorkersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

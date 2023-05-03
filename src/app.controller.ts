import { Controller, Get } from '@nestjs/common';
import { SlowService } from './app.slow.service';

@Controller()
export class AppController {
  constructor(private readonly slowService: SlowService) {}

  @Get('/slow-job')
  async addSlowJob(): Promise<any> {
    console.log('11111');
    return result;
  }
}

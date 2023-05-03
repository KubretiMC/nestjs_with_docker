import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('88787878');
  }

  @Get('/slow-job')
  async addSlowJob(): Promise<any> {
    console.log('888888888888888888');
    const result = this.appService.createUser('user5');
    return result;
  }
}

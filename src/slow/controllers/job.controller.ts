import { Controller, Get } from '@nestjs/common';
import { JobService } from '../services/job.service';

@Controller()
export class JobController {
  constructor(private readonly slowService: JobService) {}

  @Get('/slow-job')
  async addJob(): Promise<any> {
    console.log('11111');
    const result = await this.slowService.addJob({ someData: 'data' });
    return result;
  }
}

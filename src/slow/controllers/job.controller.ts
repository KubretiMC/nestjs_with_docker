import { Controller, Body, Post } from '@nestjs/common';
import { JobService } from '../services/job.service';

@Controller()
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post('/job')
  async addJob(@Body() data: any): Promise<any> {
    console.log('11111', data);
    const result = await this.jobService.addJob(data);
    return result;
  }
}

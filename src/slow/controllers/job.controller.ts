import { Controller, Body, Post } from '@nestjs/common';
import { JobService } from '../services/job.service';

@Controller()
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post('/job')
  async addJob(@Body() data: any): Promise<any> {
    const result = await this.jobService.addJob(data);
    return result;
  }
}

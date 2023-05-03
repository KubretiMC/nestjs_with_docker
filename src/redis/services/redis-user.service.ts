import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { SlowWorker } from 'src/slow/workers/slow.worker';

@Injectable()
export class RedisUserService {
  constructor(
    @InjectQueue('users') private readonly usersQueue: Queue,
    @InjectQueue('users-slow') private readonly usersSlowQueue: Queue,
  ) {}

  async getUsers(): Promise<any> {
    try {
      const jobs = await this.usersQueue.getJobs([
        'completed',
        'waiting',
        'active',
        'delayed',
        'failed',
      ]);
      const jobsData = jobs.map((job) => {
        return job.data.name;
      });
      console.log('jobsData', jobsData);
      return jobsData;
    } catch (err) {
      console.log('err', err);
    }
    return 'Hello Users2!';
  }

  async createUser(name: any): Promise<any> {
    let job;
    console.log('555555555555555555555555555555');
    // if (name === 'user5') {
    //   job = await this.usersQueue.add(SlowWorker.JOB_NAME, {
    //     name: name,
    //   });
    // } else {
    //   job = await this.usersSlowQueue.add(SlowWorker.JOB_NAME, {
    //     name: name,
    //   });
    // }
    // console.log('create userService', job);
    return job.data.name;
  }
}

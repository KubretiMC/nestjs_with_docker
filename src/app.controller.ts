import { Controller, Get, Res } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  homePage(@Res() res){
    return res.send("hello");
  }
}

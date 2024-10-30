import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Res() res: Response
  ): void {
    res.status(200).json(`SERVER: ${new Date().getTime()}`);
  }
}
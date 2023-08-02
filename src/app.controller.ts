import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  delete() {
    return this.appService.delete();
  }

  @Get('create')
  async createUser() {
    await this.appService.createUser();
  }
}

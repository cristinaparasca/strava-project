import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Res } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('auth')
  async auth(@Query('code') code:string) {
    return this.userService.authorize(code);
  }
  @Get()
  async login(@Res() res) {
    return res.redirect(await this.userService.login());
  }
}

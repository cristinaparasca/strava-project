import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StravaAthleteService } from './strava-athlete.service';

@Controller('strava-athlete')
export class StravaAthleteController {
  constructor(private readonly stravaAthleteService: StravaAthleteService) {}

  @Get('auth')
  async auth(@Query('code') code:string) {
    return this.stravaAthleteService.authorize(code);
  }
  @Get()
  async login() {
    return this.stravaAthleteService.login();
  }
  @Get('heartRate/:id')
  async heartRate(@Param('id') id:number){
    return this.stravaAthleteService.heartRate(id);
  }
  @Get('activities/:id')
  async activities(@Param('id') id:number){
    return this.stravaAthleteService.activities(id);
  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StravaAthleteService } from './strava-athlete.service';

@Controller('strava-athlete')
export class StravaAthleteController {
  constructor(private readonly stravaAthleteService: StravaAthleteService) {}

  @Get(':id')
  async login(@Param('code') code:number) {
    return this.stravaAthleteService.refreshToken(code);
  }
  @Get('auth')
  async auth(@Query('code') code:string) {
    return this.stravaAthleteService.authorize(code);
  }
  @Get('heartRate/:id')
  async heartRate(@Param('id') id:number){
    return this.stravaAthleteService.heartRate(id);
  }

}

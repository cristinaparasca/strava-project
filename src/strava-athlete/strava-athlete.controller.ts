import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StravaAthleteService } from './strava-athlete.service';
import { CreateStravaAthleteDto } from './dto/create-strava-athlete.dto';
import { UpdateStravaAthleteDto } from './dto/update-strava-athlete.dto';

@Controller('strava-athlete')
export class StravaAthleteController {
  constructor(private readonly stravaAthleteService: StravaAthleteService) {}

  @Get()
  async login() {
    return this.stravaAthleteService.login();
  }
  @Get('auth')
  async auth(@Query('code') code:string) {
    return this.stravaAthleteService.authorize(code);
  }

}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AthleteService } from './athlete.service';
import { CreateAthleteDto } from './dto/create-athlete.dto';
import { UpdateAthleteDto } from './dto/update-athlete.dto';
import { Athlete } from './entities/athlete.entity';

@Controller('athlete')
export class AthleteController {
  constructor(private readonly athleteService: AthleteService) {}

  @Post()
  create(@Body() athlete: Athlete) {
    return this.athleteService.create(athlete);
  }

  @Get()
  findAll() {
    return this.athleteService.findAll();
  }

  /*@Get('activities/:id')
  findOne(@Param('id') id: string) {
    return this.athleteService.getActivities(+id);
  }*/

}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AthleteActivitiesService } from './athlete-activities.service';
import { CreateAthleteActivityDto } from './dto/create-athlete-activity.dto';
import { UpdateAthleteActivityDto } from './dto/update-athlete-activity.dto';
import { AthleteActivity } from './entities/athlete-activity.entity';

@Controller('athlete-activities')
export class AthleteActivitiesController {
  constructor(private readonly athleteActivitiesService: AthleteActivitiesService) {}

  @Post()
  create(@Body() athleteActivity: AthleteActivity) {
    return this.athleteActivitiesService.create(athleteActivity);
  }

  @Get()
  findAll() {
    return this.athleteActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.athleteActivitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() athleteActivity: AthleteActivity) {
    return this.athleteActivitiesService.update(+id, athleteActivity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.athleteActivitiesService.remove(+id);
  }
}

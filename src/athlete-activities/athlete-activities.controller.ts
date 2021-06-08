import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AthleteActivitiesService } from './athlete-activities.service';
import { CreateAthleteActivityDto } from './dto/create-athlete-activity.dto';
import { UpdateAthleteActivityDto } from './dto/update-athlete-activity.dto';
import { AthleteActivity } from './entities/athlete-activity.entity';

@Controller('athlete-activities')
export class AthleteActivitiesController {
  constructor(private readonly athleteActivitiesService: AthleteActivitiesService) {}

  @Post(':user_id')
  async create(@Param('user_id')user_id:string,@Body() athleteActivity: CreateAthleteActivityDto) {
    this.athleteActivitiesService.createStravaActivity(user_id,athleteActivity);
  }

  @Get('strava/:user_id')
  async findAll(@Param('user_id')user_id:string) {
    return this.athleteActivitiesService.activities(user_id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.athleteActivitiesService.findOne(id);
  }

  @Put(':user_id/:activity_id')
  async update(@Param('user_id') user_id: string,@Param('activity_id') activity_id: string, @Body() athleteActivity: UpdateAthleteActivityDto) {
    return this.athleteActivitiesService.updateStravaActivity(user_id,activity_id, athleteActivity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.athleteActivitiesService.remove(+id);
  }
}

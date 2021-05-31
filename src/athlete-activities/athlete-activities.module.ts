import { Module } from '@nestjs/common';
import { AthleteActivitiesService } from './athlete-activities.service';
import { AthleteActivitiesController } from './athlete-activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AthleteActivity } from './entities/athlete-activity.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AthleteActivity])],
  controllers: [AthleteActivitiesController],
  providers: [AthleteActivitiesService]
})
export class AthleteActivitiesModule {}

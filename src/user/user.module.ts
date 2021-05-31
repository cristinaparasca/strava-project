import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Athlete } from 'src/athlete/entities/athlete.entity';
import { AthleteService } from 'src/athlete/athlete.service';
import { AthleteModule } from 'src/athlete/athlete.module';
import { AthleteActivitiesService } from 'src/athlete-activities/athlete-activities.service';
import { AthleteActivity } from 'src/athlete-activities/entities/athlete-activity.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Athlete,AthleteActivity])],
  controllers: [UserController],
  providers: [UserService,AthleteService,AthleteActivitiesService]
})
export class UserModule {}

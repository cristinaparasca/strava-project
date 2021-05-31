import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './entities/club.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { AthleteService } from 'src/athlete/athlete.service';
import { AthleteActivitiesService } from 'src/athlete-activities/athlete-activities.service';

@Module({
  imports:[TypeOrmModule.forFeature([Club,User])],
  controllers: [ClubController],
  providers: [ClubService,UserService,AthleteService,AthleteActivitiesService]
})
export class ClubModule {}

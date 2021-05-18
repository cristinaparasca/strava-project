import { Module } from '@nestjs/common';
import { StravaAthleteService } from './strava-athlete.service';
import { StravaAthleteController } from './strava-athlete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StravaAthlete } from './entities/strava-athlete.entity';

@Module({
  imports:[TypeOrmModule.forFeature([StravaAthlete])],
  controllers: [StravaAthleteController],
  providers: [StravaAthleteService]
})
export class StravaAthleteModule {}

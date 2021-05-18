import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StravaAthleteModule } from './strava-athlete/strava-athlete.module';
import{config} from './config/orm.config'
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot(config),StravaAthleteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

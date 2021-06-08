import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import{config} from './config/orm.config'
import { ConfigModule } from '@nestjs/config';
import { AthleteModule } from './athlete/athlete.module';
import { UserModule } from './user/user.module';
import { AthleteActivitiesModule } from './athlete-activities/athlete-activities.module';
import { ClubModule } from './club/club.module';
import { ClubMembersModule } from './club-members/club-members.module';

@Module({
  imports: [ConfigModule.forRoot(),TypeOrmModule.forRoot(config), UserModule, AthleteModule, AthleteActivitiesModule, ClubModule, ClubMembersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

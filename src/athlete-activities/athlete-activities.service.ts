import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
const strava=require('strava-v3');
import { Repository } from 'typeorm';
import { CreateAthleteActivityDto } from './dto/create-athlete-activity.dto';
import { UpdateAthleteActivityDto } from './dto/update-athlete-activity.dto';
import { AthleteActivity } from './entities/athlete-activity.entity';

@Injectable()
export class AthleteActivitiesService {
  constructor(
    @InjectRepository(AthleteActivity)private athletesActivitiesRepository:Repository<AthleteActivity>,
    private usersService:UserService


  ){}

  async create(athleteActivity:AthleteActivity) {
    const athleteActivities=await this.athletesActivitiesRepository.findOne({id:athleteActivity.id});
    if(athleteActivities==null){
      await this.athletesActivitiesRepository.save(athleteActivity);
    }
    else{
       this.athletesActivitiesRepository.merge(athleteActivities, athleteActivity)
      await this.athletesActivitiesRepository.update(athleteActivities.id,athleteActivities);
    }
  }

  async createStravaActivity(user_id:string,athleteActivity:CreateAthleteActivityDto){
    try{
      const user=await this.usersService.refreshToken(user_id);
      const access_token={access_token:user.access_token};
      const stravaActivity={...access_token,...athleteActivity}
      console.log(stravaActivity);
      const created= strava.activities.create(stravaActivity);
      await this.activities(user_id)
    }
    catch(err){
      throw new BadRequestException(err);
    }
  }

  async activities(user_id:string){
    const user=await this.usersService.refreshToken(user_id) ;
    let activities= [];
    activities=await strava.athlete.listActivities(user);
    for(let i=0;i<activities.length;i++){
      let activity= new AthleteActivity;
      activity=activities[i];
      await this.create(activity);
    }
    return ;
  }

  async findOne(id: string) :Promise<AthleteActivity>{
    try{
      return await this.athletesActivitiesRepository.findOneOrFail(id);
    }
    catch(err){
      throw new NotFoundException(err);
    }
  }

  async updateStravaActivity(user_id: string,activity_id:string, athleteActivity:UpdateAthleteActivityDto): Promise<AthleteActivity> {
    try{
      const user=await this.usersService.refreshToken(user_id);
      const access_token={access_token:user.access_token};
      const id={id:activity_id};
      const body={...access_token,...id,...athleteActivity}
      const updated=await strava.activities.update(body);
      await this.activities(user_id);
      return updated;
    }
    catch(err){
      throw new BadRequestException(err);
    }
  }

  async remove(id: number) {
    try{
      await this.athletesActivitiesRepository.delete(id);
    }
    catch(err){
      throw new NotFoundException(err);
    }
  }
}

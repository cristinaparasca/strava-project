import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAthleteActivityDto } from './dto/create-athlete-activity.dto';
import { UpdateAthleteActivityDto } from './dto/update-athlete-activity.dto';
import { AthleteActivity } from './entities/athlete-activity.entity';

@Injectable()
export class AthleteActivitiesService {
  constructor(
    @InjectRepository(AthleteActivity)
    private athletesActivitiesRepository:Repository<AthleteActivity>

  ){}
  async create(athleteActivity:AthleteActivity) {
    const athleteActivities=await this.athletesActivitiesRepository.findOne({id:athleteActivity.id});
    if(athleteActivities==null){
      await this.athletesActivitiesRepository.save(athleteActivity);
    }
    else{
      await this.athletesActivitiesRepository.merge(athleteActivities, athleteActivity)
      await this.athletesActivitiesRepository.update(athleteActivities.id,athleteActivities);
    }
  }

  findAll() {
    return `This action returns all athleteActivities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} athleteActivity`;
  }

  async update(id: number, athleteActivity:AthleteActivity) {
      const updateResult=await this.athletesActivitiesRepository.update(id,athleteActivity);
        if(updateResult.affected===0){
            throw new NotFoundException(`No athlete whith id=${id}!`)
        }
        return ({message:"Athlete updated succesfully"})
  }

  remove(id: number) {
    return `This action removes a #${id} athleteActivity`;
  }
}

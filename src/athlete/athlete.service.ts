import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Athlete } from './entities/athlete.entity';

@Injectable()
export class AthleteService {
  constructor(
    @InjectRepository(Athlete)
    private athletesRepository:Repository<Athlete>

  ){}
  async create(athlete: Athlete) {
    
    const saved= await this.athletesRepository.save(athlete);
    if(Object.keys(saved).length===0){
      return {message:"User is not saved"}
    }
    return saved[0];
  }
  
  async findAll() {
    return await this.athletesRepository.find({relations:['activities']});
  }
  async findOne(id:number) {
    const athlete=await this.athletesRepository.findOne(id);
    return athlete;
  }
  async update(id: number, athlete:Athlete) {
    const athlet=await this.athletesRepository.findOne(id);
    await this.athletesRepository.merge(athlet, athlete);
    await this.athletesRepository.save(athlet)
  }

}

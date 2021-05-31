import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './entities/club.entity';
const strava=require('strava-v3');

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private clubsRepository:Repository<Club>,
    /*@InjectRepository(User)
    private userRepository:Repository<User>,*/
    private userService:UserService
  ){}
  async create(club_id: number,user_id:number) {
    //const user= await this.userRepository.findOne(user_id);
    const refreshed=await this.userService.refreshToken(user_id);
    /*if(user==null)
      throw new NotFoundException("No user with given id!");
    const club=await strava.clubs.get({id:club_id,access_token:user.access_token});
    await this.clubsRepository.create(club);*/
    return refreshed;
  }

  findAll() {
    return `This action returns all club`;
  }

  findOne(id: number) {
    return `This action returns a #${id} club`;
  }

  update(id: number, updateClubDto: UpdateClubDto) {
    return `This action updates a #${id} club`;
  }

  remove(id: number) {
    return `This action removes a #${id} club`;
  }
}

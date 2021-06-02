import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubMembersService } from 'src/club-members/club-members.service';
import { ClubMember } from 'src/club-members/entities/club-member.entity';
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
    @InjectRepository(User)
    private userRepository:Repository<User>,
    private userService:UserService,
    private clubMemberRepository:ClubMembersService
  ){}
  async create(club_id: number,user_id:number) {
    //const user= await this.userRepository.findOne(user_id);
    let user=await this.userService.refreshToken(user_id);
    if(user==null)
      throw new NotFoundException("No user with given id!");
    const club=await strava.clubs.get({id:club_id,access_token:user.access_token});
    let clubs= await this.clubsRepository.save(club);
    return clubs;
    
  }
  async getMembers(club_id: number,user_id:number){
    let user=await this.userService.refreshToken(user_id);
    if(user==null)
      throw new NotFoundException("No user with given id!");
    let club=await this.clubsRepository.findOne({id:club_id});
    let members=[];
    members=await strava.clubs.listMembers({id:club_id,access_token:user.access_token})
    for(let i=0;i<members.length;i++){
      let member= new ClubMember;
      member=members[i];
      member.club=club;
      await this.clubMemberRepository.create(member);
    }
    return members;
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

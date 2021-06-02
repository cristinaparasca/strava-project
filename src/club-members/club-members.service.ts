import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateClubMemberDto } from './dto/update-club-member.dto';
import { ClubMember } from './entities/club-member.entity';

@Injectable()
export class ClubMembersService {
  constructor(
    @InjectRepository(ClubMember)
    private clubMembersRepository:Repository<ClubMember>

  ){}
  async create(clubmember:ClubMember) {
    const clubmembers=await this.clubMembersRepository.findOne({id:clubmember.id});
    if(clubmembers==null){
      await this.clubMembersRepository.save(clubmember);
    }
    else{
      console.log(clubmember.id)
      await this.clubMembersRepository.merge(clubmembers, clubmember)
      await this.clubMembersRepository.update(clubmembers.id,clubmembers);
    }
  }

  findAll() {
    return `This action returns all clubMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clubMember`;
  }

  update(id: number, updateClubMemberDto: UpdateClubMemberDto) {
    return `This action updates a #${id} clubMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} clubMember`;
  }
}

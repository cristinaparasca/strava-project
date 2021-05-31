import { Injectable } from '@nestjs/common';
import { CreateClubMemberDto } from './dto/create-club-member.dto';
import { UpdateClubMemberDto } from './dto/update-club-member.dto';

@Injectable()
export class ClubMembersService {
  create(createClubMemberDto: CreateClubMemberDto) {
    return 'This action adds a new clubMember';
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

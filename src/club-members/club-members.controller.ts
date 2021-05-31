import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClubMembersService } from './club-members.service';
import { CreateClubMemberDto } from './dto/create-club-member.dto';
import { UpdateClubMemberDto } from './dto/update-club-member.dto';

@Controller('club-members')
export class ClubMembersController {
  constructor(private readonly clubMembersService: ClubMembersService) {}

  @Post()
  create(@Body() createClubMemberDto: CreateClubMemberDto) {
    return this.clubMembersService.create(createClubMemberDto);
  }

  @Get()
  findAll() {
    return this.clubMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubMembersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClubMemberDto: UpdateClubMemberDto) {
    return this.clubMembersService.update(+id, updateClubMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubMembersService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';

@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Post(':user_id')
  create(@Param('user_id') user_id: string) {
    return this.clubService.create(Number(process.env.ASSIST_CLUB_ID),user_id);
  }

  @Get('/members/:user_id')
  async findMembers(@Param('user_id') user_id: string) {
    return this.clubService.getMembers(Number(process.env.ASSIST_CLUB_ID),user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto) {
    return this.clubService.update(+id, updateClubDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { ClubMembersService } from './club-members.service';
import { ClubMembersController } from './club-members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from 'src/club/entities/club.entity';
import { ClubMember } from './entities/club-member.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ClubMember])],
  controllers: [ClubMembersController],
  providers: [ClubMembersService],
  exports:[ClubMembersService]
})
export class ClubMembersModule {}

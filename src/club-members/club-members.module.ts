import { Module } from '@nestjs/common';
import { ClubMembersService } from './club-members.service';
import { ClubMembersController } from './club-members.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from 'src/club/entities/club.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Club])],
  controllers: [ClubMembersController],
  providers: [ClubMembersService]
})
export class ClubMembersModule {}

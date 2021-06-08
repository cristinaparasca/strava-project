import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AthleteModule } from 'src/athlete/athlete.module';
@Module({
  imports:[TypeOrmModule.forFeature([User]),
  AthleteModule
  
],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}

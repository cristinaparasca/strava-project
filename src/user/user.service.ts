import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AthleteService } from 'src/athlete/athlete.service';
import { Athlete } from 'src/athlete/entities/athlete.entity';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
const strava=require('strava-v3');

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository:Repository<User>,
    private athletesRepository:AthleteService
  ){}

  async authorize(code:string){
    
    const auth=await strava.oauth.getToken(code);
    let athlete=new Athlete();
      athlete=auth.athlete;
      athlete=await this.athletesRepository.create(athlete)
      const user={
        token_type:auth.token_type,
        access_token:auth.access_token,
        refresh_token:auth.refresh_token,
        expires_at:auth.expires_at,
        expires_in:auth.expires_in,
        athlete:auth.athlete
      }
    const exists=await this.usersRepository.findOne({access_token:auth.access_token})
    if(!exists){   
      const saved=await this.usersRepository.save(user);
      if(Object.keys(saved).length===0)
        return {message:"Some error ocured at saving athlete"}
      return saved;
    }
    const updated=await this.usersRepository.update(exists.id,auth)
    return updated;
  }

  async login() :Promise<string>{
    console.log(Math.round(Date.now()/1000))
    console.log(process.env.STRAVA_CLIENT_ID)
    strava.config({
      "client_id": process.env.STRAVA_CLIENT_ID,
      "client_secret" : process.env.STRAVA_CLIENT_SECRET,
      "redirect_uri": "http://localhost:3000/user/auth"
    })
    const ceva=strava.oauth.getRequestAccessURL({scope:"profile:write,profile:read_all,read_all,activity:read_all,activity:write"})
    return ceva;
  }

  async refreshToken(id:string){
    const user=await this.usersRepository.findOne({id:id},{relations:['athlete']});
    if(!user)
      throw new NotFoundException("Invalid user_id");
    if(user.expires_at<Math.round(Date.now()/1000)){
      const auth=await strava.oauth.refreshToken(user.refresh_token);
      console.log(auth);
      user.access_token=auth.access_token;
      user.refresh_token=auth.refresh_token;
      user.expires_at=auth.expires_at;
      user.expires_in=auth.expires_in;
      await this.usersRepository.save(user);
    }
    return user;
  }

}

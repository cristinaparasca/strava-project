import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StravaAthlete } from './entities/strava-athlete.entity';
const strava=require('strava-v3');

@Injectable()
export class StravaAthleteService {
  constructor(
    @InjectRepository(StravaAthlete)
    private athletesRepository:Repository<StravaAthlete>,
  ){}

  async authorize(code:string){
    console.log(1);
    const auth=await strava.oauth.getToken(code);
    console.log(auth);
    const user={
      user_id:auth.athlete.id,
      access_token:auth.access_token,
      refresh_token:auth.refresh_token,
      expires_at:auth.expires_at,
      expires_in:auth.expires_in,
      firstname:auth.athlete.firstname,
      lastname:auth.athlete.lastname,
      city:auth.athlete.city,
      state:auth.athlete.state,
      country:auth.athlete.country,
      sex:auth.athlete.sex,
    }
    const exists=await this.athletesRepository.findOne({user_id:auth.athlete.id})
    if(!exists){
      
      const saved=await this.athletesRepository.save(user);
      if(Object.keys(saved).length===0)
        return {message:"Some error ocured at saving athlete"}
      return saved;
    }
    const updated=await this.athletesRepository.update(exists.id,user)
    return updated;
  }

  async login() {
    console.log(Math.round(Date.now()/1000))
    console.log(process.env.STRAVA_CLIENT_ID)
    strava.config({
      "client_id": process.env.STRAVA_CLIENT_ID,
      "client_secret" : process.env.STRAVA_CLIENT_SECRET,
      "redirect_uri": "http://localhost:3000/strava-athlete/auth"
    })
    const ceva=strava.oauth.getRequestAccessURL({scope:"profile:read_all,"})
    return ceva;
  }
  async refreshToken(id:number){
    const user=await this.athletesRepository.findOne({user_id:id});
    if(!user)
      return{message:"Invalid client_id"};
    if(user.expires_at<Math.round(Date.now()/1000)){
      const auth=await strava.oauth.refreshToken(user.refresh_token);
      console.log(auth);
      user.access_token=auth.access_token;
      user.refresh_token=auth.refresh_token;
      user.expires_at=auth.expires_at;
      user.expires_in=auth.expires_in;
      await this.athletesRepository.save(user);
    }
    return user;
  }

  async heartRate(id:number){
    const user=await this.refreshToken(id);
    console.log(user);
    return await strava.athlete.listZones(user);
  }

  async activities(id:number){
    const user=await this.athletesRepository.findOne({user_id:id});
    if(!user){
      return{message:"Invalid client_id"};
    }
    return await strava.clubs.listActivities({access_token:user.access_token,id:207985});
  }

}

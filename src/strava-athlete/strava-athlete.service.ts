import { Injectable } from '@nestjs/common';
const strava=require('strava-v3');

@Injectable()
export class StravaAthleteService {
  
  async authorize(code:string){
    const auth=await strava.oauth.getToken(code);
    return auth;
  }

  async login() {
    strava.config({
      "client_id": process.env.STRAVA_CLIENT_ID,
      "client_secret" : process.env.STRAVA_CLIENT_SECRET,
      "redirect_uri": "http://localhost:3000/strava-athlete/auth"
    })
    const ceva=strava.oauth.getRequestAccessURL({scope:"profile:read_all"})
    return ceva;
  }
}

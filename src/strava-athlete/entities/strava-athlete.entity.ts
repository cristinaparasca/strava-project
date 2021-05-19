import {Column, Entity } from "typeorm";
import{BaseEntity} from "src/base.entity"
@Entity()
export class StravaAthlete extends BaseEntity{
    @Column()
    firstname:string
    @Column()
    lastname:string
    @Column()
    city:string
    @Column()
    state:string
    @Column()
    country:string
    @Column()
    sex:string
    @Column()
    user_id:number
    @Column()
    access_token:string
    @Column()
    refresh_token:string
    @Column()
    expires_at:number
    @Column()
    expires_in:number
    
}

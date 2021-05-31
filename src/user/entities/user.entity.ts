import { Athlete } from "src/athlete/entities/athlete.entity"
import { BaseEntity } from "src/base.entity"
import { Column, Entity, JoinColumn, OneToOne } from "typeorm"
@Entity()
export class User extends BaseEntity{
    @OneToOne(()=>Athlete)
    @JoinColumn()
    athlete:Athlete

    @Column()
    token_type:string

    @Column()
    access_token:string
    
    @Column()
    refresh_token:string

    @Column()
    expires_at:number
    
    @Column()
    expires_in:number
}
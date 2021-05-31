import { AthleteActivitiesModule } from "src/athlete-activities/athlete-activities.module";
import { AthleteActivity } from "src/athlete-activities/entities/athlete-activity.entity";
import { BaseEntity } from "src/base.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Athlete{
    @PrimaryColumn()
    id:number;
    @CreateDateColumn({nullable:true})
    createdAt?:Date;
    @CreateDateColumn({nullable:true})
    updatedAt?:Date;
    @Column({nullable:true})
    username:string
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
    profile_medium:string
    @Column({nullable:true})
    folower_count:number
    @Column({nullable:true})
    friend_count:number
    @Column({nullable:true})
    clubs:number
    @Column({nullable:true})
    bikers:string
    @Column({nullable:true})
    shoes:string
    @Column({nullable:true})
    membership:string
    @Column({nullable:true})
    admin:boolean
    @Column({nullable:true})
    owner:boolean
    @OneToMany(()=>AthleteActivity,athleteactivity=>athleteactivity.athlete,{cascade:true,onUpdate: 'CASCADE'})
    activities:AthleteActivity[]

}

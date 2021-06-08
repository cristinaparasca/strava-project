import { Athlete } from "src/athlete/entities/athlete.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class AthleteActivity{
    @PrimaryColumn()
    id:string;
    @CreateDateColumn({nullable:true})
    createdAt?:Date;
    @CreateDateColumn({nullable:true})
    updatedAt?:Date;
    @ManyToOne(()=>Athlete, athlete=>athlete.activities)
    athlete:Athlete
    @Column()
    name:string
    @Column('float4',{nullable:true})
    distance:number
    @Column()
    moving_time:number
    @Column()
    elapsed_time: number
    @Column()
    total_elevation_gain:number
    @Column({nullable:true})
    type: string
    @Column({nullable:true})
    workout_type: string
    @Column({nullable:true})
    start_date: Date
    @Column({nullable:true})
    end_date: Date
    @Column({nullable:true})
    timezone: string
    @Column({nullable:true})
    utc_offset: number
    @Column({nullable:true})
    start_latlng: number
    @Column({nullable:true})
    end_latlng: number
    @Column({nullable:true})
    location_city:string
    @Column({nullable:true})
    location_state: string
    @Column({nullable:true})
    location_country: string
    @Column({nullable:true})
    trainer: boolean
    @Column({nullable:true})
    commute: boolean
    @Column({nullable:true})
    manual: boolean
    @Column({nullable:true})
    private: boolean
    @Column({nullable:true})
    flagged: boolean
    @Column({nullable:true})
    average_speed: string
    @Column({nullable:true})
    max_speed: string
    @Column({nullable:true})
    average_cadence: number
    @Column({nullable:true})
    average_watts: number
    @Column({nullable:true})
    wighted_average_watts:number
    @Column({nullable:true})
    kilojoules: number
    @Column({nullable:true})
    average_heartrate: number
    @Column({nullable:true})
    max_heartrate: number
    @Column({nullable:true})
    max_watts: number

}


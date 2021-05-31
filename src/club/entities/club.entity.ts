import { BaseEntity } from "src/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Club extends BaseEntity{
    @Column({nullable:true})
    name: string
    @Column({nullable:true})
    profile_medium:string
    @Column({nullable:true})
    profile: string
    @Column({nullable:true})
    cover_photo: string
    @Column({nullable:true})
    covor_photo_small: string
    @Column({nullable:true})
    sport_type: string
    @Column({nullable:true})
    city: string
    @Column({nullable:true})
    state: string
    @Column({nullable:true})
    country:string
    @Column({nullable:true})
    member_count: number
    @Column({nullable:true})
    following_count: number
}

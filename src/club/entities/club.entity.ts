import { BaseEntity } from "src/base.entity";
import { ClubMember } from "src/club-members/entities/club-member.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Club{
    @PrimaryColumn()
    id:number;
    @CreateDateColumn({nullable:true})
    createdAt?:Date;
    @CreateDateColumn({nullable:true})
    updatedAt?:Date;
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
    @OneToMany(()=>ClubMember,clubmember=>clubmember.club,{cascade:true,onUpdate: 'CASCADE'})
    members:ClubMember[]
}

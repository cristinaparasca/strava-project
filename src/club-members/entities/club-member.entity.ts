import { BaseEntity } from "src/base.entity";
import { Club } from "src/club/entities/club.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity()
export class ClubMember extends BaseEntity{
    @Column({nullable:true})
    firstname: string
    @Column({nullable:true})
    lastname: string
    @Column({nullable:true})
    membership: string
    @Column({nullable:true})
    admin:boolean
    @Column({nullable:true})
    owner:boolean
    @ManyToOne(()=>Club, club=>club.members)
    club:Club
}

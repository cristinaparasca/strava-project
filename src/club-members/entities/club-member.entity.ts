import { BaseEntity } from "src/base.entity";
import { Club } from "src/club/entities/club.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class ClubMember extends BaseEntity{
    @Column({nullable:true})
    firstname: string
    @Column({nullable:true})
    lastname: string
    @Column({nullable:true})
    membership: string
    @OneToOne(()=>Club)
    @JoinColumn()
    club:Club
}

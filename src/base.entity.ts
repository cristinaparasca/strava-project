import{CreateDateColumn, PrimaryGeneratedColumn}from 'typeorm';
export class BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @CreateDateColumn({nullable:true})
    createdAt?:Date;
    @CreateDateColumn({nullable:true})
    updatedAt?:Date;
}
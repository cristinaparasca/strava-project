import {TypeOrmModuleOptions} from '@nestjs/typeorm'
export const config:TypeOrmModuleOptions={
    type:'postgres',
    username:'postgres',
    password:'123456',
    port:5432,
    host:'localhost',
    database:'stravadb',
    synchronize:true,
    entities:['dist/**/*.entity{.ts,.js}']
}
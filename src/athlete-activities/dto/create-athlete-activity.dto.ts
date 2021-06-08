import {IsDateString, IsInt, IsMultibyte, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"
export class CreateAthleteActivityDto {

    @IsNotEmpty()@IsString()
    name:string

    @IsNotEmpty()@IsString()
    type:string

    @IsNotEmpty()@IsDateString()
    start_date_local:Date

    @IsNotEmpty()@IsInt()
    elapsed_time:number

    @IsNotEmpty()@IsString()
    description?:string

    @IsOptional()@IsNumber()
    distance?:number

    @IsOptional()@IsInt()
    trainer?:number

    @IsOptional()@IsInt()
    commute?:number

}

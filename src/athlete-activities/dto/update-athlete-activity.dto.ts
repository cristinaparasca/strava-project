import { PartialType } from '@nestjs/mapped-types';
import { CreateAthleteActivityDto } from './create-athlete-activity.dto';

export class UpdateAthleteActivityDto extends PartialType(CreateAthleteActivityDto) {}

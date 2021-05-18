import { PartialType } from '@nestjs/mapped-types';
import { CreateStravaAthleteDto } from './create-strava-athlete.dto';

export class UpdateStravaAthleteDto extends PartialType(CreateStravaAthleteDto) {}

/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { AddCvDto } from './add-cv.dto';

export class UpdateCvDto extends PartialType(AddCvDto) {}

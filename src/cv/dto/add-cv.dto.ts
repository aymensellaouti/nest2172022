/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class AddCvDto {
  @IsString()
  @MinLength(3, {
    message: 'La taille minimale du nom est de 3 caractères',
  })
  @MaxLength(50, {
    message: 'La taille maximale du nom est de 50 caractères',
  })
  name: string;
  @IsString()
  @MinLength(3, {
    message: 'La taille minimale du prenom est de 3 caractères',
  })
  @MaxLength(50, {
    message: 'La taille maximale du prenom est de 50 caractères',
  })
  firstname: string;
  @IsNumber()
  @Type(() => Number)
  @Min(15)
  @Max(75)
  age: number;
  @IsString()
  @MinLength(3, {
    message: 'La taille minimale du nom est de 8 caractères',
  })
  @MaxLength(50, {
    message: 'La taille maximale du nom est de 12 caractères',
  })
  cin: string;
  @IsString()
  @MinLength(3, {
    message: 'La taille minimale est de 3 caractères',
  })
  @MaxLength(50, {
    message: 'La taille maximale est de 50 caractères',
  })
  job: string;
  @IsOptional()
  path: string;
}

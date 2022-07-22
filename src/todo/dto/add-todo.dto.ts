import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AddTodoDto {
  @IsNotEmpty()
  @MinLength(3, {
    message: 'Le nom doit avoir au minimu 3 caractères',
  })
  @MaxLength(10)
  name: string;
  @IsNotEmpty()
  @MinLength(3)
  description: string;
  /*   @IsNumber()
  @Type((typeToTransforme) => Number)
  age: number; */
}

import { PartialType } from '@nestjs/mapped-types';
import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsObject,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { TodoStatusEnum } from '../Model/todo.model';
import { AddTodoDto } from './add-todo.dto';
export class UpdateTodoDto extends PartialType(AddTodoDto) {
  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}

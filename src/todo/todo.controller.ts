import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UsePipes,
} from '@nestjs/common';
import { Request } from 'express';
import { Todo } from './Model/todo.model';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { ValidationPipe } from '@nestjs/common';
import { TodoEntity } from './entities/todo.entity';
import { UpdateResult } from 'typeorm';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos(): Promise<TodoEntity[]> {
    return this.todoService.findAll();
  }
  @Post()
  addTodo(@Body() todo: AddTodoDto): Promise<TodoEntity> {
    return this.todoService.addTodoDB(todo);
  }
  @Get(':id')
  getTodoById(@Param('id') id: number): Promise<TodoEntity> {
    return this.todoService.findByid(id);
  }
  @Delete(':id')
  deleteTodoById(@Param('id') id: number): Promise<UpdateResult> {
    return this.todoService.softDeleteTodoById(id);
  }
  @Patch('restore/:id')
  restoreSoftyDeletedTodo(@Param('id') id: number): Promise<UpdateResult> {
    return this.todoService.restoreDoftDeletedTodoById(id);
  }
  @Put(':id')
  updateTodoById(
    @Param('id') id: number,
    @Body() updatedTodo: UpdateTodoDto,
  ): Promise<TodoEntity> {
    return this.todoService.updateTodoByIdDb(id, updatedTodo);
  }
}

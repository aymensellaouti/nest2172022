import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
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

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos(): Todo[] {
    return this.todoService.getTodos();
  }
  @Post()
  addTodo(@Body() todo: AddTodoDto): Todo {
    console.log(todo);
    return this.todoService.addTodo(todo);
  }
  @Get(':id')
  getTodoById(@Param('id') id: string): Todo {
    return this.todoService.getTodoById(id);
  }
  @Delete(':id')
  deleteTodoById(@Param('id') id: string): { count: number } {
    return this.todoService.deleteTodoById(id);
  }
  @Put(':id')
  updateTodoById(
    @Param('id') id: string,
    @Body() updatedTodo: UpdateTodoDto,
  ): Todo {
    return this.todoService.updateTodoById(id, updatedTodo);
  }
}

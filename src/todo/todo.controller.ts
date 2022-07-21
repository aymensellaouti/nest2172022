import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { Todo } from './Model/todo.model';

@Controller('todo')
export class TodoController {
  private todos: Todo[] = [];
  @Get()
  getTodos(@Req() request: Request): Todo[] {
    console.log(request);

    return this.todos;
  }
}

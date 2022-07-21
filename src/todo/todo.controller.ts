import { Body, Controller, Get, Post, Req } from '@nestjs/common';
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
  @Post()
  addTodo(@Body() todo: Partial<Todo>): Todo {
    const newTodo = new Todo();
    const { name, description } = todo;
    newTodo.name = name;
    newTodo.description = description;
    this.todos.push(newTodo);
    return newTodo;
  }
}

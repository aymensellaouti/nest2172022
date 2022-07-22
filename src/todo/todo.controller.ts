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
} from '@nestjs/common';
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
  @Get(':id')
  getTodoById(@Param('id') id: string): Todo {
    return this.findTodoById(id);
  }
  @Delete(':id')
  deleteTodoById(@Param('id') id: string): { count: number } {
    const todo = this.findTodoById(id);
    this.todos = this.todos.filter((actualTodo) => actualTodo.id != id);
    return { count: 1 };
  }

  @Put(':id')
  updateTodoById(
    @Param('id') id: string,
    @Body() updatedTodo: Partial<Todo>,
  ): Todo {
    const todo = this.findTodoById(id);
    const newTodo = { ...todo, ...updatedTodo };
    todo.description = updatedTodo.description ?? todo.description;
    todo.name = updatedTodo.name ?? todo.name;
    todo.status = updatedTodo.status ?? todo.status;
    return todo;
  }

  private findTodoById(id: string): Todo {
    const todo = this.todos.find((todo) => todo.id == id);
    if (!todo) {
      throw new NotFoundException(`Todo innexistant`);
    }
    return todo;
  }
}

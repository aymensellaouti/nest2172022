import { Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './Model/todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: AddTodoDto): Todo {
    const newTodo = new Todo();
    const { name, description } = todo;
    newTodo.name = name;
    newTodo.description = description;
    this.todos.push(newTodo);
    return newTodo;
  }
  getTodoById(id: string): Todo {
    return this.findTodoById(id);
  }
  deleteTodoById(id: string): { count: number } {
    const todo = this.findTodoById(id);
    this.todos = this.todos.filter((actualTodo) => actualTodo.id != id);
    return { count: 1 };
  }
  updateTodoById(id: string, updatedTodo: Partial<UpdateTodoDto>): Todo {
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

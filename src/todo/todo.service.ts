import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { Todo } from './Model/todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}
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
  addTodoDB(todo: AddTodoDto): Promise<TodoEntity> {
    return this.todoRepository.save(todo);
  }
  getTodoById(id: string): Todo {
    return this.findTodoById(id);
  }
  deleteTodoById(id: string): { count: number } {
    const todo = this.findTodoById(id);
    this.todos = this.todos.filter((actualTodo) => actualTodo.id != id);
    return { count: 1 };
  }
  async softDeleteTodoById(id: number): Promise<UpdateResult> {
    const result = await this.todoRepository.softDelete(id);
    if (result.affected) {
      return result;
    }
    throw new NotFoundException('Todo innexistant');
  }
  async restoreDoftDeletedTodoById(id: number): Promise<UpdateResult> {
    const result = await this.todoRepository.restore(id);
    if (result.affected) {
      return result;
    }
    throw new NotFoundException('Todo innexistant');
  }
  updateTodoById(id: string, updatedTodo: Partial<UpdateTodoDto>): Todo {
    const todo = this.findTodoById(id);
    const newTodo = { ...todo, ...updatedTodo };
    todo.description = updatedTodo.description ?? todo.description;
    todo.name = updatedTodo.name ?? todo.name;
    todo.status = updatedTodo.status ?? todo.status;
    return todo;
  }
  async updateTodoByIdDb(
    id: number,
    updatedTodo: Partial<UpdateTodoDto>,
  ): Promise<TodoEntity> {
    const newTodo = await this.todoRepository.preload({
      id,
      ...updatedTodo,
    });
    if (newTodo) {
      return this.todoRepository.save(newTodo);
    } else {
      throw new NotFoundException('Todo innexistant');
    }
  }

  findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.find();
  }

  async findByid(id: number): Promise<TodoEntity> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (todo) {
      return todo;
    }
    throw new NotFoundException('Todo innexistant :(');
  }

  private findTodoById(id: string): Todo {
    const todo = this.todos.find((todo) => todo.id == id);
    if (!todo) {
      throw new NotFoundException(`Todo innexistant`);
    }
    return todo;
  }
}

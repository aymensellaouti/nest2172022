/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CrudService<T> {
  constructor(private repository: Repository<T>) {}
  findAll(): Promise<T[]> {
    return this.repository.find();
  }

  /* async findOne(id: any): Promise<T> {
    const entity = await this.repository.find({ 
        where: [{id}]
     });
    if (entity) {
      return entity;
    }
    throw new NotFoundException('Entity innexistante :(');
  } */
  create(entity: any): Promise<T> {
    return this.repository.save(entity);
  }
  async update(id: number, partialEntity: any): Promise<T> {
    const newEntity = await this.repository.preload({
      id,
      ...partialEntity,
    });
    if (newEntity) {
      return this.repository.save(newEntity);
    } else {
      throw new NotFoundException('Entité innexistant');
    }
  }

  async softDelete(id: number): Promise<UpdateResult> {
    const result = await this.repository.softDelete(id);
    if (result.affected) {
      return result;
    }
    throw new NotFoundException('Todo innexistant');
  }

  async restore(id: number): Promise<UpdateResult> {
    const result = await this.repository.restore(id);
    if (result.affected) {
      return result;
    }
    throw new NotFoundException('Todo innexistant');
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CrudService } from '../generics/crud.service';
import { Repository } from 'typeorm';
import { CvEntity } from './entites/cv.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CvService extends CrudService<CvEntity> {
  constructor(
    @InjectRepository(CvEntity)
    private cvRepository: Repository<CvEntity>,
  ) {
    super(cvRepository);
  }
  async findOne(id: number): Promise<CvEntity> {
    const entity = await this.cvRepository.findOneBy({
      id,
    });
    if (entity) {
      return entity;
    }
    throw new NotFoundException('Entity innexistante :(');
  }
}

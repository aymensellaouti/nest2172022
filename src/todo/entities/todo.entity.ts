import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatusEnum } from '../Model/todo.model';
import { TimestampEntity } from '../../generics/timestamp.entity';

@Entity('todo')
export class TodoEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 15 })
  name: string;
  @Column({ length: 50 })
  description: string;
  @Column({
    type: 'enum',
    enum: TodoStatusEnum,
    default: TodoStatusEnum.waiting,
  })
  status: TodoStatusEnum;
}

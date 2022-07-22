import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimestampEntity } from '../../generics/timestamp.entity';

@Entity('cv')
export class CvEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50 })
  name: string;
  @Column({ length: 50 })
  firstname: string;
  @Column({ length: 50 })
  job: string;
  @Column({ length: 50, nullable: true })
  path: string;
  @Column({ length: 50 })
  cin: string;
  @Column()
  age: number;
}

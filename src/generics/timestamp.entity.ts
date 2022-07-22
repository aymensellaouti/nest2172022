/* eslint-disable prettier/prettier */
import {
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export class TimestampEntity {
  @CreateDateColumn({
    update: false,
  })
  createdAt: Date;
  @UpdateDateColumn()
  updateddAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @VersionColumn()
  version: number;
}

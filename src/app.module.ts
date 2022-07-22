import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { FirstModule } from './first/first.module';
import { TodoModule } from './todo/todo.module';
import { TodoEntity } from './todo/entities/todo.entity';
import { CvModule } from './cv/cv.module';
import { CvEntity } from './cv/entites/cv.entity';

@Module({
  imports: [
    FirstModule,
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest21722',
      autoLoadEntities: true,
      /*       entities: [TodoEntity, CvEntity], */
      synchronize: true,
      logging: true,
    }),
    CvModule,
  ],
  /*    */
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}

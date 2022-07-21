import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FirstModule } from './first/first.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [FirstModule, TodoModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FirstModule } from './first/first.module';

@Module({
  imports: [FirstModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}

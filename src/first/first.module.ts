import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { TestController } from './test/test.controller';

@Module({
  controllers: [FirstController, TestController],
})
export class FirstModule {}

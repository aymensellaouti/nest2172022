import { Controller, Get } from '@nestjs/common';

@Controller('first')
export class FirstController {
  @Get()
  sayHello(): string {
    return ' Hello :)';
  }
}

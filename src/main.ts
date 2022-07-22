import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express';
import * as morgan from 'morgan';

function logHeadersMiddlware(req: Request, res: Response, next: Function) {
  console.log('In LogHeaders logHeadersMiddlware');
  console.log(req.headers);
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.use(logHeadersMiddlware);
  app.use(morgan('dev'));
  await app.listen(3000);
}
bootstrap();

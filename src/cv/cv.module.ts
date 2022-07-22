import { Module } from '@nestjs/common';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';
import { CvEntity } from './entites/cv.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CvController],
  providers: [CvService],
  imports: [TypeOrmModule.forFeature([CvEntity])],
})
export class CvModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CvService } from './cv.service';
import { CvEntity } from './entites/cv.entity';
import { AddCvDto } from './dto/add-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';

@Controller('cv')
export class CvController {
  constructor(private cvService: CvService) {}
  @Get()
  getAll(): Promise<CvEntity[]> {
    return this.cvService.findAll();
  }
  @Post()
  create(@Body() cv: AddCvDto): Promise<CvEntity> {
    return this.cvService.create(cv);
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<CvEntity> {
    return this.cvService.findOne(id);
  }
  @Delete(':id')
  softDelete(@Param('id') id: number): Promise<UpdateResult> {
    return this.cvService.softDelete(id);
  }
  @Patch('restore/:id')
  restore(@Param('id') id: number): Promise<UpdateResult> {
    return this.cvService.restore(id);
  }
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updatedCv: UpdateCvDto,
  ): Promise<CvEntity> {
    return this.cvService.update(id, updatedCv);
  }
}

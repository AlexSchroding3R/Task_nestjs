import { Controller, Post, Body,  HttpCode, HttpStatus } from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { creattask } from './dto/create-task.dto';

@Controller('api')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post('temp')
  @HttpCode(HttpStatus.CREATED)
  async createtemplate(@Body() createTemplateDto: CreateTemplateDto) {
    try {
      const res = await this.templateService.createtemp(createTemplateDto);
      return { meassage: 'Template added succesfully', res };
    } catch (error) {
      throw error;
    }
  }
  @Post('task')
  @HttpCode(HttpStatus.CREATED)
  async createtask(@Body() creattask: creattask) {
    try {
      const res = await this.templateService.createtask(creattask);
      return { meassage: 'Task added succesfully', res };
    } catch (error) {
      throw error;
    }
  }
}

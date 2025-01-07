import { Controller, Post, Body,  HttpCode, HttpStatus, HttpException} from '@nestjs/common';
import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { creattask } from './dto/create-task.dto';

@Controller('api')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post('temp')
  @HttpCode(HttpStatus.CREATED)
  async createtemplate(@Body() createTemplateDto:CreateTemplateDto
  ) {
    try {
      const res = await this.templateService.createtemp(createTemplateDto);
    // console.log(res);

      return {
        statusCode:HttpStatus.OK,
         meassage: 'Template added succesfully', 
        data:res
       };
 
    } catch (error) {
      throw new HttpException({
        statusCode:HttpStatus.BAD_REQUEST,
        error:error.message,
        message:"Template creation failed",
      },HttpStatus.BAD_REQUEST,
    );
    }
  }
  @Post('task')
  @HttpCode(HttpStatus.CREATED)
  async createtask(@Body() creattask: creattask) {
    try {
      const res = await this.templateService.createtask(creattask);
      return {
        statusCode: HttpStatus.OK,
        meassage: 'Task added succesfully',
        data: res,
      };
    } catch (error) {
    throw new HttpException(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        error: error.message,
        message: 'Template creation failed '
      },
      HttpStatus.BAD_REQUEST,
    );
    console.log(error.message)
    }
  }
}

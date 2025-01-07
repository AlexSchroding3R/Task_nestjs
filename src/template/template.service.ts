import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { InjectModel } from '@nestjs/mongoose';
import { task,TaskDocument, temp, TempDocument } from './schema/temp-schema';
import { Model } from 'mongoose';
import { creattask } from './dto/create-task.dto';

@Injectable()
export class TemplateService {
  constructor(
    @InjectModel(task.name) private readonly TaskModel: Model<TaskDocument>,
    @InjectModel(temp.name) private readonly TempModel: Model<TempDocument>,
  ) {}

  async createtemp(createTemplateDto: CreateTemplateDto): Promise<temp> {
    const res =  new this.TempModel(createTemplateDto);
    return res.save();
  }
  async createtask(creattask: creattask): Promise<task> {
    const res =  new this.TaskModel(creattask);

    return res.save();
  }
}

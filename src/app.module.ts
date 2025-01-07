import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplateController } from './template/template.controller';
import { TemplateService } from './template/template.service';
import { MongooseModule } from '@nestjs/mongoose';
import { task, taskSchema, temp, tempSchema } from './template/schema/temp-schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Assignment'),
    MongooseModule.forFeature([
      {
        name: temp.name,
        schema: tempSchema,
      },
      {
        name:task.name,
        schema:taskSchema, 
      },
    ]),
  ],
  controllers: [AppController,TemplateController],
  providers: [AppService,TemplateService],
})
export class AppModule {}

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class Item {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  Scopeofwork: string;
}
@Schema()
export class temp{
    @Prop({required:true,unique:true,maxlength:150})
    name:string;

    @Prop({maxlength:350})
    Description:string;

    @Prop({ type:[{type:String}],required:true,
         validate:[arr => arr.length> 0,"At least one task is Required"] } )
    task:string[];

}
    
export const tempSchema = SchemaFactory.createForClass(temp);

@Schema()
export class task {
  @Prop({ required: true, unique: true, maxlength: 150 })
  name: string;

  @Prop({ required: true, maxlength: 350 })
  Description: string;

  @Prop({ required: true, enum: ['Manual', 'Dome'] })
  execution: string;

  @Prop({
    required: true,
    type: [Item],
    validate: [(val) => val.length > 0, 'Item array cannot be empty'],
  })
  item: Item[];
}

export const taskSchema = SchemaFactory.createForClass(task);
export type TaskDocument = task & Document;
export type TempDocument = temp & Document;
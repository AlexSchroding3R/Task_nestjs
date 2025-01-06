import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class temp{
    @Prop({require:true,unique:true,maxlength:150})
    name:string;

    @Prop({require:true, maxlength:350})
    Description:string;

    @Prop({ type:[{type:String}], validate:[arr => arr.length> 0,"At least one task is Required"] } )
    task:task[];

}

export const tempSchema = SchemaFactory.createForClass(temp);

@Schema()

export class task{
    @Prop({require:true,unique:true,maxlength:150})
    name:string;

    @Prop({require:true, maxlength:350})
    Description:string;

    @Prop({require:true , enum:['Manual','Dome']})
    execution:string;

    @Prop({ type:[{type:String}], validate:[arr => arr.length> 0,"At least one task is Required"] } )
    item:{name:string,status:boolean}[];

}

export const taskSchema = SchemaFactory.createForClass(task);
export type TaskDocument = task & Document;
export type TempDocument = temp & Document;
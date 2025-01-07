import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';


class Item {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  Scopeofwork: string;
}
export class creattask {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(350)
  Description: string;

  @IsEnum(['Manual', 'Dome'], { message: "should be'Manual/Dome'" })
  execution: string;

  @IsArray()
  @IsNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true }) 
  @Type(() => Item) // Each object is transforming into item values
  item: Item[];
}

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
  @MaxLength(150)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(350)
  @IsString()
  @IsNotEmpty()
  Description: string;

  @IsEnum(['Manual', 'Dome'],{ message: "should be'Manual/Dome'" }) //
  @IsNotEmpty()
  execution: string;

  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => Item) // Each object is transforming into item values
  @IsArray()
  @IsNotEmpty()
  item: Item[];
}

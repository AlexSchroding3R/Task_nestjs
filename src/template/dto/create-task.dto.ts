import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
export class creattask {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(350)
  Description: string;

  @IsEnum(['Manual','Dome'])
  Execution: string;

  @IsArray()
  item: { name: string; state: boolean }[];
}

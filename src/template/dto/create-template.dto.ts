import {
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  ArrayMinSize,
} from 'class-validator';

export class CreateTemplateDto {
  @MaxLength(150)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(350)
  @IsString()
  @IsNotEmpty()
  Description: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsNotEmpty()
  task: string[];
}

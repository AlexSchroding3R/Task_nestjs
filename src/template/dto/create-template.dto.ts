import {
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  ArrayMinSize,
} from 'class-validator';
export class CreateTemplateDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(350)
  Description: string;

  @IsArray()
  @ArrayMinSize(1)
  task: string[];
}

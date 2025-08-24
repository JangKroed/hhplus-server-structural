import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateConcertDto } from './create-concert.dto';

export class UpdateConcertDto extends CreateConcertDto {
  @ApiProperty({ description: '콘서트 아이디', example: '1' })
  @IsNotEmpty({ message: '콘서트 아이디를 입력해주세요.' })
  @IsString()
  @Expose()
  id: string;
}

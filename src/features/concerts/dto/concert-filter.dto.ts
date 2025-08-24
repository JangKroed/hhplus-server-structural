import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ConcertFilterDto {
  @ApiProperty({ description: '콘서트 이름', example: '콘서트 이름' })
  @IsOptional()
  @IsString()
  @Expose()
  name?: string;

  @ApiProperty({ description: '페이지', example: 1, default: 1 })
  @IsOptional()
  @IsNumber()
  @Expose()
  page?: number = 1;

  @ApiProperty({ description: '페이지 크기', example: 10, default: 10 })
  @IsOptional()
  @IsNumber()
  @Expose()
  size?: number = 10;
}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ConcertDetailDto {
  @ApiProperty({ description: '콘서트 아이디', example: '1' })
  @IsNotEmpty({ message: '콘서트 아이디를 입력해주세요.' })
  @IsString()
  @Expose()
  id: string;

  @ApiPropertyOptional({ description: '예약 날짜', example: '20250101' })
  @IsOptional()
  @IsString()
  @Expose()
  reserve_date?: string;
}
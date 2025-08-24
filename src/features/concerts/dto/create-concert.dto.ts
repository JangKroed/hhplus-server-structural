import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateConcertDto {
  @ApiProperty({ description: '콘서트 이름', example: '콘서트 이름' })
  @IsNotEmpty({ message: '콘서트 이름을 입력해주세요.' })
  @IsString()
  @Expose()
  name: string;

  @ApiProperty({ description: '콘서트 설명', example: '콘서트 설명' })
  @IsNotEmpty({ message: '콘서트 설명을 입력해주세요.' })
  @IsString()
  @Expose()
  description: string;

  @ApiProperty({ description: '콘서트 시작일', example: '20250101' })
  @IsNotEmpty({ message: '콘서트 시작일을 입력해주세요.' })
  @IsString()
  @Expose()
  start_date: string;

  @ApiProperty({ description: '콘서트 종료일', example: '20250101' })
  @IsNotEmpty({ message: '콘서트 종료일을 입력해주세요.' })
  @IsString()
  @Expose()
  end_date: string;

  @ApiProperty({
    description: '콘서트 예약시작일',
    example: 'YYYY-MM-DD hh:mm:ss',
  })
  @IsNotEmpty({ message: '콘서트 예약시작일을 입력해주세요.' })
  @IsString()
  @Expose()
  reserve_start_date: Date;

  @ApiPropertyOptional({ description: '콘서트 좌석수', example: 50 })
  @IsOptional()
  @IsNumber()
  @Expose()
  seat_count?: number;

  @ApiPropertyOptional({ description: '콘서트 가격', example: 10000 })
  @IsNotEmpty({ message: '콘서트 가격을 입력해주세요.' })
  @IsNumber()
  @Expose()
  price: number;
}

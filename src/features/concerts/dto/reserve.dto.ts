import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ReserveDto {
  @ApiProperty({ description: '콘서트 아이디', example: '1' })
  @IsNotEmpty({ message: '콘서트 아이디를 입력해주세요.' })
  @IsString()
  @Expose()
  concert_id: string;

  @ApiProperty({ description: '예약 날짜', example: '20250101' })
  @IsNotEmpty({ message: '예약 날짜를 입력해주세요.' })
  @IsString()
  @Expose()
  reserve_date: string;

  @ApiProperty({ description: '좌석 번호', example: 1 })
  @IsNotEmpty({ message: '좌석 번호를 입력해주세요.' })
  @IsNumber()
  @Expose()
  seat_number: number;
}
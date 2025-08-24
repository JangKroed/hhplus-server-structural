import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class PaymentConcertDto {
  @ApiProperty({ description: '예약아이디', example: '1' })
  @IsNotEmpty({ message: '예약아이디를 입력해주세요.' })
  @IsString()
  @Expose()
  reserve_id: string;
}

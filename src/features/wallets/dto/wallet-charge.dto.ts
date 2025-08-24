import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class WalletChargeDto {
  @ApiProperty({ description: '충전액', example: 10000 })
  @IsNotEmpty({ message: '충전액을 입력해주세요.' })
  @IsNumber()
  @Expose()
  amount: number;
}
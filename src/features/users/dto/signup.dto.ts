import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class SignupDto {
  @ApiProperty({ description: '이메일', example: 'test@test.com' })
  @IsNotEmpty({ message: '이메일을 입력해주세요.' })
  @IsEmail({}, { message: '이메일 형식이 올바르지 않습니다.' })
  @Expose()
  email: string;

  @ApiProperty({ description: '이름', example: '홍길동' })
  @IsNotEmpty({ message: '이름을 입력해주세요.' })
  @IsString()
  @Expose()
  name: string;

  @ApiProperty({ description: '비밀번호', example: '1234' })
  @IsNotEmpty({ message: '비밀번호를 입력해주세요.' })
  @IsString()
  @Expose()
  password: string;

  @ApiProperty({ description: '비밀번호 확인', example: '1234' })
  @IsNotEmpty({ message: '비밀번호 확인을 입력해주세요.' })
  @IsString()
  @Expose()
  password_confirm: string;
}

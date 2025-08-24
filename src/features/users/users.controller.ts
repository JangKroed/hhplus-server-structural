import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiTags,
  ApiSecurity,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthTokenGuard } from '../../common/guard/auth-token.guard';
import { SignupDto } from './dto/signup.dto';
import { Public } from '../../common/decorators/auth.decorator';
import { LoginDto } from './dto/login.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 회원가입
  @ApiOperation({
    summary: '회원가입',
    description: '새로운 사용자 계정을 생성합니다.',
  })
  @ApiBody({ type: SignupDto, description: '회원가입 정보' })
  @ApiResponse({
    status: 201,
    description: '회원가입 완료',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: '회원가입 완료',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: '유효성 검사 실패',
    schema: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'number',
          example: 400,
        },
        message: {
          type: 'array',
          items: {
            type: 'string',
          },
          example: [
            '비밀번호가 일치하지 않습니다.',
            '이미 존재하는 이메일입니다.',
            '이메일을 입력해주세요.',
            '이름을 입력해주세요.',
            '비밀번호를 입력해주세요.',
            '비밀번호 확인을 입력해주세요.',
            '이메일 형식이 올바르지 않습니다.',
          ],
        },
      },
    },
  })
  @Public()
  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    if (signupDto.password !== signupDto.password_confirm) {
      throw new BadRequestException({
        statusCode: 400,
        message: '비밀번호가 일치하지 않습니다.',
      });
    }

    if (this.usersService.existEmail(signupDto.email)) {
      throw new BadRequestException({
        statusCode: 400,
        message: '이미 존재하는 이메일입니다.',
      });
    }

    this.usersService.addEmail(signupDto.email);

    return { message: '회원가입 완료' };
  }

  // 로그인
  @ApiOperation({
    summary: '로그인',
    description: '사용자 계정을 로그인합니다.',
  })
  @ApiBody({ type: LoginDto, description: '로그인 정보' })
  @ApiResponse({
    status: 200,
    description: '로그인 완료',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: '로그인 완료',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: '유효성 검사 실패',
    schema: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'number',
          example: 400,
        },
        message: {
          type: 'array',
          items: {
            type: 'string',
          },
          example: [
            '비밀번호가 일치하지 않습니다.',
            '존재하지 않는 이메일입니다.',
            '이메일을 입력해주세요.',
            '비밀번호를 입력해주세요.',
            '이메일 형식이 올바르지 않습니다.',
          ],
        },
      },
    },
  })
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    if (!this.usersService.existEmail(loginDto.email)) {
      throw new BadRequestException({
        statusCode: 400,
        message: '존재하지 않는 이메일입니다.',
      });
    }

    return { message: '로그인 완료' };
  }

  // 유저정보 조회
  @ApiOperation({
    summary: '유저정보 조회',
    description: '사용자 계정 정보를 조회합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '유저정보 조회 완료',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: '유저정보 조회 완료',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: '유저정보 조회 실패',
    schema: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'number',
          example: 401,
        },
        message: {
          type: 'string',
          example: '유저정보 조회 실패',
        },
      },
    },
  })
  @UseGuards(AuthTokenGuard)
  @Post('info')
  async getUserInfo() {
    // TODO - request.user 가져오기
    return { message: '유저정보 조회 완료' };
  }

  // 유저토큰발급
  @ApiOperation({
    summary: '유저토큰재발급',
    description: '사용자 계정 토큰을 재발급합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '유저토큰재발급 완료',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: '유저토큰재발급 완료',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: '유저토큰재발급 실패',
    schema: {
      type: 'object',
      properties: {
        statusCode: {
          type: 'number',
          example: 401,
        },
        message: {
          type: 'string',
          example: '유저토큰재발급 실패',
        },
      },
    },
  })
  @UseGuards(AuthTokenGuard)
  @Post('token')
  async getUserToken() {
    // TODO - 리프레시 토큰 재발급 로직 추가
    return { message: '유저토큰재발급 완료' };
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import {
  ApiTags,
  ApiSecurity,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthTokenGuard } from '../../common/guard/auth-token.guard';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { ConcertFilterDto } from './dto/concert-filter.dto';
import { ConcertDetailDto } from './dto/concert-detail.dto';
import { ReserveDto } from './dto/reserve.dto';
@ApiTags('Concerts')
@ApiSecurity('Authorisation')
@UseGuards(AuthTokenGuard)
@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}

  // 콘서트 추가
  @ApiOperation({
    summary: '콘서트 추가',
    description: '콘서트를 추가합니다.',
  })
  @ApiResponse({
    status: 201,
    description: '콘서트 추가 완료',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: '콘서트 추가 완료',
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
            '콘서트 이름을 입력해주세요.',
            '이미 존재하는 콘서트 이름입니다.',
            '콘서트 설명을 입력해주세요.',
            '콘서트 시작일을 입력해주세요.',
            '콘서트 종료일을 입력해주세요.',
            '콘서트 예약시작일을 입력해주세요.',
            '콘서트 가격을 입력해주세요.',
          ],
        },
      },
    },
  })
  @ApiBody({ type: CreateConcertDto, description: '콘서트 정보' })
  @Post('add')
  async addConcert(@Body() concertDto: CreateConcertDto) {
    if (this.concertsService.hasConcertName(concertDto.name)) {
      throw new BadRequestException({
        statusCode: 400,
        message: '이미 존재하는 콘서트 이름입니다.',
      });
    }

    return { message: '콘서트 추가 완료' };
  }

  // 콘서트 수정
  @ApiOperation({
    summary: '콘서트 수정',
    description: '콘서트를 수정합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '콘서트 수정 완료',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: '콘서트 수정 완료',
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
            '콘서트 아이디를 입력해주세요.',
            '콘서트 아이디가 존재하지 않습니다.',
            '콘서트 이름을 입력해주세요.',
            '이미 존재하는 콘서트 이름입니다.',
            '콘서트 설명을 입력해주세요.',
            '콘서트 시작일을 입력해주세요.',
            '콘서트 종료일을 입력해주세요.',
            '콘서트 예약시작일을 입력해주세요.',
            '콘서트 가격을 입력해주세요.',
          ],
        },
      },
    },
  })
  @ApiBody({ type: UpdateConcertDto, description: '콘서트 정보' })
  @Post('update')
  async updateConcert(@Body() concertDto: UpdateConcertDto) {
    if (this.concertsService.hasConcertName(concertDto.id)) {
      throw new BadRequestException({
        statusCode: 400,
        message: '이미 존재하는 콘서트 이름입니다.',
      });
    }

    if (!this.concertsService.hasConcertId(concertDto.id)) {
      throw new BadRequestException({
        statusCode: 400,
        message: '콘서트 아이디가 존재하지 않습니다.',
      });
    }

    return { message: '콘서트 수정 완료' };
  }

  // 콘서트 목록조회
  @ApiOperation({
    summary: '콘서트 목록조회',
    description: '콘서트 목록을 조회합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '콘서트 목록조회 완료',
    schema: {
      type: 'object',
      properties: {
        list: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', example: '1' },
              name: { type: 'string', example: '콘서트 이름' },
              start_date: { type: 'string', example: '20250101' },
              end_date: { type: 'string', example: '20250101' },
              reserve_start_date: {
                type: 'string',
                example: 'YYYY-MM-DD hh:mm:ss',
              },
              seat_count: { type: 'number', example: 50 },
              price: { type: 'number', example: 10000 },
              create_date: { type: 'string', example: '20250101 00:00:00' },
              update_date: { type: 'string', example: '20250101 00:00:00' },
            },
          },
        },
        total_count: { type: 'number', example: 1 },
      },
    },
  })
  @ApiBody({ type: ConcertFilterDto, description: '콘서트 필터' })
  @Post('list')
  async getConcertList(@Body() filterDto: ConcertFilterDto) {
    return {
      list: [
        {
          id: '1',
          name: '콘서트 이름',
          start_date: '20250101',
          end_date: '20250101',
          reserve_start_date: 'YYYY-MM-DD hh:mm:ss',
          seat_count: 50,
          price: 10000,
          create_date: '20250101 00:00:00',
          update_date: '20250101 00:00:00',
        },
      ],
      total_count: 1,
    };
  }

  // 콘서트 상세 (예약 가능날짜 및 좌석 조회)
  @ApiOperation({
    summary: '콘서트 상세조회',
    description: '콘서트 상세를 조회합니다.',
  })
  @ApiResponse({
    status: 201,
    description: '콘서트 상세조회 완료',
    schema: {
      type: 'object',
      properties: {
        detail: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '1' },
            name: { type: 'string', example: '콘서트 이름' },
            description: { type: 'string', example: '콘서트 설명' },
            start_date: { type: 'string', example: '20250101' },
            end_date: { type: 'string', example: '20250101' },
            reserve_start_date: {
              type: 'string',
              example: 'YYYY-MM-DD hh:mm:ss',
            },
            seat_count: { type: 'number', example: 50 },
            price: { type: 'number', example: 10000 },
            create_date: { type: 'string', example: '20250101 00:00:00' },
            update_date: { type: 'string', example: '20250101 00:00:00' },
            reserve_date_list: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  reserve_date: { type: 'string', example: '20250101' },
                  seat_count: { type: 'number', example: 50 },
                },
              },
            },
            seats: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  seat_number: { type: 'number', example: 1 },
                  reserve_date: { type: 'string', example: '20250101' },
                  status: { type: 'string', example: 'AVAILABLE' },
                },
              },
            },
          },
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
          items: { type: 'string' },
          example: ['콘서트 아이디를 입력해주세요.'],
        },
      },
    },
  })
  @ApiBody({ type: ConcertDetailDto, description: '콘서트 필터' })
  @Post('detail')
  async getConcertDetail(@Body() detailDto: ConcertDetailDto) {
    // TODO - detailDto.reserve_date가 없으면 예약 가능 첫번째일 조회
    return {
      detail: {
        id: '1',
        name: '콘서트 이름',
        description: '콘서트 설명',
        start_date: '20250101',
        end_date: '20250101',
        reserve_start_date: 'YYYY-MM-DD hh:mm:ss',
        seat_count: 50,
        price: 10000,
        create_date: '20250101 00:00:00',
        update_date: '20250101 00:00:00',
        reserve_date_list: [
          {
            reserve_date: '20250101',
            seat_count: 50,
          },
        ],
        seats: [
          {
            seat_number: 1,
            reserve_date: '20250101',
            status: 'AVAILABLE',
          },
          {
            seat_number: 2,
            reserve_date: '20250101',
            status: 'AVAILABLE',
          },
        ],
      },
    };
  }

  // 좌석예약요청
  @ApiOperation({
    summary: '좌석예약요청',
    description: '좌석을 예약합니다.',
  })
  @ApiResponse({
    status: 201,
    description: '좌석예약요청 완료',
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string', example: '좌석예약요청 완료' },
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
          items: { type: 'string' },
          example: [
            '콘서트 아이디를 입력해주세요.',
            '잘못된 콘서트 아이디 입니다.',
            '예약 날짜를 입력해주세요.',
            '예약 가능한 날짜가 없습니다.',
            '잘못된 예약날짜 입니다.',
            '좌석 번호를 입력해주세요.',
            '예약 가능한 좌석이 없습니다.',
            '잘못된 좌석번호 입니다.',
            '좌석이 이미 예약되었습니다.',
            '잔액이 부족합니다.',
            '이미 예약하신 좌석입니다.',
          ],
        },
      },
    },
  })
  @ApiBody({ type: ReserveDto, description: '좌석예약요청' })
  @Post('reserve')
  async reserveSeat(@Body() reserveDto: ReserveDto) {
    // TODO - 좌석예약요청
    return { message: '좌석예약요청 완료' };
  }
}

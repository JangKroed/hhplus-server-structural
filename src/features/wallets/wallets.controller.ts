import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { WalletsService } from './wallets.service';
import {
  ApiTags,
  ApiSecurity,
  ApiResponse,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';
import { AuthTokenGuard } from '../../common/guard/auth-token.guard';
import { WalletChargeDto } from './dto/wallet-charge.dto';
import { PaymentConcertDto } from './dto/payment-concert.dto';

@ApiTags('Wallets')
@ApiSecurity('Authorisation')
@UseGuards(AuthTokenGuard)
@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}

  // 지갑 충전
  @ApiOperation({
    summary: '지갑충전',
    description: '지갑을 충전합니다.',
  })
  @ApiResponse({
    status: 201,
    description: '지갑충전 완료',
    schema: {
      type: 'object',
      properties: {
        wallet_id: { type: 'string', example: '1' },
        user_id: { type: 'string', example: '1' },
        balance: { type: 'number', example: 10000 },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: '유효성 검사 실패',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: {
          type: 'array',
          items: { type: 'string' },
          example: [
            '충전액을 입력해주세요.',
            '충전액은 0보다 큰 숫자여야 합니다.',
          ],
        },
      },
    },
  })
  @ApiBody({ type: WalletChargeDto, description: '지갑 충전' })
  @Post('charge')
  async charge(@Body() chargeDto: WalletChargeDto) {
    if (chargeDto.amount <= 0) {
      throw new BadRequestException({
        statusCode: 400,
        message: '충전액은 0보다 큰 숫자여야 합니다.',
      });
    }

    // TODO - 지갑 없으면 생성

    // TODO - 지갑 충전 로직 추가

    // TODO - 지갑 이력 추가
    return { wallet_id: '1', user_id: '1', balance: chargeDto.amount };
  }

  // 잔액조회
  @ApiOperation({
    summary: '잔액조회',
    description: '잔액을 조회합니다.',
  })
  @ApiResponse({
    status: 201,
    description: '잔액조회 완료',
    schema: {
      type: 'object',
      properties: {
        wallet_id: { type: 'string', example: '1' },
        user_id: { type: 'string', example: '1' },
        balance: { type: 'number', example: 10000 },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: '유효성 검사 실패',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: {
          type: 'array',
          items: { type: 'string' },
          example: ['잘못된 요청입니다.'],
        },
      },
    },
  })
  @Post('balance')
  async getBalance() {
    // TODO - 지갑 없으면 생성
    return { wallet_id: '1', user_id: '1', balance: 10000 };
  }

  // 결제
  @ApiOperation({
    summary: '결제',
    description: '결제를 합니다.',
  })
  @ApiResponse({
    status: 201,
    description: '결제 완료',
    schema: {
      type: 'object',
      properties: {
        wallet_id: { type: 'string', example: '1' },
        user_id: { type: 'string', example: '1' },
        balance: { type: 'number', example: 0 },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: '유효성 검사 실패',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 400 },
        message: {
          type: 'array',
          items: { type: 'string' },
          example: [
            '예약아이디를 입력해주세요.',
            '잘못된 예약아이디 입니다.',
            '잔액이 부족합니다.',
            '예약이 만료되었습니다.',
          ],
        },
      },
    },
  })
  @ApiBody({ type: PaymentConcertDto, description: '결제' })
  @Post('payment/concert')
  async paymentConcert(@Body() paymentDto: PaymentConcertDto) {
    // TODO - 지갑 없으면 생성

    // TODO - 결제 로직 추가

    // TODO - 결제 이력 추가

    return { wallet_id: '1', user_id: '1', balance: 0 };
  }
}

import { Controller, UseGuards } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { AuthTokenGuard } from '../../common/guard/auth-token.guard';

@ApiTags('Wallets')
@ApiSecurity('Authorisation')
@UseGuards(AuthTokenGuard)
@Controller('wallets')
export class WalletsController {
  constructor(private readonly walletsService: WalletsService) {}
}

import { Controller, UseGuards } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { AuthTokenGuard } from '../../common/guard/auth-token.guard';

@ApiTags('Concerts')
@ApiSecurity('Authorisation')
@UseGuards(AuthTokenGuard)
@Controller('concerts')
export class ConcertsController {
  constructor(private readonly concertsService: ConcertsService) {}
}

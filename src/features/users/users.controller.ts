import { Controller, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { AuthTokenGuard } from '../../common/guard/auth-token.guard';

@ApiTags('Users')
@ApiSecurity('Authorisation')
@UseGuards(AuthTokenGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GuardPermissionKey } from '../../common/constants/constants';
import { Request } from 'express';

@Injectable()
export class AuthTokenGuard implements CanActivate {
  public constructor(private readonly reflector: Reflector) {}

  public canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.get<boolean>(
      GuardPermissionKey.PUBLIC,
      context.getHandler()
    );

    if (isPublic) {
      return true;
    }

    const request: Request = context.switchToHttp().getRequest();
    if (request['user'] == null) {
      throw new UnauthorizedException();
    }

    return true;
  }
}

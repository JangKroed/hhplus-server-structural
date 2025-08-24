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

    // TODO - 토큰 검증 로직 추가
    const request: Request = context.switchToHttp().getRequest();
    if (request['user'] == null) {
      console.error('유저정보 조회 실패');
      // throw new UnauthorizedException({
      //   statusCode: 401,
      //   message: '유저정보 조회 실패',
      // });
    }

    return true;
  }
}

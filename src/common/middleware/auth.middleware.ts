import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UsersService } from 'src/features/users/users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  public constructor(private readonly usersService: UsersService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    req['user'] = await this.verifyUser(req);
    next();
  }

  private async verifyUser(req: Request) {
    // 토큰 가져오기
    const tokenKey: any =
      req.query['access_token'] || req.headers['access_token'] || '';
    if (tokenKey == '') {
      return null;
    }
    // await this.usersService.refreshTokenTime(tokenKey, req.ip);

    // const token = await this.usersService.findTokenUserInfo(tokenKey);

    return {
      token: tokenKey,
      // ...token.data,
    };
  }
}

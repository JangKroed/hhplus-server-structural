import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  private email_list: Set<string> = new Set();

  existEmail(email: string) {
    return this.email_list.has(email);
  }

  // 임시
  addEmail(email: string) {
    this.email_list.add(email);
  }
}

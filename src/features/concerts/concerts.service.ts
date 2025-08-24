import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateConcertDto } from './dto/update-concert.dto';

@Injectable()
export class ConcertsService {
  constructor() {}

  private concert_names: Set<string> = new Set();
  private concert_ids: Set<string> = new Set();

  hasConcertName(name: string) {
    return this.concert_names.has(name);
  }

  addConcert(concertDto: UpdateConcertDto) {
    if (this.hasConcertName(concertDto.name)) {
      throw new BadRequestException('이미 존재하는 콘서트 이름입니다.');
    }

    this.concert_names.add(concertDto.name);

    // TODO - 콘서트 추가

    // TODO - 콘서트 예약 가능 날짜 추가 > 시작일 ~ 종료일 사이의 날짜 추가

    // TODO - 콘서트 좌석 추가 > 모든 예약 가능 날짜별 좌석수만큼 추가
  }

  hasConcertId(id: string) {
    return this.concert_ids.has(id);
  }

  addConcertId(id: string) {
    if (this.hasConcertId(id)) {
      throw new BadRequestException('이미 존재하는 콘서트 아이디입니다.');
    }

    this.concert_ids.add(id);
  }
}

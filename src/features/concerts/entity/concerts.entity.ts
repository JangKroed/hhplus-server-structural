import { TokensEntity } from 'src/features/users/entity/tokens.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ConcertTimesEntity } from './concert-times.entity';
import { ReservesEntity } from './reserves.entity';

@Entity({ name: 'concerts' })
export class ConcertsEntity {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'varchar', length: 8 })
  start_date: Date;

  @Column({ type: 'varchar', length: 8 })
  end_date: Date;

  @Column({ type: 'timestamp' })
  reserve_start_date: Date;

  @Column()
  seat_count: number;

  @Column()
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  create_date: Date;

  @Column()
  creater_id: string;

  @UpdateDateColumn({ type: 'timestamp' })
  update_date: Date;

  @Column()
  updater_id: string;

  @OneToMany(() => TokensEntity, (token) => token.concert_id)
  tokens: TokensEntity[];

  @OneToMany(() => ReservesEntity, (reserve) => reserve.concert_id)
  reserves: ReservesEntity[];

  @OneToMany(() => ConcertTimesEntity, (concert_time) => concert_time.id)
  concert_times: ConcertTimesEntity[];
}

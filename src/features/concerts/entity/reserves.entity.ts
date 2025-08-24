import { UsersEntity } from 'src/features/users/entity/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ConcertsEntity } from './concerts.entity';
import { ReserveHistoriesEntity } from './reserve-histories.entity';

@Entity({ name: 'reserves' })
export class ReservesEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ManyToOne(() => ConcertsEntity, (concert) => concert.id)
  concert_id: string;

  @ManyToOne(() => UsersEntity, (user) => user.uid)
  user_id: string;

  @Column()
  seat_number: number;

  @Column()
  reserve_date: Date;

  @Column()
  status: string;

  @CreateDateColumn({ type: 'timestamp' })
  create_date: Date;

  @Column()
  creater_id: string;

  @UpdateDateColumn({ type: 'timestamp' })
  update_date: Date;

  @Column()
  updater_id: string;

  @OneToMany(
    () => ReserveHistoriesEntity,
    (reserve_history) => reserve_history.id
  )
  reserve_histories: ReserveHistoriesEntity[];
}

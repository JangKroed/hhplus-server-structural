import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'reserve_histories' })
export class ReserveHistoriesEntity {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  concert_id: string;

  @Column()
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
}

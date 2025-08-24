import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { UsersEntity } from './users.entity';
import { ConcertsEntity } from 'src/features/concerts/entity/concerts.entity';

@Entity({ name: 'tokens' })
export class TokensEntity {
  @PrimaryColumn()
  refresh_token: string;

  @OneToOne(() => UsersEntity, (user) => user.uid)
  user_id: string;

  @ManyToOne(() => ConcertsEntity, (concert) => concert.id)
  concert_id: string;

  @Column({ default: 0 })
  sequence: number;

  @CreateDateColumn({ type: 'timestamp' })
  create_date?: Date;

  @Column()
  creater_id: string;

  @UpdateDateColumn({ type: 'timestamp' })
  update_date?: Date;

  @Column()
  updater_id: string;
}
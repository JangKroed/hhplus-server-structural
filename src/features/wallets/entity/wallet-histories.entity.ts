import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'wallet_histories' })
export class WalletHistoriesEntity {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  user_id: string;

  @Column()
  balance: number;

  @Column()
  type: string;

  @Column()
  create_date?: Date;

  @Column()
  creater_id: string;
}

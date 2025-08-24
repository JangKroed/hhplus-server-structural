import { UsersEntity } from 'src/features/users/entity/users.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'wallets' })
export class WalletsEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @OneToOne(() => UsersEntity, (user) => user.uid)
  user_id: string;

  @Column()
  balance: number;

  @Column()
  create_date?: Date;

  @Column()
  creater_id: string;

  @Column()
  update_date?: Date;

  @Column()
  updater_id: string;
}

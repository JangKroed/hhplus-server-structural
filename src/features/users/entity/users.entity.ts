import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TokensEntity } from './tokens.entity';
import { UserRolesEntity } from './user-roles.entity';
import { WalletsEntity } from 'src/features/wallets/entity/wallets.entity';
import { ReservesEntity } from 'src/features/concerts/entity/reserves.entity';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  uid?: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column({ select: false })
  password: string;

  @Column()
  access_token: string;

  @Column({ default: 'OFF' })
  status?: string;

  @CreateDateColumn({ type: 'timestamp' })
  create_date?: Date;

  @Column()
  creater_id: string;

  @UpdateDateColumn({ type: 'timestamp' })
  update_date?: Date;

  @Column()
  updater_id: string;

  @OneToOne(() => TokensEntity, (token) => token.user_id)
  token: TokensEntity;

  @OneToMany(() => UserRolesEntity, (user_role) => user_role.user_id)
  user_roles: UserRolesEntity[];

  @OneToOne(() => WalletsEntity, (wallet) => wallet.user_id)
  wallet: WalletsEntity;

  @OneToMany(() => ReservesEntity, (reserve) => reserve.user_id)
  reserves: ReservesEntity[];
}

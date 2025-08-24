import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsersEntity } from './users.entity';
import { RolesEntity } from './roles.entity';

@Entity({ name: 'user_roles' })
export class UserRolesEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ManyToOne(() => UsersEntity, (user) => user.uid)
  user_id: string;

  @ManyToOne(() => RolesEntity, (role) => role.id)
  role_id: string;

  @Column({ type: 'timestamp' })
  expire_date: Date;

  @CreateDateColumn({ type: 'timestamp' })
  create_date?: Date;

  @Column()
  creater_id: string;

  @UpdateDateColumn({ type: 'timestamp' })
  update_date?: Date;

  @Column()
  updater_id: string;
}

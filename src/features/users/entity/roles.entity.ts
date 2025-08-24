import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserRolesEntity } from "./user-roles.entity";

@Entity({ name: 'roles' })
export class RolesEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  name: string;

  @Column()
  create_date?: Date;

  @Column()
  creater_id: string;

  @Column()
  update_date?: Date;

  @Column()
  updater_id: string;

  @OneToMany(() => UserRolesEntity, (user_role) => user_role.role_id)
  user_roles: UserRolesEntity[];
}

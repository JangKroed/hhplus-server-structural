import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ConcertsEntity } from "./concerts.entity";

@Entity({name: 'concert_times'})
export class ConcertTimesEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ManyToOne(() => ConcertsEntity, (concert) => concert.id)
  concert_id: string;
  
  @Column()
  concert_date: Date;

  @Column()
  time: Date;

  @CreateDateColumn({ type: 'timestamp' })
  create_date: Date;

  @Column()
  creater_id: string;

  @UpdateDateColumn({ type: 'timestamp' })
  update_date: Date;

  @Column()
  updater_id: string;
}
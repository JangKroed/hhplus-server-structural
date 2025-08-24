import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfig, dbConfig } from './database.config';
import { UsersEntity } from 'src/features/users/entity/users.entity';
import { ConcertTimesEntity } from 'src/features/concerts/entity/concert-times.entity';
import { ConcertsEntity } from 'src/features/concerts/entity/concerts.entity';
import { ReserveHistoriesEntity } from 'src/features/concerts/entity/reserve-histories.entity';
import { ReservesEntity } from 'src/features/concerts/entity/reserves.entity';
import { WalletHistoriesEntity } from 'src/features/wallets/entity/wallet-histories.entity';
import { WalletsEntity } from 'src/features/wallets/entity/wallets.entity';
import { TokensEntity } from 'src/features/users/entity/tokens.entity';
import { RolesEntity } from 'src/features/users/entity/roles.entity';
import { UserRolesEntity } from 'src/features/users/entity/user-roles.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          load: [dbConfig],
          envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        ...configService.get<DatabaseConfig>('database'),
        entities: [
          UsersEntity,
          WalletsEntity,
          WalletHistoriesEntity,
          ConcertsEntity,
          ConcertTimesEntity,
          ReservesEntity,
          ReserveHistoriesEntity,
          TokensEntity,
          UserRolesEntity,
          RolesEntity,
        ],
        synchronize: false,
        autoLoadEntities: true,
        relationLoadStrategy: 'join',
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}

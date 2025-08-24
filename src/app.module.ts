import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { UsersModule } from './features/users/users.module';
import { ConcertsModule } from './features/concerts/concerts.module';
import { WalletsModule } from './features/wallets/wallets.module';

@Module({
  imports: [DatabaseModule, UsersModule, ConcertsModule, WalletsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

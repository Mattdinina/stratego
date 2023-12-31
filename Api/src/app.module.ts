import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './games/games.module';

// fait par matthias B.

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'oSkdbcnf1244&',
      database: 'Stratego',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GameModule,
  ],controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
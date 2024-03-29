import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './games/games.module';
import { EventsModule } from './events/events.module';
import { HintsModule } from './hints/hints.module';

//Fait par matthias B.
// Module : Sert à tout réunir : service, controlleur, provider... tout est importé dans ce fichier.

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
    EventsModule,
    HintsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

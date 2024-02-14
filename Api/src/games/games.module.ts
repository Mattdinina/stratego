import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { Game } from './entities/game.entity';


//Fait par matthias B.
// Module : Sert à tout réunir : service, controlleur, provider... tout est importé dans ce fichier.

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GamesService],
  controllers: [GamesController],
})
export class GameModule { }
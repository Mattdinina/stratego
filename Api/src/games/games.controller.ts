import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

// fait par matthias B.

@Controller('games')
export class GamesController {
  constructor(@InjectDataSource() private bdd : DataSource) {}

 
@Post()
postEvent(@Body() eventData: any) {
  const { id, activePlayer, redPlayerName, bluePlayerName, blueSetup, redSetup, currentBoard } = eventData;

  return this.bdd.query(
    `INSERT INTO game (id, activePlayer, redPlayerName, bluePlayerName, blueSetup, redSetup, currentBoard) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [id, activePlayer, redPlayerName, bluePlayerName, blueSetup, redSetup, currentBoard]
  );
}

  @Get()
  findAll() {
    return this.bdd.query(`SELECT * FROM game`);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.gamesService.findOne(+id);
  // }

  @Patch(':id')
  patchEvent(@Param('id') id: string, @Body() bodyPatch: any) {
    const { nom_colonne, nouvelle_valeur } = bodyPatch;
    const query = `UPDATE game SET ${nom_colonne} = ? WHERE id = ?`;
  
    return this.bdd.query(query, [nouvelle_valeur, id]);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bdd.query(`DELETE FROM game WHERE id = ?`, [id]);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { Query } from '@nestjs/common';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bdd.query(`SELECT * FROM game WHERE id = ?`, [id])
  }

  @Patch(':id')
  patchEvent(
  @Param('id') id: string,
  @Query('color') color: string,  
  @Body() bodyPatch: any
) {
  const { nouvelle_valeur } = bodyPatch;

  const query = `UPDATE game SET currentBoard = ? WHERE id = ? AND activePlayer = ?`;

  return this.bdd.query(query, [nouvelle_valeur, id, color]);
}

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bdd.query(`DELETE FROM game WHERE id = ?`, [id]);
  }
}

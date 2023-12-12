import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

@Controller('games')
export class GamesController {
  constructor(@InjectDataSource() private bdd : DataSource) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.bdd.query();
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
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.bdd.query();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bdd.query(`DELETE FROM game WHERE id = ?`, [id]);
  }
}

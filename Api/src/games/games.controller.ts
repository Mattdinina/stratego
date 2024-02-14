import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { Query } from '@nestjs/common';

// fait par matthias B.
// Controlleur. Crud de "game"

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) { }

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    return await this.gamesService.create(createGameDto);
  }

  @Get()
  async findAll() {
    return await this.gamesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.gamesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    const { color, nouvelle_valeur } = updateGameDto;
    return await this.gamesService.update(id, color, nouvelle_valeur);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.gamesService.remove(id);
  }
}

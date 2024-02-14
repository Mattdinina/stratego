import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

// fait par matthias B.
//  Service; après les appels du CRUD de "game" dans le controlleur, ce service est appelé.

@Injectable()
export class GamesService {
  constructor(@InjectDataSource() private bdd: DataSource) { }

  async create(createGameDto: CreateGameDto): Promise<any> {
    const { id, activePlayer, redPlayerName, bluePlayerName, blueSetup, redSetup, currentBoard } = createGameDto;
    return await this.bdd.query(
      `INSERT INTO game (id, activePlayer, redPlayerName, bluePlayerName, blueSetup, redSetup, currentBoard) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, activePlayer, redPlayerName, bluePlayerName, blueSetup, redSetup, currentBoard]
    );
  }

  async findAll(): Promise<any> {
    return await this.bdd.query(`SELECT * FROM game`);
  }

  async findOne(id: string): Promise<any> {
    return await this.bdd.query(`SELECT * FROM game WHERE id = ?`, [id]);
  }

  async update(id: string, color: string, nouvelleValeur: any): Promise<any> {
    const query = `UPDATE game SET currentBoard = ? WHERE id = ? AND activePlayer = ?`;
    return await this.bdd.query(query, [nouvelleValeur, id, color]);
  }

  async remove(id: string): Promise<any> {
    return await this.bdd.query(`DELETE FROM game WHERE id = ?`, [id]);
  }
}

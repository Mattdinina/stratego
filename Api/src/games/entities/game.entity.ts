import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PieceColor } from '../enums/piece-color.enum';
import { state } from '../enums/state';
// fait par matthias b.
// entity : Sert à créer la table "game" dans la Base de données Stratego, avec les colonnes correspondantes ainsi que leur type (int, string etc)
@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  redPlayerName: string;

  @Column()
  bluePlayerName: string;

  @Column({
    type: 'enum',
    enum: PieceColor,
    default: PieceColor.RED,
  })
  activePlayer: PieceColor;

  @Column({ nullable: true })
  blueSetup: string;

  @Column({ nullable: true })
  redSetup: string;

  @Column({ nullable: true })
  currentBoard: string;

  @Column({
    type: 'enum',
    enum: state,
    default: state.TWO,
  })
  activeState: state
}
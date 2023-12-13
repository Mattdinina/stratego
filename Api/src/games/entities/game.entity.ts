import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PieceColor } from '../enums/piece-color.enum';
import { state } from '../enums/state';
// entity : fait par matthias b.
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

  @Column({nullable: true})
  blueSetup: string;

  @Column({nullable: true})
  redSetup: string;

  @Column({nullable: true})
  currentBoard: string;

  @Column({
    type: 'enum',
    enum: state,
    default: state.TWO,
  })
  activeState: state
}
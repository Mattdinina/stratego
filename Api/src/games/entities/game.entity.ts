import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PieceColor } from '../enums/piece-color.enum';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameOfPiece: string;

  @Column()
  valueOfPiece: number;

  @Column({
    type: 'enum',
    enum: PieceColor,
    default: PieceColor.RED,
  })
  color: PieceColor;
}
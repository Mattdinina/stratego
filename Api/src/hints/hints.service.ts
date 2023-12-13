import { Injectable } from '@nestjs/common';

@Injectable()
export class HintsService {
    private player1Pieces: string[] = ['M', 'G', 'C1', 'C1', 'C2', 'C2', 'C3', 'C3', 'C4', 'C4', 'L1', 'L1', 'L2', 'L2', 'L3', 'L3', 'L4', 'L4', 'S1', 'S1', 'S2', 'S2', 'S3', 'S3', 'S4', 'S4', 'D', 'E1', 'E1', 'E2', 'E2', 'E3', 'E3', 'E4', 'E4', 'E5', 'E5', 'F', 'B', 'B', 'B', 'B', 'B', 'B'];
    private player2Pieces: string[] = ['M', 'G', 'C1', 'C1', 'C2', 'C2', 'C3', 'C3', 'C4', 'C4', 'L1', 'L1', 'L2', 'L2', 'L3', 'L3', 'L4', 'L4', 'S1', 'S1', 'S2', 'S2', 'S3', 'S3', 'S4', 'S4', 'D', 'E1', 'E1', 'E2', 'E2', 'E3', 'E3', 'E4', 'E4', 'E5', 'E5', 'F', 'B', 'B', 'B', 'B', 'B', 'B'];

  shufflePieces(): { player1: string[][], player2: string[][] } {
    this.player1Pieces = this.shuffleArray(this.player1Pieces);
    this.player2Pieces = this.shuffleArray(this.player2Pieces);

    const placement = [
        this.player1Pieces.slice(0, 10),
        this.player1Pieces.slice(10, 20),
        this.player2Pieces.slice(0, 10),
        this.player2Pieces.slice(10, 20),
      ];
  
      return { player1: [placement[0], placement[1]], player2: [placement[2], placement[3]] };
    }

  private shuffleArray(array: string[]): string[] {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}

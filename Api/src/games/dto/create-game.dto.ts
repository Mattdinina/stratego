import { PieceColor } from "../enums/piece-color.enum";

// Fait par matthias B.
// Dto du jeu. On peut transférer ces données dans d'autres fichiers du code.

export class CreateGameDto {
    id: number;
    activePlayer: PieceColor;
    redPlayerName: string;
    bluePlayerName: string;
    blueSetup: string;
    redSetup: string;
    currentBoard: string;
}

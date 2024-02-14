import { Controller, Get } from '@nestjs/common';
import { HintsService } from './hints.service';

@Controller('hints')
export class HintsController {
  constructor(private readonly hintsService: HintsService) {}

  @Get('shuffle')
  shufflePieces() {
    const shuffledPieces = this.hintsService.shufflePieces();
    return shuffledPieces; 
  }
}

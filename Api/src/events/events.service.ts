import { Injectable } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { EventType } from './enums/event-type.enums';

@Injectable()
export class EventsService {
  private events: EventDto[] = [];
  private currentPlayer: string = 'blue'; // Initialiser au joueur bleu
  private gameIsOver: boolean = false;


  createEvent(gameId: number, type: EventType): void {
    const event: EventDto = {
      gameId,
      type,
      date: new Date(),
    };

    if (type === EventType.MOVE) {
      this.currentPlayer = this.currentPlayer === 'blue' ? 'red' : 'blue';
      event.player = this.currentPlayer;
    }

    if (type === EventType.END) {
      this.gameIsOver = true;
      console.log('Partie terminée !'); 
    }

    this.events.push(event);
  }

  getEventsByGameId(gameId: number): EventDto[] {
    return this.events.filter((event) => event.gameId === gameId);
  }

}

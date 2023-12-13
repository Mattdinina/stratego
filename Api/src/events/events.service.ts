import { Injectable } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { EventType } from './enums/event-type.enums';

@Injectable()
export class EventsService {
  private events: EventDto[] = [];

  createEvent(gameId: number, type: EventType): void {
    const event: EventDto = {
      gameId,
      type,
      date: new Date(),
    };
    this.events.push(event);
  }

  getEventsByGameId(gameId: number): EventDto[] {
    return this.events.filter((event) => event.gameId === gameId);
  }

}

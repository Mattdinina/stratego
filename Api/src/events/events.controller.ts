import { Controller, Post, Get, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventType } from './enums/event-type.enums';
import { EventDto } from './dto/event.dto';


@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventsService) {}

  @Post(':gameId/:eventType')
  createEvent(
    @Param('gameId') gameId: number,
    @Param('eventType') eventType: EventType,
  ): string {
    this.eventService.createEvent(gameId, eventType);
    return `Event ${eventType} created for game ${gameId}`;
  }

  @Get(':gameId')
  getEventsByGameId(@Param('gameId') gameId: number): EventDto[] {
    return this.eventService.getEventsByGameId(gameId);
  }
}

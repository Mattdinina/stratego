import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventController } from './events.controller';

@Module({
  controllers: [EventController],
  providers: [EventsService],
})
export class EventsModule {}

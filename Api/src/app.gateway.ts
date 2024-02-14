import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('event')
    handleEvent(client: any, data: any): void {
        this.server.emit('event', data);
    }
}
    
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class WebsocketService {
    private socket: WebSocket;
    private subject: Subject<string> = new Subject();

    constructor() {
        this.socket = new WebSocket('wss://slack2.azurewebsites.net/ws');

        this.socket.addEventListener('open', event => {
        });

        this.socket.addEventListener('message', event => {
            this.subject.next(event.data);
        });
    }

    sendMessage(message: string) {
        this.socket.send(message);
    }

    getMessages(): Observable<string> {
        return this.subject;
    }
}

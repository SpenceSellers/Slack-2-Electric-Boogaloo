import { Injectable } from '@angular/core';

@Injectable()
export class WebsocketServiceService {
    private socket: WebSocket;

    constructor() {
        this.socket = new WebSocket('wss://slack2.azurewebsites.net/ws');

        // Connection opened
        this.socket.addEventListener('open', event => {
            this.socket.send('Hello Server!');
        });

        // Listen for messages
        this.socket.addEventListener('message', event => {
            console.log('Message from server ', event.data);
        });
    }

    sendMessage(message: string) {

    }

    // getMessages(): Observable<string> {

    // }
}

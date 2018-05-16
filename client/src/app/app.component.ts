import {Component} from '@angular/core';
import { WebsocketService } from './websocket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private _websocketService: WebsocketService) {
        this._websocketService.getMessages().subscribe(message => {
            this.getMessage(message);
        });
    }
    public currentMessage: string;
    public messages: string[] = [];
    public rooms: string[] = ['fake room 1', 'fake room 2', 'fake room 3'];

    enterPressed(event: KeyboardEvent) {
        if (!event.shiftKey && event.keyCode === 13) {
            this.sendMessage();
            event.preventDefault();
        }
    }

    public getMessage(message: string): void {
        this.messages.push(message);
        window.scrollTo(0, document.body.scrollHeight);
    }

    public sendMessage(): void {
        this._websocketService.sendMessage(this.currentMessage);
        this.currentMessage = '';
    }
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentMessage: string;
  public messages: string[] = [];
  public rooms: string[] = ['fake room 1', 'fake room 2', 'fake room 3'];

  enterPressed(event: KeyboardEvent) {
    if (!event.shiftKey && event.keyCode === 13) {
      this.sendMessage();
      event.preventDefault();
    }
  }

  public sendMessage(): void {
    this.messages.push(this.currentMessage);
    this.currentMessage = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
}

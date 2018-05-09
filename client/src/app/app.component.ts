import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public currentMessage: string;
    public messages: string[] = [];

    public sendMessage(): void {
        this.messages.push(this.currentMessage);
    }
}

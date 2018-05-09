import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WebsocketServiceService } from "./websocket-service.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [WebsocketServiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }

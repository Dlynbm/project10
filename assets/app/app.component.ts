import { Component } from '@angular/core';
import { Message } from "./messages/message.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',

})
export class AppComponent {
    messages: Message [] = [
        new Message('Some message', "D'Lyn"),
        new Message('Another message', "John"),
        new Message('Third message!')
    ];
}
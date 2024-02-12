import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  channelName = 'WebTalkChannel';

  @Output()
  messageEmitter = new EventEmitter();

  sendMessageToParent($event: Event) {
    const messageToParent = ($event.target as HTMLInputElement).value;
    this.messageEmitter.emit(messageToParent);
  }
}

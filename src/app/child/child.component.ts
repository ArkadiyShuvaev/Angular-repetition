import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input()
  channelName = 'WebTalkChannel';

  @Output()
  messageEmitter = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildComponent: ngOnChanges' + JSON.stringify(changes));
  }

  sendMessageToParent($event: Event) {
    const messageToParent = ($event.target as HTMLInputElement).value;
    this.messageEmitter.emit(messageToParent);
  }
}

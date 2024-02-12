import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  channelName = "Default Value";

  messageFromChild = "";

  receiveMessageFromChild(value: string) {
    this.messageFromChild = value;
  }
}

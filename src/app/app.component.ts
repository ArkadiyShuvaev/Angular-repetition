import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiClientService } from "./api-client.service";
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MyApp';
  userName = 'Arkadiy';
  imagePath = 'favicon.ico';
  isApproved = false;
  users: Array<IUser> = [{ Name: 'UserName 1', Id: 1 }, { Name: 'UserName 2', Id: 2 }]
  inputNgSwitchValue = 0;
  attributeDirectiveColorNgClass = 'white';
  isStyleAppliedDirectiveColorNgStyle = false;
  @ViewChild('sendRequestViewChild', {static: true}) inputWithAutofocus!: ElementRef<HTMLInputElement>;

  constructor(private apiClient: ApiClientService) { }
  ngOnInit(): void {
    this.inputWithAutofocus.nativeElement.focus();
  }

  onRequestSend(inputElem: HTMLInputElement) {
    console.log(inputElem.value);
  }

  onClickAttributeDirectiveWithClass(color: string) {
    this.attributeDirectiveColorNgClass = color;
  }

  onClickAttributeDirectiveToggleStyle() {
    this.isStyleAppliedDirectiveColorNgStyle = !this.isStyleAppliedDirectiveColorNgStyle;
  }
  setValue($event: Event) {
    const searchText = ($event.target as HTMLInputElement).value;
    this.apiClient.post(searchText);
  }

  onClickStructuralDirectivesApprove(isApproved: boolean) {
    this.isApproved = isApproved;
  }

  public onClickDataBinding(): void {
    this.userName = 'Roman';
  }
}

export interface IUser {
  Name: string;
  Id: number;
}

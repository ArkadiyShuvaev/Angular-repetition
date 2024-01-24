import { Component } from '@angular/core';
import { ApiClientService } from "./api-client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MyApp';
  userName = 'Arkadiy';
  imagePath = 'favicon.ico';
  isApproved = false;
  users: Array<IUser> = [{ Name: 'UserName 1', Id: 1 }, { Name: 'UserName 2', Id: 2 }]
  inputNgSwitchValue = 0;
  attributeDirectiveColorNgClass = 'white';
  isStyleAppliedDirectiveColorNgStyle = false;

  constructor(private apiClient: ApiClientService) { }

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

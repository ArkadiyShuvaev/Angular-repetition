import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor() { }

  public post(searchText: string): void {
    console.log(`ApiClientService.get() searchText: ${searchText}`);
  }
}

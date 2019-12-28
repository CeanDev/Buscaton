import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetAllTownsService {

  constructor(private http: HttpClient) { }

  public getAllNamesAndValuesFromAvailableTowns() {
    const url = 'http://18.231.8.7:8077/home/GetAllCities';
    let towns: any = '';
    const container: any = [];
    let response = null;
    let info = null;

    this.http.get(url).subscribe(data => {
      // tslint:disable-next-line: forin
      for (const dato in data) {
        if (response === null) {
          response = data[dato];
        } else {
          info = data[dato];
        }
      }

      if (response === 'ok') {
        towns = info;

        for (const town of towns) {
          container.push({name : town.DisplayName, value : town.Name});
        }
      }
    });

    return container;
  }


}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCoincidencesService {

  public urls: any = {
    Api_Url : 'http://18.231.8.7:8077/',
    Method : 'Search/Select/'
  };

  constructor(private http: HttpClient) {}

  data: any;

  public getCommerces(params) {

    this.data = {
      localized : false,
      start : 0,
      freeSearch : params.type.trim(),
      latitude: 0,
      longitude: 0,
      distanceInMeters: 0,
      searchBy: 'searchByRating',
      searchCity: params.town.trim(),
      searchAddress: null
    };

    const Headers = new HttpHeaders();

    Headers.append('Content-Tytpe', 'application/json');

    const url = this.urls.Api_Url + this.urls.Method;

    const dataResp = this.http.post(url, this.data, {headers: Headers});

    // console.log('Comercios Obtenidos: ', dataResp);

    return dataResp;
  }

}

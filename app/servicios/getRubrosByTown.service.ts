import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetRubrosByTownService {

  public rubros: any = [];

  constructor(private http: HttpClient) { }

  gerRubros(town) {
    const urlProvicional = 'http://18.231.8.7:8077/home/GetCity?city=';
    const url = urlProvicional + town;

    this.rubros = this.http.get(url);

    return this.rubros;
  }


}

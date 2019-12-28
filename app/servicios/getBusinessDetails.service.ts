import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetBusinessDetailsService {

  public business: any = [[], []];
  public isUsed = true;
  public cleared = false;

  constructor(private http: HttpClient) { }

  getDetails(commerces) {
    const url = 'http://18.231.8.7:8077/business/GetDetail/?id=';
    let gotten = false;
    let resp;
    let info: any = null;

    for (const commerce of commerces) {
      this.http.get(url + commerce.Id).subscribe(response => {

        for (const business in response) {
          if (response[business] === 'ok') {
            gotten = true;
          } else if (gotten) {
            resp = response[business];
          }
        }

        info = {
          id : commerce.Id,
          cords : {
            lat : resp.Business.HeadLocation.Latitude,
            lon : resp.Business.HeadLocation.Longitude
          },
          business : resp
        };

        if (this.isUsed) {
          if (!this.cleared) {
            this.business[1] = [];
            this.cleared = true;
          }
          this.business[0].push(info);
        } else {
          if (this.cleared) {
            this.business[0] = [];
            this.cleared = false;
          }
          this.business[1].push(info);
        }
      });
    }

    this.isUsed = !this.isUsed;

    // console.log('service: ', this.business);

    if (this.isUsed) {
      return this.business[0];
    } else {
      return this.business[1];
    }

  }

  getDetailsById(id) {
    const url = 'http://18.231.8.7:8077/business/GetDetail/?id=' + id;
    const data = this.http.get(url);
    return data;
  }
}

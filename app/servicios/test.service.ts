import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HTTP) { }

  public getTowns() {}

}

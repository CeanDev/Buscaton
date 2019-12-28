import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comercios-listados',
  templateUrl: './comercios-listados.page.html',
  styleUrls: ['./comercios-listados.page.scss'],
})
export class ComerciosListadosPage implements OnInit {

  public comercios: any = [];
  public pictures: any;
  public urlPictures = 'https://static.buscaton.com:444/';

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
    this.getMarkets();
  }

  ngOnInit() {
  }


  private getMarkets() {
    let comercios: any = [];
    this.route.queryParams.subscribe(response => {
      if (this.router.getCurrentNavigation().extras.state) {
        comercios = this.router.getCurrentNavigation().extras.state.comercios;
        this.comercios = comercios;
      }
    });
  }


}

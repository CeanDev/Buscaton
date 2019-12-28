import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { GetCoincidencesService } from '../servicios/getCoincidences.service';
import { GetBusinessDetailsService } from '../servicios/getBusinessDetails.service';

@Component({
  selector: 'app-listado-rubros',
  templateUrl: './listado-rubros.page.html',
  styleUrls: ['./listado-rubros.page.scss'],
})
export class ListadoRubrosPage implements OnInit {

  public town: any;
  public rubros: any;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private getCoincidencesService: GetCoincidencesService,
    private getBusinessDetailsService: GetBusinessDetailsService) {
    this.getRubrosFromHome();
  }

  ngOnInit() {}

  private getRubrosFromHome() {
    this.activated.queryParams.subscribe(data => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.town = this.router.getCurrentNavigation().extras.state.town;
        this.rubros = this.router.getCurrentNavigation().extras.state.rubros;
      }
    });
  }

  public showRubrosInMap(rubro) {
    const params = {
      town : this.town,
      type : rubro
    };
    // console.log('parametros: ', params);
    this.callMapAndShowCoincidences(params);
  }

  public callMapAndShowCoincidences(params) {

    this.getCoincidencesService.getCommerces(params).subscribe(resp => {

      let response = null;
      let data: any = [];
      let rubros;

      // tslint:disable-next-line: forin
      for (const dato in resp) {
        if (response === null) {
          response = resp[dato];
        } else {
          data = resp[dato];
        }
      }

      rubros = this.getBusinessDetailsService.getDetails(data);

      this.openMap(rubros);

    });
  }

  public openMap(rubros) {
    const navExtra: NavigationExtras = {
      state: {
        commerces : rubros
      }
    };
    this.router.navigate(['/mapaylistado'], navExtra);
  }

}

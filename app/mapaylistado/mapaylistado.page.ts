import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-mapaylistado',
  templateUrl: './mapaylistado.page.html',
  styleUrls: ['./mapaylistado.page.scss'],
})
export class MapaylistadoPage implements OnInit {

  public comercios: any = {
    cords : {
      lat : -34.6162554,
      lng : -58.4420396
    }
  };
  public barrio: any = 'Flores';
  public datos: any;
  public zoom = 14;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController) {
      this.getDataFromHome();
  }

  ngOnInit() {
  }

  private getDataFromHome() {
    this.actRoute.queryParams.subscribe(data => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.datos = this.router.getCurrentNavigation().extras.state.commerces;
        if (this.datos.length < 1) {
          this.mostrarAlert();
        }
        console.log('mapa: ', this.datos);
      }
    });
  }

  async mostrarAlert() {
    const alert = await this.alertCtrl.create({
      header: '¡Ups!',
      message: 'No se han encontrado resultados relacionados a tu búsqueda. Por favor, intentalo nuevamente.',
      buttons: [
        {
          text: '¡Entendido!',
          handler: () => {
            console.log('Aceptó');
            this.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }

  public comercioCliqueado(comercioSeleccionado) {
    const navigationExtras: NavigationExtras = {
      state: {
        comercio : comercioSeleccionado
      }
    };
    console.log(comercioSeleccionado);
    this.router.navigate(['/showCommerceCard'], navigationExtras);
  }

  public irAlistadoDeComercios() {
    const navigationExtras: NavigationExtras = {
      state: {
        comercios : this.datos
      }
    };
    this.router.navigate(['/comercioslistados'], navigationExtras);
  }

  dismiss() {
    this.router.navigate(['/home']);
  }


}

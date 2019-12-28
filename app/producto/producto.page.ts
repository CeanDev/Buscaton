import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { EditarProductoPage } from '../editar-producto/editar-producto.page';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: EditarProductoPage
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: '¿Estás seguro de elminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          cssClass: 'secondary',
          handler: (cancelado) => {
            console.log('Confirm Cancel: cancelado');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}

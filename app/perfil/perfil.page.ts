import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditComercioPage } from '../edit-comercio/edit-comercio.page';
import { DatosPage } from '../datos/datos.page';
import { PersonalizarPage } from '../personalizar/personalizar.page';
import { VidrieraPage } from '../vidriera/vidriera.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  async presentModal(opt) {
    let page: any;
    if (opt === 1) {
      page = EditComercioPage;
    } else if (opt === 2) {
      page = DatosPage;
    } else if (opt === 3) {
      page = PersonalizarPage;
    } else if (opt === 4) {
      page = VidrieraPage;
    }
    const modal = await this.modalCtrl.create({
      component: page
    });
    return await modal.present();
  }

}

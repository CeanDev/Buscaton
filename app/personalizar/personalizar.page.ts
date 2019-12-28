import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditCateNamePage } from '../edit-cate-name/edit-cate-name.page';
import { ProductoPage } from '../producto/producto.page';
import { AgregarCategoriaPage } from '../agregar-categoria/agregar-categoria.page';

@Component({
  selector: 'app-personalizar',
  templateUrl: './personalizar.page.html',
  styleUrls: ['./personalizar.page.scss'],
})
export class PersonalizarPage implements OnInit {

  public categorias: any = [
    {nombre : 'Categoría Nº1'},
    {nombre : 'Categoría Nº2'},
    {nombre : 'Categoría Nº3'}
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async presentModal(opt) {
    let page: any;
    if (opt === 1) {
      page = ProductoPage;
    } else if (opt === 2) {
      page = EditCateNamePage;
    } else if (opt === 3) {
      page = AgregarCategoriaPage;
    }
    const modal = await this.modalCtrl.create({
      component: page
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}

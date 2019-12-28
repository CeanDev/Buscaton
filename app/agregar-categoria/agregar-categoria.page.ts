import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.page.html',
  styleUrls: ['./agregar-categoria.page.scss'],
})
export class AgregarCategoriaPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}

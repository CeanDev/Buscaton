import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  public datos: any = [{
    email : localStorage.getItem('email') ? localStorage.getItem('email') : 'example@gmail.com',
    name : localStorage.getItem('name') ? localStorage.getItem('name') : 'Cristian Annese',
    register_type : localStorage.getItem('register_type') ? localStorage.getItem('register_type') : 'facebook'
  }];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}

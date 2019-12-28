import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegdataPage } from '../regdata/regdata.page';
import { ReglaststepPage } from '../reglaststep/reglaststep.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openRegDataModal1() {
    const modal = await this.modalController.create({
      component: RegdataPage
    });
    return await modal.present();
  }

  async openRegDataModal2() {
    const modal = await this.modalController.create({
      component: ReglaststepPage
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}

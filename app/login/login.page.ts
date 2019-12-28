import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
// import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async openRegisterModal() {
    const modal = await this.modalController.create({
      component: RegisterPage
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  login() {
    localStorage.setItem('login', 'true');
    localStorage.setItem('email', 'cristian.annese.cea@gmail.com');
    localStorage.setItem('name', 'Cristian Annese');
    localStorage.setItem('password', '1234');
    localStorage.setItem('register_type', 'facebook');
    this.dismiss();
  }

}

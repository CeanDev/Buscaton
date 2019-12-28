import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController } from '@ionic/angular';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: '¿Sos Comerciante?',
      url: '/comerciante',
      icon: 'flash'
    },
    {
      title: 'Ayuda',
      url: '/ayuda',
      icon: 'help-circle'
    }
  ];

  loginIcon = 'log-in';
  loggedIn = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalController: ModalController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.isLogged();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginPage
    });
    return await modal.present();
  }

  isLogged() {
    setInterval(() => {
      this.loggedIn = localStorage.getItem('login') === 'true' ? true : false;
    }, 200);
  }

  logout() {
    localStorage.clear();
    localStorage.setItem('login', 'false');
  }

}

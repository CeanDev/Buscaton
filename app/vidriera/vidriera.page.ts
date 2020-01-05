import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vidriera',
  templateUrl: './vidriera.page.html',
  styleUrls: ['./vidriera.page.scss'],
})
export class VidrieraPage implements OnInit {

  public datos: any;
  public prev: string;
  public currentOpt = 'info';
  public photosUrl: 'http://18.231.8.7:8076/';
  public articulos = [
    'https://static.buscaton.com:444/catalog/521660/5b0e938f-dda2-4629-beb3-67b08ee01dcf.jpeg',
    'https://static.buscaton.com:444/catalog/519767/1d227631-ebbc-4c82-be33-de7cb21b0b39.JPG',
    'https://static.buscaton.com:444/catalog/519231/db378c3c-426c-4bfa-ad98-70fc379ecd22.jpeg'
  ];

  @Input() comercio: any;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('comercio recibido: ', this.comercio);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  public changeWindow(opt) {
    if (this.currentOpt !== opt) {
      document.getElementById(this.currentOpt).setAttribute('style', 'display:none;');
      if (opt === 'vidriera') {
       // tslint:disable-next-line: max-line-length
       document.getElementById(opt).setAttribute('style', 'display:block;width:100vw;min-height:100vh;position:relative;top:-23.7vh;');
      } else if (opt === 'ofertas') {
        // tslint:disable-next-line: max-line-length
        document.getElementById(opt).setAttribute('style', 'display:block;width:100vw;height:auto;position:relative;top:-23.7vh;');
      } else if (opt === 'opiniones') {
        // tslint:disable-next-line: max-line-length
        document.getElementById(opt).setAttribute('style', 'display:block;width:100vw;min-heigh:30vh;height:auto;position:relative;top:-23.7vh;');
      } else if (opt === 'info'){
        // tslint:disable-next-line: max-line-length
        document.getElementById(opt).setAttribute('style', 'display:block;width:100vw;min-height:100vh;position:relative;top:-23.7vh;');
      }
      this.currentOpt = opt;
    }
  }


}

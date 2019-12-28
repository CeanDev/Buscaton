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
  public photosUrl: 'http://18.231.8.7:8076/';

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


}

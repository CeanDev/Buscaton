import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-direccion',
  templateUrl: './edit-direccion.page.html',
  styleUrls: ['./edit-direccion.page.scss'],
})
export class EditDireccionPage implements OnInit {

  @Input() comercio: any;
  public zoom = 16;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}

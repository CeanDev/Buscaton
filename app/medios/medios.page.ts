import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-medios',
  templateUrl: './medios.page.html',
  styleUrls: ['./medios.page.scss'],
})
export class MediosPage implements OnInit {

  public medios: any = [];
  public medioDePago: any = ['Efectivo', 'Pesos', 'Dólares','Visa Electrón', 'Mastercard', 
                              'American Express', 'Naranja', 'Shopping', 'Cabal', 'Mercado Pago',
                              'Tarjeta de Débito', 'Visa', 'A Convenir', 'A Consultar', 'Maestro',
                              'Favacard', 'Mutuales', 'Obras Sociales'];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  selectChanges(event) {
    const value = event.detail.value;
    this.medios = value;
    console.log(value);
  }

}
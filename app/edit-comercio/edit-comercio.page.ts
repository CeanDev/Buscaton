import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditDireccionPage } from '../edit-direccion/edit-direccion.page';
import { HorariosPage } from '../horarios/horarios.page';
import { MediosPage } from '../medios/medios.page';

@Component({
  selector: 'app-edit-comercio',
  templateUrl: './edit-comercio.page.html',
  styleUrls: ['./edit-comercio.page.scss'],
})
export class EditComercioPage implements OnInit {

  @ViewChild('logoEdit', {static: false}) logoEdit: ElementRef;
  @ViewChild('imgPreview', {static: false}) imgPreview: ElementRef;

  public imgs: File[] = [];
  public defaultLogoImg: any = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OCl2Qtg-HqBX7SQ37rEv8yQ6BCHN_1Bupy8booMrArQ0geWL&s';
  public comercio = {
    nombre : 'Panchería "Raulito"',
    email: 'cristian.annese.cea@gmail.com',
    tel_c : 1123456789,
    tel_a : 1123456789,
    wsp: 1123456789,
    web: 'www.google.com/',
    cords : {
      lat : -34.5806793,
      lng : -58.5020944
    },
    direccion : {
      calle : 'Callao',
      numero : 1234,
      barrio : 'Caballito',
      provincia : 'Buenos Aires',
      entre_calles : 'Corrientes y Santa Fe',
      adicional : '4A',
      cp : 1419
    },
    redes : {
      facebook : '',
      instagram : '',
      pedidos_ya : '',
      mercado_libre : ''
    }
  };
  public zoom = 16;
  public editarRubrosHabilitado = false;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  async presentModal(page: any) {
    if (page === 1) {
      page = EditDireccionPage;
    } else if (page === 2){
      page = HorariosPage;
    } else if (page === 3){
      page = MediosPage;
    }

    const modal = await this.modalCtrl.create({
      component: page,
      componentProps: {
        comercio : this.comercio
      }
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

  public getImg(event, preview) {
    const reader = new FileReader();
    reader.onload = () => {
      preview.setAttribute('src', reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  public cancelLogoChange(preview) {
    preview.setAttribute('src', this.defaultLogoImg);
  }

  public editarRubros() {
    this.editarRubrosHabilitado = !this.editarRubrosHabilitado;
  }

}

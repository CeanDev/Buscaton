import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { GetAllTownsService } from '../servicios/getAllTowns.service';
import { GetCoincidencesService } from '../servicios/getCoincidences.service';
import { GetBusinessDetailsService } from '../servicios/getBusinessDetails.service';
import { GetRubrosByTownService } from '../servicios/getRubrosByTown.service';
import { VidrieraPage } from '../vidriera/vidriera.page';
import { ModalController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchForm: FormGroup;
  townDefaultValue = 'Caballito';
  cantidadLocales = 123;
  barrioElegido = this.townDefaultValue;
  submitted = false;
  slideOpts = {
    initialSlide: 1,
    speed: 2,
    autoplay: true
  };
  slides1: any;
  slides2: any;
  currentDate: any = new Date();
  towns: any = [];
  business: any;
  comercio: any = [[], []];
  usado = true;
  limpio = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private modalCtrl: ModalController,
    public getAllTownsService: GetAllTownsService,
    private getCoincidencesService: GetCoincidencesService,
    private getBusinessDetailsService: GetBusinessDetailsService,
    private getRubrosByTownService: GetRubrosByTownService,
    private httpNative: HTTP) { }

  ngOnInit() {
    this.buildForm();
    this.getAllTowns();
    this.generateSlides();
    this.currentDate = this.currentDate.getFullYear();
  }

  public buildForm() {
    this.searchForm = this.formBuilder.group({
      town: [this.townDefaultValue, Validators.required],
      address: ['default', Validators.required],
      type: ['', [Validators.required]]
    });
  }

  public getAllTowns() {
    this.towns = this.getAllTownsService.getAllNamesAndValuesFromAvailableTowns();
  }

  public autocomplete() {}

  public onSubmit() {

    let params: any;

    // stop here if form is invalid
    if (this.searchForm.invalid) {
      return;
    }

    this.submitted = true;

    params = {
      town : this.searchForm.get('town').value,
      type : this.searchForm.get('type').value
    };

    this.callMapAndShowCoincidences(params);
  }

  public callMapAndShowCoincidences(params) {

    this.getCoincidencesService.getCommerces(params).subscribe(resp => {

      let response = null;
      let data: any = [];

      // tslint:disable-next-line: forin
      for (const dato in resp) {
        if (response === null) {
          response = resp[dato];
        } else {
          data = resp[dato];
        }
      }

      console.log('data: ', data);

      this.openList(3, data);

    });
  }

  public generateSlides() {

    let rubros: any = null;
    const town = (this.searchForm.get('town').value).trim();

    this.getRubrosByTownService.gerRubros(town).subscribe(data => {
      for (const index in data) {
        if (rubros === null) {
          rubros = [];
        } else {
          rubros = data[index];
        }
      }
      // console.log('Top Tags: ', rubros.TopTags);
      // console.log('Featured: ', rubros.Featured);

      this.fillSlidesWithData(rubros);
    });
  }

  public fillSlidesWithData(rubros) {
    this.slides1 = rubros.TopTags;
    this.slides2 = rubros.Featured;

  }

  public openList(opt, data?, busqueda?) {
    if (opt === 1) {
      const params = {
        town : this.searchForm.get('town').value,
        // address : this.searchForm.get('address').value,
        type : busqueda
      };
      // console.log('parametros: ', params);
      this.callMapAndShowCoincidences(params);
    } else if (opt === 2) {
      const navExtra: NavigationExtras = {
        state: {
          town : this.searchForm.get('town').value,
          rubros : this.slides1
        }
      };
      this.router.navigate(['/listado'], navExtra);
    } else {
      const navExtra: NavigationExtras = {
        state: {
          commerces : data
        }
      };
      this.router.navigate(['/mapaylistado'], navExtra);
    }
  }

  public abrirVidriera(id) {
    this.getBusinessDetailsService.getDetailsById(id).subscribe(response => {
      this.presentModal(this.getBusinessDetailByIdFilter(response));
    });
  }

  public getBusinessDetailByIdFilter(response) {
    let gotten = false;
    let resp;

    for (const business in response) {
      if (response[business] === 'ok') {
        gotten = true;
      } else if (gotten) {
        resp = response[business];
      }
    }

    return resp;
  }

  async presentModal(data) {
    const modal = await this.modalCtrl.create({
      component: VidrieraPage,
      componentProps: {
        comercio : data
      }
    });
    return await modal.present();
  }


}

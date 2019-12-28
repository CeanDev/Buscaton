import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit, AfterViewInit {

  @ViewChild('search', {static: false}) search: ElementRef;
  @ViewChild('step1', {static: false}) step1: ElementRef;
  @ViewChild('step2', {static: false}) step2: ElementRef;
  @ViewChild('step3', {static: false}) step3: ElementRef;
  @ViewChild('mainTitle', {static: false}) mainTitle: ElementRef;
  @ViewChild('mainSubtitle', {static: false}) mainSubtitle: ElementRef;
  @ViewChild('banner', {static: false}) banner: ElementRef;

  towns: any = ['Agronomía', 'Almagro', 'Balvanera', 'Barracas', 'Belgrano', 'Boedo', 'Caballito', 'Chacarita', 'Coghlan', 
                'Colegiales', 'Constitución', 'Flores', 'Floresta', 'La Boca', 'La Paternal', 'Liniers', 'Mataderos', 
                'Monte Castro', 'Monserrat', 'Nueva Pompeya', 'Núñez', 'Palermo', 'Parque Avellaneda', 'Parque Chacabuco', 
                'Parque Chas', 'Parque Patricios', 'Puerto Madero', 'Recoleta', 'Retiro', 'Saavedra', 'San Cristóbal', 
                'San Nicolás', 'San Telmo', 'Vélez Sársfield', 'Versalles', 'Villa Crespo', 'Villa del Parque', 'Villa Devoto', 
                'Villa General Mitre', 'Villa Lugano', 'Villa Luro', 'Villa Ortúzar', 'Villa Pueyrredón', 'Villa Real', 
                'Villa Riachuelo', 'Villa Santa Rita', 'Villa Soldati', 'Villa Urquiza'];

  selectedTown = '';
  currentDate: any = new Date();
  steps = [1, 2, 3];
  stepsCounter = 1;

  results: any = [
    {name: 'Vidriería "Los Hermanos"', address: 'Av. Callao y Av. Corrientes, 2243', id: 'd12ds2', lat : 51.678418, lng : 7.809007},
    {name: 'Librería "El Principito"', address: 'Av. Riobamba, 2034', id: '12431', lat : 53.678418, lng : 8.809007},
    {name: 'Neumáticos "Michelin"', address: 'Av. Callao 2312', id: 'cf23d2', lat : 47.678418, lng : 5.809007}
  ];
  selectedResult: any = null;
  stepTexts = [
    {
      title1 : 'Buscá tu comercio',
      title2 : '',
      subtitle1 : 'buscalo por nombre y/o dirección.',
      subtitle2: 'Si no lo encontrás, sumalo; ¡es facil!'
    },
    {
      title1 : 'completá los datos de',
      title2 : '',
      subtitle1 : 'todos los campos son obligatorios',
      subtitle2: ''
    },
    {
      title1 : '¡Felicitaciones!',
      title2 : 'Ya te registraste',
      subtitle1 : '',
      subtitle2: ''
    }
  ];
  shownText = {
    title1 : this.stepTexts[0].title1,
    title2 : this.stepTexts[0].title2,
    subtitle1 : this.stepTexts[0].subtitle1,
    subtitle2 : this.stepTexts[0].subtitle2
  };

  showResults = false;
  showSectionOne = true;
  showFillInfo = false;
  showBottomSection = false;
  moreThanFirstStep = true;

  lat: null;
  lng: null;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.currentDate = this.currentDate.getYear();
  }

  ngAfterViewInit() {
    this.render.setStyle(this.step1.nativeElement, 'background-color', 'white');
  }

  next(selectedResultId?: any) {

    this.selectedResult = selectedResultId;

    if (this.stepsCounter === 1) {
      this.render.setStyle(this.step1.nativeElement, 'background-color', 'rgba(255,255,255,.3)');
      this.render.setStyle(this.step2.nativeElement, 'background-color', 'white');

      this.shownText.title1 = this.stepTexts[1].title1;
      this.shownText.title2 = this.selectedResult != null ? selectedResultId.name : '';
      this.shownText.subtitle1 = this.stepTexts[1].subtitle1;
      this.shownText.subtitle2 = this.stepTexts[1].subtitle2;

      this.showResults = false;
      this.showSectionOne = false;
      this.showFillInfo = true;
      this.moreThanFirstStep = false;

      /*this.lat = this.selectedResult.lat;
      this.lng = this.selectedResult.lng;*/

    } else if (this.stepsCounter === 2) {
      this.showFillInfo = false;

      this.shownText.title1 = this.stepTexts[2].title1;
      this.shownText.title2 = this.stepTexts[2].title2;
      this.shownText.subtitle1 = '';
      this.shownText.subtitle2 = '';

      this.showBottomSection = true;
      this.moreThanFirstStep = true;

      this.render.setStyle(this.step2.nativeElement, 'background-color', 'rgba(255,255,255,.3)');
      this.render.setStyle(this.step3.nativeElement, 'background-color', 'white');
      this.render.setStyle(this.banner.nativeElement, 'background-image', 'url(../assets/bck_green.jpg)');
    }

    this.stepsCounter++;
  }

  getResults() {
    this.showResults = true;
  }

  goBack() {
    this.showResults = true;
    this.showSectionOne = true;
    this.showFillInfo = false;
    this.showBottomSection = false;
    this.moreThanFirstStep = true;
    this.stepsCounter = 1;
  }

}

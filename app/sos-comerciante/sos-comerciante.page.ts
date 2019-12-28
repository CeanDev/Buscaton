import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sos-comerciante',
  templateUrl: './sos-comerciante.page.html',
  styleUrls: ['./sos-comerciante.page.scss'],
})
export class SosComerciantePage implements OnInit {

  listText = [
    {text: 'Buscá tu comercio en buscatón y registrate'},
    {text: 'Completá la información de tu comercio'},
    {text: 'Sumá tus redes sociales y canales de venta digital'}
  ];

  listOfBenefits = [
    {text: 'Integración con WhatsApp', subtext: ''},
    {text: 'Botón de llamada desde tu página', subtext: ''},
    {text: 'Ubicación en el mapa de tu barrio', subtext: ''},
    {text: 'Integración de tus redes sociales', subtext: '(Facebook, Instagram, PedidosYa ¡y más!)'},
    {text: 'Descripción de tu negocio', subtext: ''},
    {text: 'Botón para compartir', subtext: ''},
    {text: 'Publicidad en nuestras redes sociales', subtext: ''},
    {text: 'Todos tus medios de contacto en 1 solo lugar', subtext: ''},
    {text: 'Opiniones de los usuarios', subtext: ''},
    {text: 'Portada personalizada y galería de fotos', subtext: ''},
    {text: 'Logotipo de tu comercio', subtext: ''},
    {text: 'Información relevante', subtext: '(Horarios, formas de pago, rubros ¡y más!)'},
    {text: 'Vidriera de productos y servicios', subtext: '(¡Te podrán encontrar por tus productos ofrecidos!)'},
    {text: 'Armado y manejo de cupones promocionales', subtext: ''}
  ];

  currentDate: any = new Date();

  constructor() { }

  ngOnInit() {
    this.currentDate = this.currentDate.getFullYear();
  }

}

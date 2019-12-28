import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {

  currentDate: any = new Date();

  constructor() { }

  ngOnInit() {
    this.currentDate = this.currentDate.getFullYear();
  }

}

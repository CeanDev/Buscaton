import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorariosPage } from './horarios.page';
import { SwitchComponent } from '../switch/switch.component';

const routes: Routes = [
  {
    path: '',
    component: HorariosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HorariosPage, SwitchComponent]
})
export class HorariosPageModule {}

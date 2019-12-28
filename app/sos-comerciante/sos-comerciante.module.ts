import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {FaqComponent} from '../faq/faq.component';

import { IonicModule } from '@ionic/angular';

import { SosComerciantePage } from './sos-comerciante.page';

const routes: Routes = [
  {
    path: '',
    component: SosComerciantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SosComerciantePage, FaqComponent]
})
export class SosComerciantePageModule {}

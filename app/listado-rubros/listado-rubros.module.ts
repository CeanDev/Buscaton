import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListadoRubrosPage } from './listado-rubros.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoRubrosPage
  }
];

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListadoRubrosPage]
})
export class ListadoRubrosPageModule {}

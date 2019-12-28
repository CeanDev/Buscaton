import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComerciosListadosPage } from './comercios-listados.page';

const routes: Routes = [
  {
    path: '',
    component: ComerciosListadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComerciosListadosPage]
})
export class ComerciosListadosPageModule {}

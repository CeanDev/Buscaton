import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { IonicModule } from '@ionic/angular';

import { VidrieraPage } from './vidriera.page';

const routes: Routes = [
  {
    path: '',
    component: VidrieraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADmgQM5McyKa5FZJpHiGClJcJL_u1YGSc'
    })
  ],
  declarations: [VidrieraPage]
})
export class VidrieraPageModule {}

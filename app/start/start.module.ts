import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StartPage } from './start.page';

import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: StartPage
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
  declarations: [StartPage]
})
export class StartPageModule {}

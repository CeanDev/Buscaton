import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShowCommerceCardPage } from './showCommerceCard.page';

const routes: Routes = [
  {
    path: '',
    component: ShowCommerceCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowCommerceCardPage]
})
export class ShowCommerceCardPageModule {}

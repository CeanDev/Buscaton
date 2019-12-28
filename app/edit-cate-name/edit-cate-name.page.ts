import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-cate-name',
  templateUrl: './edit-cate-name.page.html',
  styleUrls: ['./edit-cate-name.page.scss'],
})
export class EditCateNamePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}

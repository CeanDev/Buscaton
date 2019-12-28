import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'showCommerceCard',
  templateUrl: './showCommerceCard.page.html',
  styleUrls: ['./showCommerceCard.page.scss'],
})
export class ShowCommerceCardPage implements OnInit {

  public comercio: any;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getDataFromHome();
  }

  private getDataFromHome() {
    this.actRoute.queryParams.subscribe(data => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.comercio = this.router.getCurrentNavigation().extras.state.comercio;
        console.log('comercio: ', this.comercio);
      }
    });
  }

  dismiss() {
    this.router.navigate(['/mapaylistado']);
  }

}

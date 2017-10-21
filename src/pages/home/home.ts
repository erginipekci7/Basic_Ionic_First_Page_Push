import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  /**
   * home.html 'deki button ile openFirstPage() fonksiyonunu cagiriyoruz.
   * navCtrl ile sayfaya yonlendiriyoruz.
   */
  openFirstPage(){
    this.navCtrl.push(FirstPage)
  }

}

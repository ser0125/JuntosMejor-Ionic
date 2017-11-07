import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchRoutesPage } from '../search-routes/search-routes';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  searchRoutes(){
    this.navCtrl.setRoot(SearchRoutesPage);
  }
}

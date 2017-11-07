import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListRoutesPage } from '../list-routes/list-routes';
/**
 * Generated class for the SearchRoutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-search-routes',
  templateUrl: 'search-routes.html',
})
export class SearchRoutesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  search(){
    this.navCtrl.push(ListRoutesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchRoutesPage');
  }
}

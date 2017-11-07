import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyRoutePage } from '../my-route/my-route';

/**
 * Generated class for the ListRoutesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-list-routes',
  templateUrl: 'list-routes.html',
})
export class ListRoutesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListRoutesPage');
  }
  applyRoute(){
    this.navCtrl.push(MyRoutePage);
  }

}

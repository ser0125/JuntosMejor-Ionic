import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Route2Page } from '../route2/route2';
/**
 * Generated class for the RoutePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {

 myDate:Boolean= false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutePage');
  }

  continue(){
    this.navCtrl.setRoot(Route2Page)
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchRoutesPage } from '../search-routes/search-routes';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the PerfilPassengerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil-passenger',
  templateUrl: 'perfil-passenger.html',
})
export class PerfilPassengerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPassengerPage');
  }

  searchRoutes(){
    this.navCtrl.setRoot(SearchRoutesPage);
  }

  driverRegister(){
    this.navCtrl.setRoot(RegisterPage);
  }
}

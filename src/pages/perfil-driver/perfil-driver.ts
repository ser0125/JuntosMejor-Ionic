import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'perfil',
  templateUrl: 'perfil-driver.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  driverRegister(){
    this.navCtrl.setRoot(RegisterPage);
  }
}
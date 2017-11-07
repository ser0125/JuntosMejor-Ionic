import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchRoutesPage } from '../search-routes/search-routes';
import { RoutePage } from '../route/route';
/** 
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  Rol: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private  alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  continue(){
    
    if(this.Rol == "C"){
    this.navCtrl.setRoot(RoutePage);
    this.menuCtrl.enable(false,"menu-two");
    this.menuCtrl.enable(true,"menu-one");
    }else if(this.Rol == "P"){
      this.navCtrl.setRoot(SearchRoutesPage);
      this.menuCtrl.enable(false,"menu-one");
      this.menuCtrl.enable(true,"menu-two");
    }else{
      this.presentAlert();
    }
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'No has podido registrarte',
      subTitle: 'Falta que selecciones, si te registras como pasajero o conductor',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  home(){
    this.navCtrl.setRoot(HomePage);
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RoutePage } from '../route/route';
/**
 * Generated class for the Route2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-route2',
  templateUrl: 'route2.html',
})
export class Route2Page {

   myDate:Boolean= false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Route2Page');
  }

  updateState(){
    this.myDate = !this.myDate;
    console.log(this.myDate)
  }

    presentAlert() {
      let alert = this.alertCtrl.create({
      title: '¡Ruta publicada!',
      subTitle: 'La ruta publica ha sido publicada éxitosamente.',
      buttons: [{
        text: 'ACEPTAR',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    alert.present();
  }
  routePage(){
    this.navCtrl.setRoot(RoutePage);
  }

}

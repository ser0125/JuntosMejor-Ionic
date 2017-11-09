import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { SearchRoutesPage } from '../search-routes/search-routes';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListRoutesPage');
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
    title: '¡Solicitud enviada!',
    subTitle: 'Su transporte llegara dentro de poco',
    buttons: [{
      text: 'ACEPTAR',
      handler: () => {
        this.navCtrl.setRoot(SearchRoutesPage);
      }
    }]
  });
  alert.present();
}

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage} from '../home/home';
/**
 * Generated class for the CloseSessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-close-session',
  templateUrl: 'close-session.html',
})
export class CloseSessionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CloseSessionPage');
  }


<<<<<<< HEAD:src/pages/my-route/my-route.ts

=======
>>>>>>> Sergio:src/pages/close-session/close-session.ts
}

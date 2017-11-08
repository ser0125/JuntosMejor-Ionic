import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SearchRoutesPage } from '../search-routes/search-routes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }

  register(){
    this.navCtrl.setRoot(RegisterPage)
  }
    searchRoutes(){
      this.navCtrl.setRoot(SearchRoutesPage);
      this.menuCtrl.enable(false,"menu-one");
      this.menuCtrl.enable(true,"menu-two");
  }

}

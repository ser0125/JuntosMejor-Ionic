import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { SearchRoutesPage } from '../search-routes/search-routes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.setRoot(LoginPage)
  }
  register(){
    this.navCtrl.setRoot(RegisterPage)
  }
    SearchRoutes(){
      this.navCtrl.push(SearchRoutesPage)
  }

}

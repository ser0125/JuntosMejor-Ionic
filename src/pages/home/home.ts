import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchRoutesPage } from '../search-routes/search-routes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  SearchRoutes(){
    this.navCtrl.push(SearchRoutesPage)
  }

}

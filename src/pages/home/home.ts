import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SearchRoutesPage } from '../search-routes/search-routes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeForm: FormGroup;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public formBuilder: FormBuilder,
    public alertCtrl:AlertController) {
    this.homeForm = formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
  });
  }
  emptyAlert() {
    let alert = this.alertCtrl.create({
      title: 'Ingreso invalido',
      subTitle: 'Campos vacios',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  register(){
    this.navCtrl.setRoot(RegisterPage)
  }
    searchRoutes(){
      if(this.homeForm.valid){
      this.navCtrl.setRoot(SearchRoutesPage);
      this.menuCtrl.enable(false,"menu-one");
      this.menuCtrl.enable(true,"menu-two");
      }else{
        this.emptyAlert();
      }

  }

}

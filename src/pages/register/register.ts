import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RoutePage } from '../route/route';
import { SearchRoutesPage } from '../search-routes/search-routes';
import { MainPage } from '../main/main';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  rol:String;
  drive:Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private  alertCtrl: AlertController, public camera: Camera) {

  }

  takePhoto(){
    const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64:
   let base64Image = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
    console.log("Error")
  });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  continue(){

    if(this.rol == "C"){
    this.navCtrl.setRoot(MainPage);
    this.menuCtrl.enable(false,"menu-two");
    this.menuCtrl.enable(true,"menu-one");
  }else if(this.rol == "P"){
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

  onChange(rol){
    if(rol == "C")
     this.drive = true;
    else
     this.drive = false;
  }
}

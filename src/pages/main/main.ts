import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { RoutePage } from '../route/route';
declare var google;
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    this.getPosition();
  }


getPosition():any{
  this.geolocation.getCurrentPosition()
  .then(response => {
    this.loadMap(response);
  })
  .catch(error =>{
    console.log(error);
  })
}

loadMap(position: Geoposition){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude, longitude);

  // create a new map by passing HTMLElement
  let mapEle: HTMLElement = document.getElementById('map');

  // create LatLng object
  let myLatLng = {lat: latitude, lng: longitude};

  // create map
  this.map = new google.maps.Map(mapEle, {
    center: myLatLng,
    zoom: 12
  });

  google.maps.event.addListenerOnce(this.map, 'idle', () => {
    let marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Hello World!'
    });
    mapEle.classList.add('show-map');
  });
}

addRoute(){
  this.navCtrl.setRoot(RoutePage)
}

}

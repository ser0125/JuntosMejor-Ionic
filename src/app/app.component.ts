import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RoutePage } from '../pages/route/route';
import { PerfilPage } from '../pages/perfil-driver/perfil-driver';
import { PerfilPassengerPage } from '../pages/perfil-passenger/perfil-passenger';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;


    pages: Array<{title: string, component: any}>;
    pages2:  Array<{title: string, component: any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, ) {
    this.initializeApp();
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mi perfil', component: PerfilPage },
      { title: 'Nueva ruta', component: RoutePage },
      { title: 'Acerca de ...', component: AboutPage }
    ];
    this.pages2 = [
      { title: 'Mi perfil', component: PerfilPassengerPage },
      { title: 'Acerca de ...', component: AboutPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

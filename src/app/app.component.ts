import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil-driver/perfil-driver';
import { PerfilPassengerPage } from '../pages/perfil-passenger/perfil-passenger';
import { AboutPage } from '../pages/about/about';
import { CloseSessionPage } from '../pages/close-session/close-session';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;


    pages: Array<{title: string, image: string, component: any}>;
    pages2: Array<{title: string, image: string, component: any}>;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mi perfil', image: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png", component: PerfilPage },
      { title: 'Acerca de ...', image: "https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/info.png", component: AboutPage },
      { title: 'Cerrar sesión', image: "https://cdn0.iconfinder.com/data/icons/octicons/1024/sign-out-128.png", component: CloseSessionPage }
    ];
    this.pages2 = [
      { title: 'Mi perfil', image: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png", component: PerfilPassengerPage },
      { title: 'Acerca de ...', image: "https://cdn4.iconfinder.com/data/icons/meBaze-Freebies/512/info.png", component: AboutPage },
      { title: 'Cerrar sesión', image: "https://cdn0.iconfinder.com/data/icons/octicons/1024/sign-out-128.png", component: CloseSessionPage }
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

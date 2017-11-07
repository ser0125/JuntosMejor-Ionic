import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MainPage } from '../pages/main/main';
import { RoutePage } from '../pages/route/route';
import { Route2Page } from '../pages/route2/route2';
import { SearchRoutesPage } from '../pages/search-routes/search-routes';
import { ListRoutesPage } from '../pages/list-routes/list-routes';
import { MyRoutePage } from '../pages/my-route/my-route';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    RoutePage,
    Route2Page,
    SearchRoutesPage,
    ListRoutesPage,
    MyRoutePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MainPage,
    RoutePage,
    Route2Page,
    SearchRoutesPage,
    ListRoutesPage,
    MyRoutePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

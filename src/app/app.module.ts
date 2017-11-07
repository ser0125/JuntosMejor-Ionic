import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchRoutesPage } from '../pages/search-routes/search-routes';
import { ListRoutesPage } from '../pages/list-routes/list-routes';
import { MyRoutePage } from '../pages/my-route/my-route';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    SearchRoutesPage,
    ListRoutesPage,
    MyRoutePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

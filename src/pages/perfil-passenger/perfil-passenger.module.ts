import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilPassengerPage } from './perfil-passenger';

@NgModule({
  declarations: [
    PerfilPassengerPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilPassengerPage),
  ],
})
export class PerfilPassengerPageModule {}

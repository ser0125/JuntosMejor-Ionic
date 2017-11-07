import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CloseSessionPage } from './close-session';

@NgModule({
  declarations: [
    CloseSessionPage,
  ],
  imports: [
    IonicPageModule.forChild(CloseSessionPage),
  ],
})
export class CloseSessionPageModule {}

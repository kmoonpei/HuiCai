import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeColorComponent } from './change-color';

@NgModule({
  declarations: [
    ChangeColorComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChangeColorComponent),
  ],
  exports: [
    ChangeColorComponent
  ]
})
export class ChangeColorComponentModule {}

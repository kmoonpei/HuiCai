import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PalletComponent } from './pallet';

@NgModule({
  declarations: [
    PalletComponent,
  ],
  imports: [
    IonicPageModule.forChild(PalletComponent),
  ],
  exports: [
    PalletComponent
  ]
})
export class PalletComponentModule {}

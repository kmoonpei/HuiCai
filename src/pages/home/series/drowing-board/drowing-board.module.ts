import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { DrowingBoardPage } from './drowing-board';
import { ChangeColorComponent } from '../../../../components/change-color/change-color'
import { PalletComponent } from '../../../../components/pallet/pallet'

@NgModule({
  declarations: [
    DrowingBoardPage,
    ChangeColorComponent,
    PalletComponent
  ],
  imports: [
    IonicPageModule.forChild(DrowingBoardPage),
  ],
  entryComponents: [
    DrowingBoardPage,
    ChangeColorComponent,
    PalletComponent
  ],
  exports: [

  ]
})
export class DrowingBoardModule {}

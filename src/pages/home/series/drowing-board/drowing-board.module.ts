import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, IonicPageModule } from 'ionic-angular';
import { ChangeColorPage } from './change-color/change-color';
import { DrowingBoardPage } from './drowing-board';


@NgModule({
  declarations: [
    ChangeColorPage,
  ],
  imports: [
    // IonicPageModule.forChild(StudentPage),
    ChangeColorPage,
    // IonicPageModule.forChild(ChangeColorPage),
  ],
  entryComponents: [
    ChangeColorPage,
    DrowingBoardPage
  ],
})
export class DrowingBoardModule {}

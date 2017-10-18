import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SeriesPage } from './series';
import { DrowingBoardPage } from './drowing-board/drowing-board';
 


@NgModule({
  imports: [
    BrowserModule,
    IonicModule,
  ],
  declarations: [
    DrowingBoardPage
  ],
  entryComponents: [
    SeriesPage,
    DrowingBoardPage
  ],
  providers: [
    
  ],
  exports: [IonicModule]
})
export class SeriesModule {}

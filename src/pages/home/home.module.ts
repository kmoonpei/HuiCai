import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HomePage } from './home';
import { SeriesPage } from './series/series';

 


@NgModule({
  imports: [
    BrowserModule,
    IonicModule
  ],
  declarations: [
    // HomePage,
    SeriesPage
  ],
  entryComponents: [
    HomePage,
    SeriesPage
  ],
  providers: [
    
  ],
  exports: [IonicModule]
})
export class HomeModule {}

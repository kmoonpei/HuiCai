import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeriesPage } from './series/series'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openSeries(){
    this.navCtrl.push(SeriesPage);
  }

}

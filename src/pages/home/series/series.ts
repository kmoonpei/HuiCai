import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { DrowingBoardPage } from './drowing-board/drowing-board'

@Component({
    selector: 'page-series',
    templateUrl: 'series.html'
})
export class SeriesPage {
    constructor(public navCtrl: NavController) {
        
    }
    openDrowingBoard(){
        this.navCtrl.push(DrowingBoardPage)
    }
}
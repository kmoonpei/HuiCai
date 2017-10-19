import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';


@Component({
    selector: 'page-drowing-board',
    templateUrl: 'drowing-board.html',
})
export class DrowingBoardPage {
    isShowColorBoard = false;
    constructor(public navCtrl: NavController,
                private dialogs: Dialogs){

    }
    showPallet(){
        this.isShowColorBoard = true;
    }
}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
// import { ChangeColorPage } from './change-color/change-color';


@Component({
    selector: 'page-drowing-board',
    templateUrl: 'drowing-board.html'
})
export class DrowingBoardPage {
    isShowColorBoard: true;
    constructor(public navCtrl: NavController,
                private dialogs: Dialogs){

    }
    showPallet(){
        // this.dialogs.alert('hello')
        // .then(() => console.log('Dialog dismissed'))
        // .catch(e => console.log('Error displaying dialog',e))
        this.isShowColorBoard = true;
    }
}
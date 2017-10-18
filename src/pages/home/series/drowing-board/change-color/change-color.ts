import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Color } from './colorObj';


@Component({
    selector: 'page-change-color',
    templateUrl: 'change-color.html'
})


export class ChangeColorPage {
    colors = [  new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111'),
                new Color('#111111')
            ] 
    constructor(public navCtrl: NavController){
    }

}


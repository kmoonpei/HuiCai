import { Component } from '@angular/core';

/**
 * Generated class for the PalletComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pallet',
  templateUrl: 'pallet.html'
})
export class PalletComponent {

  text: string;

  constructor() {
    console.log('Hello PalletComponent Component');
    this.text = 'Hello World';
  }

}

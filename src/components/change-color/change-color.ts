import { Component } from '@angular/core';

/**
 * Generated class for the ChangeColorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'change-color',
  templateUrl: 'change-color.html'
})
export class ChangeColorComponent {

  text: string = "aaaa";

  constructor() {
    console.log('Hello ChangeColorComponent Component');
    this.text = 'Hello World';
  }

}

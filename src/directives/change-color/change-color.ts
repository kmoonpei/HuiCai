import { Directive } from '@angular/core';

/**
 * Generated class for the ChangeColorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[change-color]' // Attribute selector
})
export class ChangeColorDirective {

  constructor() {
    console.log('Hello ChangeColorDirective Directive');
  }

}

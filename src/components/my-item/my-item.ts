import { Component } from '@angular/core';

/**
 * Generated class for the MyItem component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'my-item',
  templateUrl: 'my-item.html'
})
export class MyItem {

  text: string;

  constructor() {
    console.log('Hello MyItem Component');
    this.text = 'Hello World';
  }

}

import {Component, Input} from 'angular2/core';
import {NgIf, NgFor} from 'angular2/common';

@Component({
  selector:    'list-errors',
  templateUrl: 'src/app/common/components/layout/listErrors.html',
  directives:  [NgIf, NgFor]
})
export class ListErrorsComponent {
  public appName: string;
  public errorKeys: Array<string>;

  @Input() errors: any;

  constructor() {
    this.errorKeys = [];
  }

  getErrors(key) {
    if(this.errors.hasOwnProperty(key)) {
      return this.errors[key];
    } else {
      return [];
    }
  }

  buildErrors() {
    if(Object.keys(this.errors).length > 0) {
      this.errorKeys = Object.keys(this.errors);
    } else {
      this.errors = { };
    }
  }

  hasErrors() {
    this.buildErrors();
    return Object.keys(this.errors).length > 0;
  }
}

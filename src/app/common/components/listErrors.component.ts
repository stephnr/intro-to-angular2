import {Component, Input} from 'angular2/core';
import {NgIf, NgFor} from 'angular2/common';

@Component({
  selector:    'list-errors',
  templateUrl: 'src/app/common/components/layout/listErrors.html',
  directives:  [NgIf, NgFor]
})
export class ListErrorsComponent {
  appName: string;
  errorKeys: Array<string>;
  @Input() errors: any;

  constructor() {
    this.errorKeys = [];
  }

  getErrors(key) {
    if(this.errors.errors.hasOwnProperty(key)) {
      return this.errors.errors[key];
    } else {
      return [];
    }
  }

  buildErrors() {
    if(Object.keys(this.errors).length > 0) {
      this.errorKeys = Object.keys(this.errors.errors);
    } else {
      this.errors = { errors: {} };
    }
  }

  hasErrors() {
    this.buildErrors();
    return Object.keys(this.errors).length > 0;
  }
}

import {NgForm, NgModel} from 'angular2/common';
import {Component, Input} from 'angular2/core';

@Component({
  selector: 'auth-form',
  templateUrl: 'src/app/auth/layout/authForm.html',
  directives: [NgForm, NgModel]
})
export class AuthFormComponent {
  formData: Object;
  @Input() authType: string;
  @Input() submitTitle: string;

  constructor() {
    this.formData = {
      email:    '',
      password: ''
    }
    this.authType = 'login';
  }

  onSubmit() {
    console.log(this.formData);
  }
}

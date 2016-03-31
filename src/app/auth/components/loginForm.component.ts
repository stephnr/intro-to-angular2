import {NgForm, NgModel} from 'angular2/common';
import {Component} from 'angular2/core';

@Component({
  selector: 'login-form',
  templateUrl: 'src/app/auth/layout/login.html',
  directives: [NgForm, NgModel]
})
export class LoginFormComponent {
  formData: Object;

  constructor() {
    this.formData = {
      email:    '',
      password: ''
    }
  }

  onSubmit() {
    console.log(this.formData);
  }
}

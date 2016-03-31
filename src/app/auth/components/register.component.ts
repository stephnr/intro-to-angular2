import {NgIf} from 'angular2/common';
import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthFormComponent} from './authForm.component';

@Component({
  selector: 'register',
  templateUrl: 'src/app/auth/layout/auth.html',
  directives: [ROUTER_DIRECTIVES, NgIf, AuthFormComponent]
})
export class RegisterComponent {
  title: string;
  authType: string;
  submitTitle: string;

  constructor(private _router: Router) {
    this.title = 'Sign Up';
    this.authType = 'register';
    this.submitTitle = 'Sign Up';
  }
}

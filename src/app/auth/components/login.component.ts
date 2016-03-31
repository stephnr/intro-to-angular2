import {NgIf} from 'angular2/common';
import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {LoginFormComponent} from './loginForm.component';

@Component({
  selector: 'login',
  templateUrl: 'src/app/auth/layout/auth.html',
  directives: [ROUTER_DIRECTIVES, NgIf, LoginFormComponent]
})
export class LoginComponent {
  title: string;
  authType: string;

  constructor(private _router: Router) {
    this.title = 'Sign In';
    this.authType = 'login';
  }
}

import {NgIf} from 'angular2/common';
import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'register',
  templateUrl: 'src/app/auth/layout/auth.html',
  directives: [ROUTER_DIRECTIVES, NgIf]
})
export class RegisterComponent {
  title: string;
  authType: string;

  constructor(private _router: Router) {
    this.title = 'Sign Up';
    this.authType = 'register';
  }
}

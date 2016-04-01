/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {NgIf} from 'angular2/common';
import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {AuthFormComponent} from './authForm.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector: 'login',
  templateUrl: 'src/app/auth/layout/auth.html',
  directives: [ROUTER_DIRECTIVES, NgIf, AuthFormComponent]
})
export class LoginComponent {
  title: string;
  authType: string;
  submitTitle: string;

  constructor(private _router: Router) {
    this.title = 'Sign In';
    this.authType = 'login';
    this.submitTitle = 'Sign In';
  }
}

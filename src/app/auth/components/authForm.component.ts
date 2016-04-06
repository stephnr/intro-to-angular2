/// <reference path="./definitions/user.d.ts"/>

/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';
import {Component, Input, OnInit, OnDestroy} from 'angular2/core';
import {Router} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

import {ListErrorsComponent} from '../../common/components/listErrors.component';
import {UserService} from '../../common/services/user.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'auth-form',
  templateUrl: 'src/app/auth/layout/authForm.html',
  directives:  [FORM_DIRECTIVES, ListErrorsComponent],
  providers:   [UserService]
})
export class AuthFormComponent implements OnInit, OnDestroy {
  formData: Object;
  errors: Object;

  subscription: Subscription;

  @Input() authType: string;
  @Input() submitTitle: string;

  constructor(private _userService: UserService, private _router: Router) {
    this.formData = new ControlGroup({
      username: new Control(''),
      email:    new Control(''),
      password: new Control('')
    });
    this.errors = {};
    this.authType = 'login';

    this.subscription = this._userService.errorsAnnounced$.subscribe(
      errors => {
        this.errors = errors;
      }
    );
  }

  onSubmit() {
    this._userService.attemptAuth(this.authType, JSON.stringify({
      user: this.formData['value']
    }));
  }

  ngOnInit() {
    this._userService.ensureAuthIs(false);
  }

  ngOnDestroy(){
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}

/// <reference path="./definitions/user.d.ts"/>

import {FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';
import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';

import {ListErrorsComponent} from '../../common/components/listErrors.component';
import {UserService} from '../../common/services/user.service';

@Component({
  selector:    'auth-form',
  templateUrl: 'src/app/auth/layout/authForm.html',
  directives:  [FORM_DIRECTIVES, ListErrorsComponent],
  providers:   [UserService]
})
export class AuthFormComponent {
  formData: Object;
  errors: Object;

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

    this._userService.errorsAnnounced$.subscribe(
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
}

/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, OnInit, OnDestroy} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';
import {Router} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

import {UserService} from '../common/services/user.service';
import {User} from '../auth/components/user';

import {ListErrorsComponent} from '../common/components/listErrors.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'settings',
  templateUrl: 'src/app/settings/layout/settings.html',
  directives:  [FORM_DIRECTIVES, ListErrorsComponent],
  providers:   [UserService]
})
export class SettingsComponent implements OnInit, OnDestroy {
  public isSubmitting: boolean;
  public formData: ControlGroup;
  public errors: any;
  public user: User;

  private userSubscription: Subscription;

  constructor(private _router: Router, private _userService: UserService) {
    this.isSubmitting = false;
    this.errors = {};

    this.formData = new ControlGroup({
      image: new Control(''),
      username: new Control(''),
      bio: new Control(''),
      email: new Control(''),
      password: new Control('')
    });

    this.userSubscription = this._userService.userAnnounced$.subscribe(
      (user: any) => {
        this.user = user;
        this.formData = new ControlGroup({
          image: new Control(user.image),
          username: new Control(user.username),
          bio: new Control(user.bio),
          email: new Control(user.email),
          password: new Control('')
        });
      }
    );
  }

  submitForm() {
    this.isSubmitting = true;

    this._userService.update(this.formData.value).then(
      (user) => {
        this.isSubmitting = false;
        this._router.navigate(['Profile', { username: this.user.username }]);
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.json().errors;
      }
    )
  }

  logout() {
    this._userService.logout();
  }

  ngOnInit() {
    this._userService.getUser();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}

/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {NgIf} from 'angular2/common';

import {Component, OnInit, OnDestroy} from 'angular2/core';
import {Router, Location, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

import {UserService} from '../services/user.service';
import {User} from '../../auth/components/user';

import {AUTHORIZE_DIRECTIVES} from '../directives/isAuthorized.directive';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'app-header',
  templateUrl: 'src/app/common/components/layout/appHeader.html',
  directives:  [NgIf, ROUTER_DIRECTIVES, AUTHORIZE_DIRECTIVES],
  providers:   [UserService]
})
export class AppHeader implements OnInit, OnDestroy {
  public appName: string;
  public user: User;

  private userSubscription: Subscription;

  constructor(private _router: Router, private _location: Location, private _userService: UserService) {
    this.appName = 'conduit';
    this.user = new User();

    this.userSubscription = this._userService.userAnnounced$.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  /*=============================================>>>>>
  = HELPERS =
  ===============================================>>>>>*/

  isActive(component: string) {
    return this._router.hostComponent.name === component;
  }

  isAuthorized() {
    return this._userService.isAuthorized();
  }

  imageExists() {
    return this.user.image ? this.user.image.length > 0 : false;
  }

  /*= End of HELPERS =*/
  /*=============================================<<<<<*/

  ngOnInit() {
    this._userService.getUser();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}

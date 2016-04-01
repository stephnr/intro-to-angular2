/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, OnInit} from 'angular2/core';
import {Router, Location, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

import {UserService} from '../services/user.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'app-header',
  templateUrl: 'src/app/common/components/layout/appHeader.html',
  directives:  [ROUTER_DIRECTIVES],
  providers:   [UserService]
})
export class AppHeader implements OnInit {
  public appName: string;
  public user: User;

  private userSubscription: Subscription;

  constructor(private _router: Router, private _location: Location, private _userService: UserService) {
    this.appName = 'conduit';
    this.userSubscription = this._userService.userAnnounced$.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  isActive(component: string) {
    return this._router.hostComponent.name === component;
  }

  isAuthorized() {
    return this._userService.isAuthorized();
  }

  ngOnInit() {
    this._userService.getUser();
  }
}

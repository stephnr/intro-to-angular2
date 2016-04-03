/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {COMMON_DIRECTIVES} from 'angular2/common';

import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

import {UserService} from '../common/services/user.service';
import {User} from '../auth/components/user';

import {TagsService} from '../common/services/tags.service';

import {AUTHORIZE_DIRECTIVES} from '../common/directives/isAuthorized.directive';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'home',
  templateUrl: 'src/app/home/layout/home.html',
  directives:  [COMMON_DIRECTIVES, ROUTER_DIRECTIVES, AUTHORIZE_DIRECTIVES],
  providers:   [UserService, TagsService]
})
export class HomeComponent implements OnInit {
  public appName: string;
  public listConfig: any;

  public userSubscription: Subscription;
  public tagsSubscription: Subscription;

  public user: User;
  public tags: Object;

  constructor(private _router: Router, private _routeParams: RouteParams, private _userService: UserService, private _tagsService: TagsService) {
    this.appName = 'conduit';
    this.user = new User();
    this.listConfig = {
      type: 'all'
    };
    this.tags = [];

    this.userSubscription = this._userService.userAnnounced$.subscribe(
      (user: User) => {
        this.user = user;
        this.listConfig.type = 'feed';
      }
    );

    this.tagsSubscription = this._tagsService.tagsAnnounced$.subscribe(
      (tags: any) => {
        this.tags = tags.tags;
      }
    );
  }

  changeList(list: any) {
    this.listConfig = list;
  }

  tagFilterExists() {
    return this.listConfig.filters ? this.listConfig.hasOwnProperty('tag') : false;;
  }

  ngOnInit() {
    this._userService.getUser();
    this._tagsService.getAll();
  }
}

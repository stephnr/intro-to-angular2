/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {AUTHORIZE_DIRECTIVES} from '../common/directives/isAuthorized.directive';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector: 'home',
  templateUrl: 'src/app/home/layout/home.html',
  directives: [ROUTER_DIRECTIVES, AUTHORIZE_DIRECTIVES]
})
export class HomeComponent implements OnInit {
  appName: string;

  constructor(private _router: Router, private _routeParams: RouteParams) {
    this.appName = 'conduit';
  }

  ngOnInit() {}
}

import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'home',
  templateUrl: 'src/app/home/layout/home.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit {
  appName: string;

  constructor(private _router: Router, private _routeParams: RouteParams) {
    this.appName = 'conduit';
  }

  ngOnInit() {}
}

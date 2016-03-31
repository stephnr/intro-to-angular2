import {Component} from 'angular2/core';
import {Router, Location, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'app-header',
  templateUrl: 'src/app/common/components/layout/appHeader.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppHeader {
  appName: string;

  constructor(private _router: Router, private _location: Location) {
    this.appName = 'conduit';
  }

  isActive(url: string) {
    return this._location.path() === url;
  }
}

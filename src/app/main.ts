/// <reference path="../../typings/main.d.ts"/>

import 'rxjs/Rx';

import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent}     from './app.component';
import {Title} from 'angular2/platform/browser';

import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {SiteTitleService} from './common/services/siteTitle.service';
import {JWTService} from './common/services/jwt.service';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  Title,
  SiteTitleService,
  JWTService,
  provide(APP_BASE_HREF, {useValue : '/'}),
]);

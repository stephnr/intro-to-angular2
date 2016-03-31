/// <reference path="../../typings/main.d.ts"/>

import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent}     from './app.component';
import {Title} from 'angular2/platform/browser';

import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';

import {SiteTitleService} from './common/services/siteTitle.service';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  Title,
  SiteTitleService,
  provide(APP_BASE_HREF, {useValue : '/'}),
]);

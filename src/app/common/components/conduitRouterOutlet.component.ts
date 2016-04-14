import {Directive, ElementRef, DynamicComponentLoader, Attribute} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';

import {APP_CONSTANTS} from '../constants/app.constants';

@Directive({
  selector: 'conduit-router-outlet'
})
export class ConduitRouterOutlet extends RouterOutlet {
  private parentRouter: Router;
  private publicRoutes: any;

  constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader, _parentRouter: Router, @Attribute('name') nameAttr: string) {
    super(_elementRef, _loader, _parentRouter, nameAttr);
    this.parentRouter = _parentRouter;
    this.publicRoutes = {
      'home': true,
      'login': true,
      'register': true,
      '@': true
    };
  }

  activate(nextInstruction: ComponentInstruction) {
    const url: any = nextInstruction.urlPath.split('/').shift();
    if (!this.publicRoutes[url] && !window.localStorage.getItem(APP_CONSTANTS.jwtKey)) {
      this.parentRouter.navigate(['Login']);
    }

    return super.activate(nextInstruction);
  }
}

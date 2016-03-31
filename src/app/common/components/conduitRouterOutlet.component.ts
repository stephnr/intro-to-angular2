import {Directive, ElementRef, DynamicComponentLoader, Attribute} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';

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
      'signup': true
    };
  }

  activate(nextInstruction: ComponentInstruction) {
    const url = nextInstruction.urlPath;
    if (!this.publicRoutes[url] && !window.localStorage.getItem('jwt')) {
      this.parentRouter.navigate(['Login']);
    }
    return super.activate(nextInstruction);
  }
}

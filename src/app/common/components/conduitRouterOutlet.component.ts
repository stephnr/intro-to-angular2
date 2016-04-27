/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

import {Directive, ElementRef, DynamicComponentLoader, Attribute} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';

import {APP_CONSTANTS} from '../constants/app.constants';

/*= End of MODULES =*/
/*=============================================<<<<<*/

@Directive({
  selector: 'conduit-router-outlet'
})
export class ConduitRouterOutlet extends RouterOutlet {
  /**
   * Defines the parent router (if one exists)
   * @type {Router}
   */
  private parentRouter: Router;

  /**
   * Map of routes and flags defining public/private access
   * @type {Object}
   */
  private publicRoutes: Object;

  /**
   * ConduitRouter Constructor
   * @param  {ElementRef}             _elementRef       a wrapper around the native element inside of the view
   * @param  {DynamicComponentLoader} _loader           service for instantiating a component and attaching it to a view at a specified location
   * @param  {Router}                 _parentRouter     class containing mapper for of urls to components
   * @param  {[type]}                 nameAttr          name attribute value provided by view
   */
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

  /**
   * Event called on router redirect before component loaded
   * @param  {ComponentInstruction} nextInstruction     the route state for a single component
   */
  activate(nextInstruction: ComponentInstruction) {
    const url: any = nextInstruction.urlPath.split('/').shift();

    if (!this.publicRoutes[url] && !window.localStorage.getItem(APP_CONSTANTS.jwtKey)) {
      this.parentRouter.navigate(['Login']);
    }

    return super.activate(nextInstruction);
  }
}

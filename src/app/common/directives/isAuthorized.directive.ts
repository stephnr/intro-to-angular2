/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Directive, ElementRef, Input} from 'angular2/core';

import {UserService} from '../services/user.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Directive({
  selector: '[showAuthorized]',
  providers: [UserService]
})
export class ShowAuthorizedDirective {
  constructor(el: ElementRef, private _userService: UserService) {
    if(!this._userService.isAuthorized()) {
      el.nativeElement.parentNode.removeChild(el.nativeElement);
    }
  }
}

@Directive({
  selector: '[showUnAuthorized]',
  providers: [UserService]
})
export class ShowUnAuthorizedDirective {
  constructor(el: ElementRef, private _userService: UserService) {
    if(this._userService.isAuthorized()) {
      el.nativeElement.parentNode.removeChild(el.nativeElement);
    }
  }
}

export const AUTHORIZE_DIRECTIVES: any[] = [ ShowAuthorizedDirective, ShowUnAuthorizedDirective ];

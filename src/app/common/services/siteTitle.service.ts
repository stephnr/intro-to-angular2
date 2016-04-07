/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Injectable} from 'angular2/core';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Injectable()
export class SiteTitleService {
  capitalize(url: string) {
    return `${url.charAt(0).toUpperCase()}${url.slice(1)}`;
  }

  getSiteTitle(url: string) {
    return this.capitalize(url.replace(/\/$/g, ''));
  }
}

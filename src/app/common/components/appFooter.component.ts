/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'app-footer',
  templateUrl: 'src/app/common/components/layout/appFooter.html',
  directives:   [RouterLink]
})
export class AppFooter {
  public appName: string;
  public date: Date;

  constructor() {
    this.appName = 'conduit';
    this.date = new Date();
  }
}

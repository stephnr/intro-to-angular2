/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= SERVICES =
===============================================>>>>>*/

import {SiteTitleService} from './common/services/siteTitle.service';

/*= End of SERVICES =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= ROUTE COMPONENTS =
===============================================>>>>>*/

import {ConduitRouterOutlet} from './common/components/conduitRouterOutlet.component';

import {AppHeader} from './common/components/appHeader.component';
import {AppFooter} from './common/components/appFooter.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login.component';
import { RegisterComponent } from './auth/components/register.component';

/*= End of ROUTE COMPONENTS =*/
/*=============================================<<<<<*/

@Component({
  selector: 'conduit-app',
  templateUrl: 'src/app/common/components/layout/appView.html',
  directives: [ROUTER_DIRECTIVES, ConduitRouterOutlet, AppHeader, AppFooter]
})
@RouteConfig([

  { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
  { path: '/login', name: 'Login', component: LoginComponent  },
  // { path: '/logout', name: 'Logout', component: LogoutComponent  },
  { path: '/register', name: 'Register', component: RegisterComponent  },
  // { path: '/settings', name: 'Settings', component: SettingsComponent  },
  // { path: '/editor', name: 'Editor', component: EditorComponent  },
  // { path: '/editor/:articleId', name: 'Edit-Article', component: EditArticleComponent  },
  // { path: '/article/:articleId', name: 'View-Article', component: ArticleComponent  },
  // { path: '/@/:username', name: 'User', component: ProfilePageComponent  },
  // { path: '/@/:username', name: 'User-Favorites', component: UserFavoritesComponent  }
])
export class AppComponent {
  constructor(private _router: Router, title: Title, private SiteTitleService: SiteTitleService) {
    _router.subscribe((url) => {
      title.setTitle(`${SiteTitleService.getSiteTitle(url)} — Conduit`);
    });
  }
}

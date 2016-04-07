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

import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login.component';
import { RegisterComponent } from './auth/components/register.component';
import { EditorComponent } from './editor/editor.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFavoritesComponent } from './profile/profileFavorites.component';

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
  { path: '/register', name: 'Register', component: RegisterComponent  },
  { path: '/settings', name: 'Settings', component: SettingsComponent  },
  { path: '/editor', name: 'Editor', component: EditorComponent  },
  { path: '/editor/:slug', name: 'Edit-Article', component: EditorComponent  },
  { path: '/article/:slug', name: 'View-Article', component: ArticleComponent  },
  { path: '/@/:username', name: 'Profile', component: ProfileComponent  }
])
export class AppComponent {
  constructor(private _router: Router, title: Title, private SiteTitleService: SiteTitleService) {
    _router.subscribe((url) => {
      title.setTitle(`${SiteTitleService.getSiteTitle(url)} — Conduit`);
    });
  }
}

/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';
import {Component, OnInit, OnDestroy} from 'angular2/core';
import {Router, RouteParams, RouterLink} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

import {ArticleService} from '../common/services/articles.service';
import {UserService} from '../common/services/user.service';

import {User} from '../auth/components/user';
import {Article} from './article';

import {AUTHORIZE_DIRECTIVES} from '../common/directives/isAuthorized.directive';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article',
  templateUrl: 'src/app/article/layout/article.html',
  directives:  [RouterLink, AUTHORIZE_DIRECTIVES],
  providers:   [ArticleService, UserService]
})
export class ArticleComponent implements OnInit, OnDestroy {
  public article: Article;
  public commentForm: any;
  public user: any;

  private _userSubscription: Subscription;

  constructor(private _router: Router, private _routeParams: RouteParams, private _articleService: ArticleService, private _userService: UserService) {
    this.article = new Article();
    this.commentForm = new ControlGroup({
      body: new Control('')
    });
    this.user = new User();

    this._articleService.get(this._routeParams.params['slug']).then((res: any) => {
      this.article = res.json().article;
    });

    this._userSubscription = this._userService.userAnnounced$.subscribe(
      user => {
        this.user = user;
        console.log(this.user);
      }
    );
  }

  imageExists() {
    return this.user.image ? this.user.image.length > 0 : false;
  }

  addComment() {
    console.log(this.commentForm);
  }

  ngOnInit() {
    this._userService.getUser();
  }

  ngOnDestroy() {
    this._userSubscription.unsubscribe();
  }
}

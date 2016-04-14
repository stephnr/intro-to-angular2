/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';
import {Component, OnInit, OnDestroy} from 'angular2/core';
import {Router, RouteParams, RouterLink} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

import {ArticleService} from '../common/services/articles.service';
import {UserService} from '../common/services/user.service';
import {CommentService} from '../common/services/comments.service';

import {User} from '../auth/components/user';
import {Article} from './article';

import {ListErrorsComponent} from '../common/components/listErrors.component';
import {ArticleActions} from './articleActions.component';
import {FavoriteButton} from '../common/components/favoriteBtn.component';
import {Comment} from './comment.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article',
  templateUrl: 'src/app/article/layout/article.html',
  directives:  [RouterLink, ArticleActions, Comment, FavoriteButton, ListErrorsComponent],
  providers:   [ArticleService, UserService, CommentService]
})
export class ArticleComponent implements OnInit, OnDestroy {
  public article: Article;
  public comments: Array<any>;
  public commentForm: any;
  public user: any;
  public errors: any;

  private _userSubscription: Subscription;

  constructor(private _router: Router, private _routeParams: RouteParams, private _articleService: ArticleService, private _userService: UserService, private _commentService: CommentService) {
    this._resetVars();

    this._articleService.get(this._routeParams.params['slug']).then((res: any) => {
      this.article = res.json().article;

      // Load comments
      this._commentService.getAll(this.article.slug).then(
        (res: any) => this.comments = res.json().comments
      );
    });

    this._userSubscription = this._userService.userAnnounced$.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  isAuthorized(condition: boolean) {
    return !(this._userService.isAuthorized() !== condition);
  }

  imageExists() {
    return this.user.image ? this.user.image.length > 0 : false;
  }

  addComment() {
    this._commentService.add(this.article.slug, this.commentForm.value.body).then(
      (comment: any) => {
        this.comments.unshift(comment);
      }
    ).catch(
      (err: any) => {
        this.errors = err.json().errors;
      }
    );
  }

  deleteComment($event: any) {
    this._commentService.destroy($event.commentId, this._routeParams.params['slug']).then(
      (success) => {
        this.comments.splice($event.index, 1);
      }
    );
  }

  private _resetVars() {
    this.errors = {};
    this.article = new Article();
    this.commentForm = new ControlGroup({
      body: new Control('')
    });
    this.user = new User();
  }

  ngOnInit() {
    this._userService.getUser();
  }

  ngOnDestroy() {
    this._userSubscription.unsubscribe();
  }
}

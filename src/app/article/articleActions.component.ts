/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {NgIf} from 'angular2/common';
import {Component, Input, OnInit, OnDestroy} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

import {ArticleService} from '../common/services/articles.service';
import {UserService} from '../common/services/user.service';

import {User} from '../auth/components/user';
import {Article} from './article';

import {ArticleMeta} from './articleMeta.component'
import {FavoriteButton} from '../common/components/favoriteBtn.component';
import {FollowBtn} from '../common/components/followBtn.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article-actions',
  templateUrl: 'src/app/article/layout/articleActions.html',
  providers:   [ArticleService, UserService],
  directives:  [NgIf, RouterLink, ArticleMeta, FavoriteButton, FollowBtn]
})
export class ArticleActions implements OnInit, OnDestroy {
  public canModify: boolean;
  public isDeleting: boolean;

  @Input() article: Article;
  @Input() user: User;

  private _userSubscription: Subscription;

  constructor(private _router: Router, private _articleService: ArticleService, private _userService: UserService) {
    this._userSubscription = this._userService.userAnnounced$.subscribe(
      user => {
        this.user = user;
        this.canModify = (this.user.username === this.article.author.username);
      }
    );
  }

  deleteArticle() {
    this.isDeleting = true;
    this._articleService.destroy(this.article.slug).then(
      (success) => this._router.navigate(['Home'])
    ).catch(
      (err) => this._router.navigate(['Home'])
    );
  }

  ngOnInit() {
    if(this.article === undefined) this.article = new Article();
    this.canModify = false;
    this._userService.getUser();
  }

  ngOnDestroy() {
    this._userSubscription.unsubscribe();
  }
}

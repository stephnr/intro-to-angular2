/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {NgIf} from 'angular2/common';
import {Component, Input} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';

import {ArticleService} from '../common/services/articles.service';

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
  providers:   [ArticleService],
  directives:  [NgIf, ArticleMeta, FavoriteButton, FollowBtn]
})
export class ArticleActions {
  public canModify: boolean;
  public isDeleting: boolean;

  @Input() article: Article;
  @Input() user: User;

  constructor(private _router: Router, private _articleService: ArticleService) {
    if(this.article === undefined) this.article = new Article();

    if(this.user) {
      this.canModify = (this.user.username === this.article.author.username);
    } else {
      this.canModify = false;
    }
  }

  deleteArticle() {
    this.isDeleting = true;
    this._articleService.destroy(this.article.slug).then(
      (success) => this._router.navigate(['Home'])
    ).catch(
      (err) => this._router.navigate(['Home'])
    );
  }
}

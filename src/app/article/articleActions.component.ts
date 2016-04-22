/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {NgIf} from 'angular2/common';
import {Component, Input, AfterContentChecked} from 'angular2/core';
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
  directives:  [NgIf, RouterLink, ArticleMeta, FavoriteButton, FollowBtn]
})
export class ArticleActions implements AfterContentChecked {
  public canModify: boolean;
  public isDeleting: boolean;

  @Input() user: User;
  @Input() article: Article;

  constructor(private _router: Router, private _articleService: ArticleService) {}

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
  }

  ngAfterContentChecked() {
    this.canModify = (this.user.username === this.article.author.username);
  }
}

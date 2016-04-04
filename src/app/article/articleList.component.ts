/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, Input, OnDestroy} from 'angular2/core';
import {Router} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

import {ArticleService} from '../common/services/articles.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article-list',
  templateUrl: 'src/app/article/layout/articleList.html',
  providers:   [ArticleService]
})
export class ArticleList implements OnDestroy {
  @Input() limit: number;
  @Input() listConfig: any;
  public list: Array<any>;
  public loading: boolean;
  public articlesSubscription: Subscription;

  constructor(private _articleService: ArticleService) {
    this.articlesSubscription = this._articleService.articlesAnnounced$.subscribe(
      (articles: any) => {
        this.loading = false;
        this.list = articles;
        this.listConfig.totalPages = Math.ceil(articles.length / this.limit);
      }
    );
  }

  ngOnDestroy() {
    this.articlesSubscription.unsubscribe();
  }
}

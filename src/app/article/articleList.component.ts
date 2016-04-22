/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {Router} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

/*----------- SERVICES -----------*/

import {ArticleService} from '../common/services/articles.service';

/*----------- COMPONENTS -----------*/

import {ArticlePreview} from './articlePreview.component';
import {ListPagination} from './listPagination.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article-list',
  templateUrl: 'src/app/article/layout/articleList.html',
  directives:  [ArticlePreview, ListPagination],
  providers:   [ArticleService]
})
export class ArticleList {
  @Input() limit: number;
  @Input() listConfig: any;
  @Input() articles: Array<Object>;
  @Input() loading: boolean;

  @Output() updateListConfig: EventEmitter<any>;

  constructor(private _articleService: ArticleService) {
    this.articles = [];
    this.listConfig = {};

    this.updateListConfig = new EventEmitter();
  }

  changeList(newConfig: any) {
    this.updateListConfig.next(newConfig);
  }

  articlesExist() {
    return this.articles ? this.articles.length : false;
  }
}

/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, Input, OnDestroy} from 'angular2/core';
import {Router} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

/*----------- COMPONENTS -----------*/

import {ArticlePreview} from './articlePreview.component';
import {ListPagination} from './listPagination.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article-list',
  templateUrl: 'src/app/article/layout/articleList.html',
  directives:  [ArticlePreview, ListPagination]
})
export class ArticleList {
  @Input() limit: number;
  @Input() listConfig: Object;
  @Input() articles: Array<Object>;
  @Input() loading: boolean;

  constructor() {
    this.articles = [];
  }

  articlesExist() {
    return this.articles ? this.articles.length : false;
  }
}

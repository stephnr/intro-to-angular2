/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, Input, OnDestroy} from 'angular2/core';
import {Router} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

/*----------- COMPONENTS -----------*/

import {ArticlePreview} from './articlePreview.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article-list',
  templateUrl: 'src/app/article/layout/articleList.html',
  directives:  [ArticlePreview]
})
export class ArticleList {
  @Input() limit: number;
  @Input() listConfig: any;
  @Input() articles: any;
}

/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, Input} from 'angular2/core';

import {ArticleMeta} from './articleMeta.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article-preview',
  templateUrl: 'src/app/article/layout/articlePreview.html',
  directives:  [ArticleMeta]
})
export class ArticlePreview {
  @Input() article: Object;
}

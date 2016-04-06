/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {ArticleMeta} from './articleMeta.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article-preview',
  templateUrl: 'src/app/article/layout/articlePreview.html',
  directives:  [RouterLink, ArticleMeta]
})
export class ArticlePreview {
  @Input() article: Object;
}

/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {ArticleMeta} from './articleMeta.component';
import {FavoriteButton} from '../common/components/favoriteBtn.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article-preview',
  templateUrl: 'src/app/article/layout/articlePreview.html',
  directives:  [RouterLink, ArticleMeta, FavoriteButton]
})
export class ArticlePreview {
  @Input() article: Object;
}

/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, Input} from 'angular2/core';

import {RouterLink} from 'angular2/router';

import {FavoriteButton} from '../common/components/favoriteBtn.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'article-meta',
  templateUrl: 'src/app/article/layout/articleMeta.html',
  directives:  [RouterLink, FavoriteButton]
})
export class ArticleMeta {
  @Input() article: Object;

  buildDate(date: string) {
    return new Date(date);
  }
}

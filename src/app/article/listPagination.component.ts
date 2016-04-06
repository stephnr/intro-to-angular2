/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, Input} from 'angular2/core';

import {RouterLink} from 'angular2/router';

import {ArticleService} from '../common/services/articles.service';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'list-pagination',
  templateUrl: 'src/app/article/layout/listPagination.html',
  directives:  [RouterLink],
  providers:   [ArticleService]
})
export class ListPagination {
  @Input() listConfig: any;
  @Input() limit: number;

  public pageNumber: number;

  constructor(private _articleService: ArticleService) {}

  changePage(pageNumber: number) {
    let queryConfig = {
      type:    this.listConfig.type,
      filters: this.listConfig.filters || {}
    };
    let currentPage = this.listConfig.currentPage || 0;

    // Add the offset filter
    queryConfig.filters.offset = (this.limit * (currentPage - 1));

    // Run the query
    this._articleService.query(queryConfig);
  }

  pageRange(totalPages: number) {
    let pages = [];

    for(var i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }
}

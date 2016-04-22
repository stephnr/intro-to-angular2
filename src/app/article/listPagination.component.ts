/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {Component, EventEmitter, Input, Output} from 'angular2/core';

import {RouterLink} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

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
  @Input() limit: number;
  @Input() listConfig: any;

  @Output('updateListConfig') onListChange: EventEmitter<any>;

  public pageNumber: number;

  constructor(private _articleService: ArticleService) {
    this.onListChange = new EventEmitter();
  }

  changePage(pageNumber: number) {
    let queryConfig = this.listConfig;
    queryConfig.currentPage = pageNumber || 0;
    // Add the offset filter
    queryConfig.filters.offset = (this.limit * queryConfig.currentPage);
    // Run the query via updating the list config
    this.onListChange.next(queryConfig);
  }

  pageRange(totalPages: number) {
    let pages = [];

    for(var i = 0; i < totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }
}

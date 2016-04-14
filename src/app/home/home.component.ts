/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {COMMON_DIRECTIVES} from 'angular2/common';

import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

/*----------- SERVICES -----------*/

import {UserService} from '../common/services/user.service';
import {User} from '../auth/components/user';

import {TagsService} from '../common/services/tags.service';
import {ArticleService} from '../common/services/articles.service';

/*----------- COMPONENTS -----------*/

import {ArticleList} from '../article/articleList.component';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'home',
  templateUrl: 'src/app/home/layout/home.html',
  directives:  [COMMON_DIRECTIVES, ROUTER_DIRECTIVES, ArticleList],
  providers:   [UserService, TagsService, ArticleService]
})
export class HomeComponent implements OnInit {
  public appName: string;
  public listConfig: any;
  public limit: number;
  public loading: boolean;

  public userSubscription: Subscription;
  public tagsSubscription: Subscription;
  public articlesSubscription: Subscription;

  public user: User;
  public tags: Object;
  public articles: any;

  public tagsLoaded: boolean;

  constructor(private _router: Router, private _routeParams: RouteParams, private _userService: UserService, private _tagsService: TagsService, private _articleService: ArticleService) {
    this.userSubscription = this._userService.userAnnounced$.subscribe(
      (user: User) => {
        this.loading = false;
        this.user = user;
        this.listConfig.type = 'feed';
        this.runQuery();
      }
    );

    this.tagsSubscription = this._tagsService.tagsAnnounced$.subscribe(
      (tags: any) => {
        this.tags = tags.tags;
        this.tagsLoaded = true;
      }
    );

    this.articlesSubscription = this._articleService.articlesAnnounced$.subscribe(
      (articles: any) => {
        this.articles = articles;
        this.listConfig.totalPages = Math.ceil(articles.length / this.limit);
      }
    );
  }

  isAuthorized(condition: boolean) {
    return !(this._userService.isAuthorized() !== condition);
  }

  resetVars() {
    this.limit = 10;
    this.appName = 'conduit';
    this.user = new User();
    this.listConfig = {
      type: 'all'
    };
    this.tags = [];
    this.tagsLoaded = false;
  }

  changeList(list: any) {
    this.listConfig = list;
    this.runQuery();
  }

  tagFilterExists() {
    return this.listConfig.filters ? this.listConfig.hasOwnProperty('tag') : false;;
  }

  runQuery() {
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

  ngOnInit() {
    this.resetVars();
    this._userService.getUser();
    this._tagsService.getAll();
    this.runQuery();
  }
}

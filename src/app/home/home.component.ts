/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {COMMON_DIRECTIVES} from 'angular2/common';

import {Component, OnInit, OnDestroy} from 'angular2/core';
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
export class HomeComponent implements OnInit, OnDestroy {
  public appName: string;
  public listConfig: any;
  public limit: number;
  public loading: boolean;

  public userSubscription: Subscription;
  public tagsSubscription: Subscription;
  public articlesSubscription: Subscription;
  public listConfigSubscription: Subscription;

  public user: User;
  public tags: Object;
  public articles: any;

  public tagsLoaded: boolean;

  constructor(private _router: Router, private _routeParams: RouteParams, private _userService: UserService, private _tagsService: TagsService, private _articleService: ArticleService) {
    this.resetVars();

    this.userSubscription = this._userService.userAnnounced$.subscribe(
      (user: User) => {
        this.loading = false;
        this.user = user;
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
      (data: any) => {
        this.loading = false;
        this.articles = data.articles;
        // Calculate the total number of pages
        this.listConfig.totalPages = Math.ceil(data.articlesCount / this.limit);
      }
    );

    this.listConfigSubscription = this._articleService.listConfigAnnounced$.subscribe(
      (listConfig: any) => {
        this.listConfig = listConfig;
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
    this.listConfig = {};
    this.tags = [];
    this.tagsLoaded = false;
  }

  changeList(type: string) {
    this.loading = true;
    this.listConfig.type = type;
    this.listConfig.currentPage = 0;
    this.listConfig.filters.offset = 0;

    this._articleService.query(this.listConfig);
  }

  updateConfig(newConfig: any) {
    this._articleService.query(newConfig);
  }

  tagFilterExists() {
    return (this.listConfig.filters !== undefined) ? this.listConfig.filters.hasOwnProperty('tag') : false;
  }

  runQuery() {
    let queryConfig = {
      limit:       this.limit || 2,
      type:        this.listConfig.type || 'feed',
      filters:     this.listConfig.filters || {},
      currentPage: this.listConfig.currentPage || 0,
      totalPages:  this.listConfig.totalPages || 1
    };

    // Add the offset filter
    queryConfig.filters.offset = (this.limit * (queryConfig.currentPage));

    // Run the query via updating the list config
    this._articleService.query(queryConfig);
  }

  ngOnInit() {
    this._userService.getUser();
    this._tagsService.getAll();
    this.runQuery();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.articlesSubscription.unsubscribe();
    this.tagsSubscription.unsubscribe();
  }
}

/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/

import {NgIf} from 'angular2/common';
import {Component, OnInit, OnDestroy} from 'angular2/core';
import {Router, RouterLink, RouteParams} from 'angular2/router';

import {Subscription} from 'rxjs/Subscription';

import {ArticleService} from '../common/services/articles.service';
import {ArticleList} from '../article/articleList.component';

import {FollowBtn} from '../common/components/followBtn.component';

import {ProfileService} from '../common/services/profile.service';
import {UserService} from '../common/services/user.service';
import {User} from '../auth/components/user';

/*= End of REQUIRED MODULES =*/
/*=============================================<<<<<*/

@Component({
  selector:    'profile',
  templateUrl: 'src/app/profile/layout/profile.html',
  directives:  [RouterLink, FollowBtn, NgIf, ArticleList],
  providers:   [ArticleService, UserService, ProfileService]
})
export class ProfileComponent implements OnInit, OnDestroy {
  public user: User;
  public author: User;
  public isLoginUser: boolean;
  public loading: boolean;
  public listConfig: any;
  public articles: Array<any>;
  public loadedFavorites: boolean;

  private _articlesSubscription: Subscription;
  private _userSubscription: Subscription;

  constructor(private _router: Router, private _userService: UserService, private _profileService: ProfileService, private _routeParams: RouteParams, private _articleService: ArticleService) {
    this.user = new User();
    this.author = new User();

    this.isLoginUser = false;

    this.listConfig = {
      type: 'all'
    };

    this._articlesSubscription = this._articleService.articlesAnnounced$.subscribe(
      (data: any) => {
        this.articles = data.articles;
        this.listConfig.totalPages = Math.ceil(data.articlesCount / 5);
      }
    );

    this._userSubscription = this._userService.userAnnounced$.subscribe(
      (user: any) => {
        this.user = user;
        // Check if the user and author match
        if(this._routeParams.params['username'] === user.username) {
          this.isLoginUser = true;
        }
      }
    );
  }

  runQuery() {
    let queryConfig = {
      limit:       10,
      type:        this.listConfig.type || 'all',
      filters:     this.listConfig.filters || {},
      currentPage: this.listConfig.currentPage || 0,
      totalPages:  this.listConfig.totalPages || 1
    };

    // Filter posts by this user
    queryConfig.filters.author = this.author.username;

    // Add the offset filter
    queryConfig.filters.offset = (queryConfig.limit * (queryConfig.currentPage));

    // Run the query via updating the list config
    this._articleService.query(queryConfig);
  }

  loadArticles() {
    this.loadedFavorites = false;
    this.listConfig.filters = { author: this.author.username };
    this.runQuery();
  }

  loadFavorites() {
    this.loadedFavorites = true;
    this.listConfig.filters = { favorited: this._routeParams.params['username'] };
    this.runQuery();
  }

  ngOnInit() {
    this._profileService.get(this._routeParams.params['username']).then(
      (res: any) => {
        this.author = res.json().profile;
        this.loadArticles();
      }
    );

    this._userService.getUser();
  }

  ngOnDestroy() {
    this._articlesSubscription.unsubscribe();
    this._userSubscription.unsubscribe();
  }
}

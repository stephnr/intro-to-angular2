/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/common', 'angular2/core', 'angular2/router', '../common/services/articles.service', '../article/articleList.component', '../common/components/followBtn.component', '../common/services/profile.service', '../common/services/user.service', '../auth/components/user'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, router_1, articles_service_1, articleList_component_1, followBtn_component_1, profile_service_1, user_service_1, user_1;
    var ProfileComponent;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            },
            function (articleList_component_1_1) {
                articleList_component_1 = articleList_component_1_1;
            },
            function (followBtn_component_1_1) {
                followBtn_component_1 = followBtn_component_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            ProfileComponent = (function () {
                function ProfileComponent(_router, _userService, _profileService, _routeParams, _articleService) {
                    var _this = this;
                    this._router = _router;
                    this._userService = _userService;
                    this._profileService = _profileService;
                    this._routeParams = _routeParams;
                    this._articleService = _articleService;
                    this.resetVars();
                    this._articlesSubscription = this._articleService.articlesAnnounced$.subscribe(function (data) {
                        _this.articles = data.articles;
                        _this.listConfig.totalPages = Math.ceil(data.articlesCount / 5);
                    });
                    this._userSubscription = this._userService.userAnnounced$.subscribe(function (user) {
                        _this.user = user;
                        // Check if the user and author match
                        if (_this._routeParams.params['username'] === user.username) {
                            _this.isLoginUser = true;
                        }
                    });
                }
                ProfileComponent.prototype.runQuery = function () {
                    var queryConfig = {
                        limit: 10,
                        type: this.listConfig.type || 'all',
                        filters: this.listConfig.filters || {},
                        currentPage: this.listConfig.currentPage || 0,
                        totalPages: this.listConfig.totalPages || 1
                    };
                    // Filter posts by this user
                    queryConfig.filters.author = this.author.username;
                    // Add the offset filter
                    queryConfig.filters.offset = (queryConfig.limit * (queryConfig.currentPage));
                    // Run the query via updating the list config
                    this._articleService.query(queryConfig);
                };
                ProfileComponent.prototype.loadArticles = function () {
                    this.loadedFavorites = false;
                    this.listConfig.filters = { author: this.author.username };
                    this.runQuery();
                };
                ProfileComponent.prototype.loadFavorites = function () {
                    this.loadedFavorites = true;
                    this.listConfig.filters = { favorited: this._routeParams.params['username'] };
                    this.runQuery();
                };
                ProfileComponent.prototype.resetVars = function () {
                    this.user = new user_1.User();
                    this.author = new user_1.User();
                    this.isLoginUser = false;
                    this.listConfig = {};
                };
                ProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._profileService.get(this._routeParams.params['username']).then(function (res) {
                        console.log(res.json().profile);
                        _this.author = res.json().profile;
                        _this.loadArticles();
                    });
                    this._userService.getUser();
                };
                ProfileComponent.prototype.ngOnDestroy = function () {
                    this._articlesSubscription.unsubscribe();
                    this._userSubscription.unsubscribe();
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile',
                        templateUrl: 'src/app/profile/layout/profile.html',
                        directives: [router_1.RouterLink, followBtn_component_1.FollowBtn, common_1.NgIf, articleList_component_1.ArticleList],
                        providers: [articles_service_1.ArticleService, user_service_1.UserService, profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, profile_service_1.ProfileService, router_1.RouteParams, articles_service_1.ArticleService])
                ], ProfileComponent);
                return ProfileComponent;
            })();
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map
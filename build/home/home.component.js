/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/common', 'angular2/core', 'angular2/router', '../common/services/user.service', '../auth/components/user', '../common/services/tags.service', '../common/services/articles.service', '../article/articleList.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, router_1, user_service_1, user_1, tags_service_1, articles_service_1, articleList_component_1;
    var HomeComponent;
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
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (tags_service_1_1) {
                tags_service_1 = tags_service_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            },
            function (articleList_component_1_1) {
                articleList_component_1 = articleList_component_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            HomeComponent = (function () {
                function HomeComponent(_router, _routeParams, _userService, _tagsService, _articleService) {
                    var _this = this;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                    this._tagsService = _tagsService;
                    this._articleService = _articleService;
                    this.resetVars();
                    this.userSubscription = this._userService.userAnnounced$.subscribe(function (user) {
                        _this.loading = false;
                        _this.user = user;
                        // Load the feed and not global
                        _this.listConfig.type = 'feed';
                        _this.runQuery();
                    });
                    this.tagsSubscription = this._tagsService.tagsAnnounced$.subscribe(function (tags) {
                        _this.tags = tags.tags;
                        _this.tagsLoaded = true;
                    });
                    this.articlesSubscription = this._articleService.articlesAnnounced$.subscribe(function (data) {
                        _this.loading = false;
                        _this.articles = data.articles;
                        // Calculate the total number of pages
                        _this.listConfig.totalPages = Math.ceil(data.articlesCount / _this.limit);
                    });
                    this.listConfigSubscription = this._articleService.listConfigAnnounced$.subscribe(function (listConfig) {
                        _this.listConfig = listConfig;
                    });
                }
                HomeComponent.prototype.isAuthorized = function (condition) {
                    return !(this._userService.isAuthorized() !== condition);
                };
                HomeComponent.prototype.resetVars = function () {
                    this.limit = 10;
                    this.appName = 'conduit';
                    this.user = new user_1.User();
                    this.listConfig = {};
                    this.tags = [];
                    this.tagsLoaded = false;
                };
                HomeComponent.prototype.changeList = function (type, tag) {
                    this.loading = true;
                    this.listConfig.type = type;
                    this.listConfig.currentPage = 0;
                    this.listConfig.filters.offset = 0;
                    // Provide the tag if one was given
                    if (tag)
                        this.listConfig.filters.tag = tag;
                    this._articleService.query(this.listConfig);
                };
                HomeComponent.prototype.updateConfig = function (newConfig) {
                    this._articleService.query(newConfig);
                };
                HomeComponent.prototype.tagFilterExists = function () {
                    return (this.listConfig.filters !== undefined) ? this.listConfig.filters.hasOwnProperty('tag') : false;
                };
                HomeComponent.prototype.runQuery = function () {
                    var queryConfig = {
                        limit: this.limit || 10,
                        type: this.listConfig.type || 'all',
                        filters: this.listConfig.filters || {},
                        currentPage: this.listConfig.currentPage || 0,
                        totalPages: this.listConfig.totalPages || 1
                    };
                    // Add the offset filter
                    queryConfig.filters.offset = (this.limit * (queryConfig.currentPage));
                    // Run the query via updating the list config
                    this._articleService.query(queryConfig);
                };
                HomeComponent.prototype.ngOnInit = function () {
                    this._userService.getUser();
                    this._tagsService.getAll();
                    this.runQuery();
                };
                HomeComponent.prototype.ngOnDestroy = function () {
                    this.userSubscription.unsubscribe();
                    this.articlesSubscription.unsubscribe();
                    this.tagsSubscription.unsubscribe();
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'src/app/home/layout/home.html',
                        directives: [common_1.COMMON_DIRECTIVES, router_1.ROUTER_DIRECTIVES, articleList_component_1.ArticleList],
                        providers: [user_service_1.UserService, tags_service_1.TagsService, articles_service_1.ArticleService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, user_service_1.UserService, tags_service_1.TagsService, articles_service_1.ArticleService])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map
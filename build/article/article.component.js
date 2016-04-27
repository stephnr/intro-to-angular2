/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/common', 'angular2/core', 'angular2/router', '../common/services/articles.service', '../common/services/user.service', '../common/services/comments.service', '../common/services/profile.service', '../auth/components/user', './article', '../common/components/listErrors.component', './articleActions.component', '../common/components/favoriteBtn.component', './comment.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, router_1, articles_service_1, user_service_1, comments_service_1, profile_service_1, user_1, article_1, listErrors_component_1, articleActions_component_1, favoriteBtn_component_1, comment_component_1;
    var ArticleComponent;
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
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (comments_service_1_1) {
                comments_service_1 = comments_service_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            },
            function (listErrors_component_1_1) {
                listErrors_component_1 = listErrors_component_1_1;
            },
            function (articleActions_component_1_1) {
                articleActions_component_1 = articleActions_component_1_1;
            },
            function (favoriteBtn_component_1_1) {
                favoriteBtn_component_1 = favoriteBtn_component_1_1;
            },
            function (comment_component_1_1) {
                comment_component_1 = comment_component_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            ArticleComponent = (function () {
                function ArticleComponent(_router, _routeParams, _articleService, _userService, _commentService) {
                    var _this = this;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._articleService = _articleService;
                    this._userService = _userService;
                    this._commentService = _commentService;
                    this.isSubmitting = false;
                    this._resetVars();
                    this._articleService.get(this._routeParams.params['slug']).then(function (res) {
                        _this.article = res.json().article;
                        // Convert body to markdown
                        _this.article.body = marked(_this.article.body);
                        // Load comments
                        _this._commentService.getAll(_this.article.slug).then(function (res) { return _this.comments = res.json().comments; });
                    });
                    this._userSubscription = this._userService.userAnnounced$.subscribe(function (user) {
                        _this.user = user;
                    });
                }
                ArticleComponent.prototype.isAuthorized = function (condition) {
                    return !(this._userService.isAuthorized() !== condition);
                };
                ArticleComponent.prototype.imageExists = function () {
                    return this.user.image ? this.user.image.length > 0 : false;
                };
                ArticleComponent.prototype.addComment = function () {
                    var _this = this;
                    this.isSubmitting = true;
                    this._commentService.add(this.article.slug, this.commentForm.value.body).then(function (comment) {
                        _this.isSubmitting = false;
                        _this.comments.unshift(comment.json().comment);
                    }).catch(function (err) {
                        _this.isSubmitting = false;
                        _this.errors = err.json().errors;
                    });
                };
                ArticleComponent.prototype.deleteComment = function ($event) {
                    var _this = this;
                    this._commentService.destroy($event.commentId, this._routeParams.params['slug']).then(function (success) {
                        _this.comments.splice($event.index, 1);
                    });
                };
                ArticleComponent.prototype._resetVars = function () {
                    this.errors = {};
                    this.article = new article_1.Article();
                    this.commentForm = new common_1.ControlGroup({
                        body: new common_1.Control('')
                    });
                    this.user = new user_1.User();
                };
                ArticleComponent.prototype.ngOnInit = function () {
                    this._userService.getUser();
                };
                ArticleComponent.prototype.ngOnDestroy = function () {
                    this._userSubscription.unsubscribe();
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'article',
                        templateUrl: 'src/app/article/layout/article.html',
                        directives: [router_1.RouterLink, articleActions_component_1.ArticleActions, comment_component_1.Comment, favoriteBtn_component_1.FavoriteButton, listErrors_component_1.ListErrorsComponent],
                        providers: [articles_service_1.ArticleService, user_service_1.UserService, comments_service_1.CommentService, profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, articles_service_1.ArticleService, user_service_1.UserService, comments_service_1.CommentService])
                ], ArticleComponent);
                return ArticleComponent;
            })();
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
//# sourceMappingURL=article.component.js.map
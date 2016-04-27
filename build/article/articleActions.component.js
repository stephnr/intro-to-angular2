/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/common', 'angular2/core', 'angular2/router', '../common/services/articles.service', '../auth/components/user', './article', './articleMeta.component', '../common/components/favoriteBtn.component', '../common/components/followBtn.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, router_1, articles_service_1, user_1, article_1, articleMeta_component_1, favoriteBtn_component_1, followBtn_component_1;
    var ArticleActions;
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
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            },
            function (articleMeta_component_1_1) {
                articleMeta_component_1 = articleMeta_component_1_1;
            },
            function (favoriteBtn_component_1_1) {
                favoriteBtn_component_1 = favoriteBtn_component_1_1;
            },
            function (followBtn_component_1_1) {
                followBtn_component_1 = followBtn_component_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            ArticleActions = (function () {
                function ArticleActions(_router, _articleService) {
                    this._router = _router;
                    this._articleService = _articleService;
                }
                ArticleActions.prototype.deleteArticle = function () {
                    var _this = this;
                    this.isDeleting = true;
                    this._articleService.destroy(this.article.slug).then(function (success) { return _this._router.navigate(['Home']); }).catch(function (err) { return _this._router.navigate(['Home']); });
                };
                ArticleActions.prototype.ngOnInit = function () {
                    if (this.article === undefined)
                        this.article = new article_1.Article();
                };
                ArticleActions.prototype.ngAfterContentChecked = function () {
                    this.canModify = (this.user.username === this.article.author.username);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', user_1.User)
                ], ArticleActions.prototype, "user", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', article_1.Article)
                ], ArticleActions.prototype, "article", void 0);
                ArticleActions = __decorate([
                    core_1.Component({
                        selector: 'article-actions',
                        templateUrl: 'src/app/article/layout/articleActions.html',
                        providers: [articles_service_1.ArticleService],
                        directives: [common_1.NgIf, router_1.RouterLink, articleMeta_component_1.ArticleMeta, favoriteBtn_component_1.FavoriteButton, followBtn_component_1.FollowBtn]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, articles_service_1.ArticleService])
                ], ArticleActions);
                return ArticleActions;
            })();
            exports_1("ArticleActions", ArticleActions);
        }
    }
});
//# sourceMappingURL=articleActions.component.js.map
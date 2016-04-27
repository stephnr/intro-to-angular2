/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/core', '../common/services/articles.service', './articlePreview.component', './listPagination.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, articles_service_1, articlePreview_component_1, listPagination_component_1;
    var ArticleList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            },
            function (articlePreview_component_1_1) {
                articlePreview_component_1 = articlePreview_component_1_1;
            },
            function (listPagination_component_1_1) {
                listPagination_component_1 = listPagination_component_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            ArticleList = (function () {
                function ArticleList(_articleService) {
                    this._articleService = _articleService;
                    this.articles = [];
                    this.listConfig = {};
                    this.updateListConfig = new core_1.EventEmitter();
                }
                ArticleList.prototype.changeList = function (newConfig) {
                    this.updateListConfig.next(newConfig);
                };
                ArticleList.prototype.articlesExist = function () {
                    return this.articles ? this.articles.length : false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ArticleList.prototype, "limit", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ArticleList.prototype, "listConfig", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ArticleList.prototype, "articles", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ArticleList.prototype, "loading", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ArticleList.prototype, "updateListConfig", void 0);
                ArticleList = __decorate([
                    core_1.Component({
                        selector: 'article-list',
                        templateUrl: 'src/app/article/layout/articleList.html',
                        directives: [articlePreview_component_1.ArticlePreview, listPagination_component_1.ListPagination],
                        providers: [articles_service_1.ArticleService]
                    }), 
                    __metadata('design:paramtypes', [articles_service_1.ArticleService])
                ], ArticleList);
                return ArticleList;
            })();
            exports_1("ArticleList", ArticleList);
        }
    }
});
//# sourceMappingURL=articleList.component.js.map
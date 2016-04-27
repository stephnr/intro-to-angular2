/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/core', 'angular2/common', 'angular2/router', '../common/services/articles.service', '../article/article'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, articles_service_1, article_1;
    var EditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            EditorComponent = (function () {
                function EditorComponent(_router, _routeParams, _articleService) {
                    var _this = this;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._articleService = _articleService;
                    this.isSubmitting = false;
                    this.article = new article_1.Article();
                    this.tagList = new Array();
                    if (this._routeParams.params['slug'] !== undefined) {
                        this.editMode = true;
                        // Load the existing article
                        this._articleService.get(this._routeParams.params['slug']).then(function (res) {
                            _this.tagList = res.json().article.tagList;
                            var a = res.json().article;
                            _this.article = {
                                title: a.title,
                                description: a.description,
                                body: a.body,
                                tagField: [],
                            };
                        });
                    }
                }
                EditorComponent.prototype.addTag = function (keyCode) {
                    // array includes method
                    if (keyCode === 13) {
                        if (!!this.tagList.indexOf(this.article.tagField) && !this.isSubmitting) {
                            this.tagList.push(this.article.tagField);
                            this.article.tagList = this.tagList;
                            delete this.article.tagField;
                        }
                    }
                };
                EditorComponent.prototype.removeTag = function (tag) {
                    if (!this.isSubmitting) {
                        this.tagList = this.tagList.filter(function (slug) { return slug != tag; });
                    }
                };
                EditorComponent.prototype.submit = function () {
                    var _this = this;
                    this.isSubmitting = true;
                    if (this.editMode) {
                        // Update the Article
                        this.article.slug = this._routeParams.params['slug'];
                    }
                    // Save the post
                    this._articleService.save(this.article).then(function (res) {
                        _this._router.navigate(['View-Article', { slug: res.json().article.slug }]);
                    }, function (err) {
                        _this.isSubmitting = false;
                        _this.errors = err.json().errors;
                    });
                };
                EditorComponent = __decorate([
                    core_1.Component({
                        selector: 'editor',
                        templateUrl: 'src/app/editor/layout/editor.html',
                        providers: [articles_service_1.ArticleService],
                        directives: [common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, articles_service_1.ArticleService])
                ], EditorComponent);
                return EditorComponent;
            })();
            exports_1("EditorComponent", EditorComponent);
        }
    }
});
//# sourceMappingURL=editor.component.js.map
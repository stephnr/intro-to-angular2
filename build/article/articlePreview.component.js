/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/core', 'angular2/router', './articleMeta.component', '../common/components/favoriteBtn.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, articleMeta_component_1, favoriteBtn_component_1;
    var ArticlePreview;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (articleMeta_component_1_1) {
                articleMeta_component_1 = articleMeta_component_1_1;
            },
            function (favoriteBtn_component_1_1) {
                favoriteBtn_component_1 = favoriteBtn_component_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            ArticlePreview = (function () {
                function ArticlePreview() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ArticlePreview.prototype, "article", void 0);
                ArticlePreview = __decorate([
                    core_1.Component({
                        selector: 'article-preview',
                        templateUrl: 'src/app/article/layout/articlePreview.html',
                        directives: [router_1.RouterLink, articleMeta_component_1.ArticleMeta, favoriteBtn_component_1.FavoriteButton]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticlePreview);
                return ArticlePreview;
            })();
            exports_1("ArticlePreview", ArticlePreview);
        }
    }
});
//# sourceMappingURL=articlePreview.component.js.map
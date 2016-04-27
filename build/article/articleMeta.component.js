/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/core', 'angular2/router', '../common/components/favoriteBtn.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, favoriteBtn_component_1;
    var ArticleMeta;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (favoriteBtn_component_1_1) {
                favoriteBtn_component_1 = favoriteBtn_component_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            ArticleMeta = (function () {
                function ArticleMeta() {
                }
                ArticleMeta.prototype.buildDate = function (date) {
                    return date.length > 0 ? new Date(date) : new Date();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ArticleMeta.prototype, "article", void 0);
                ArticleMeta = __decorate([
                    core_1.Component({
                        selector: 'article-meta',
                        templateUrl: 'src/app/article/layout/articleMeta.html',
                        directives: [router_1.RouterLink, favoriteBtn_component_1.FavoriteButton]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleMeta);
                return ArticleMeta;
            })();
            exports_1("ArticleMeta", ArticleMeta);
        }
    }
});
//# sourceMappingURL=articleMeta.component.js.map
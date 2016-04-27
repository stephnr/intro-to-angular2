/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/core', 'angular2/router', '../services/user.service', '../services/articles.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_service_1, articles_service_1;
    var FavoriteButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            FavoriteButton = (function () {
                function FavoriteButton(_router, _userService, _articleService) {
                    this._router = _router;
                    this._userService = _userService;
                    this._articleService = _articleService;
                }
                FavoriteButton.prototype.submit = function () {
                    var _this = this;
                    this.isSubmitting = true;
                    if (!this._userService.isAuthorized()) {
                        this._router.navigate(['Register']);
                        return;
                    }
                    // If fav'd already, unfavorite it
                    if (this.article.favorited) {
                        this._articleService.unfavorite(this.article.slug).then(function (res) {
                            _this.isSubmitting = false;
                            _this.article.favorited = false;
                            _this.article.favoritesCount--;
                            _this._articleService.announceArticles(res.json().article);
                        });
                    }
                    else {
                        this._articleService.favorite(this.article.slug).then(function (res) {
                            _this.isSubmitting = false;
                            _this.article.favorited = true;
                            _this.article.favoritesCount++;
                            _this._articleService.announceArticles(res.json().article);
                        });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FavoriteButton.prototype, "article", void 0);
                FavoriteButton = __decorate([
                    core_1.Component({
                        selector: 'favorite-btn',
                        templateUrl: 'src/app/common/components/layout/favoriteBtn.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, articles_service_1.ArticleService])
                ], FavoriteButton);
                return FavoriteButton;
            })();
            exports_1("FavoriteButton", FavoriteButton);
        }
    }
});
//# sourceMappingURL=favoriteBtn.component.js.map
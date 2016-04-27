/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/core', 'angular2/router', '../../auth/components/user', '../services/profile.service', '../services/articles.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_1, profile_service_1, articles_service_1;
    var FollowBtn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            FollowBtn = (function () {
                function FollowBtn(_router, _articleService, _profileService) {
                    this._router = _router;
                    this._articleService = _articleService;
                    this._profileService = _profileService;
                    this.isSubmitting = false;
                    this.author = new user_1.User();
                    this.user = new user_1.User();
                }
                FollowBtn.prototype.submit = function () {
                    var _this = this;
                    this.isSubmitting = true;
                    if (!this.user) {
                        this._router.navigate(['Register']);
                        return;
                    }
                    // If following already, unfollow
                    if (this.author.following) {
                        this._profileService.unfollow(this.author.username).then(function (res) {
                            _this.isSubmitting = false;
                            _this.author.following = false;
                            _this._articleService.announceArticles(res.json().article);
                        });
                    }
                    else {
                        this._profileService.follow(this.author.username).then(function (res) {
                            _this.isSubmitting = false;
                            _this.author.following = true;
                            _this._articleService.announceArticles(res.json().article);
                        });
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', user_1.User)
                ], FollowBtn.prototype, "user", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', user_1.User)
                ], FollowBtn.prototype, "author", void 0);
                FollowBtn = __decorate([
                    core_1.Component({
                        selector: 'follow-btn',
                        templateUrl: 'src/app/common/components/layout/followBtn.html',
                        providers: [profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, articles_service_1.ArticleService, profile_service_1.ProfileService])
                ], FollowBtn);
                return FollowBtn;
            })();
            exports_1("FollowBtn", FollowBtn);
        }
    }
});
//# sourceMappingURL=followBtn.component.js.map
/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/core', 'angular2/common', 'angular2/router', '../common/services/user.service', '../auth/components/user', '../common/components/listErrors.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, user_service_1, user_1, listErrors_component_1;
    var SettingsComponent;
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
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (listErrors_component_1_1) {
                listErrors_component_1 = listErrors_component_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            SettingsComponent = (function () {
                function SettingsComponent(_router, _userService) {
                    var _this = this;
                    this._router = _router;
                    this._userService = _userService;
                    this.isSubmitting = false;
                    this.user = new user_1.User();
                    this.errors = {};
                    this.userSubscription = this._userService.userAnnounced$.subscribe(function (user) {
                        _this.user = user;
                    });
                }
                SettingsComponent.prototype.submitForm = function () {
                    var _this = this;
                    this.isSubmitting = true;
                    this._userService.update({
                        image: this.user.image,
                        username: this.user.username,
                        bio: this.user.bio,
                        email: this.user.email,
                        password: this.user.password
                    }).then(function (user) {
                        _this.isSubmitting = false;
                        _this._router.navigate(['Profile', { username: _this.user.username }]);
                    }, function (err) {
                        _this.isSubmitting = false;
                        _this.errors = err.json().errors;
                    });
                };
                SettingsComponent.prototype.logout = function () {
                    this._userService.logout();
                };
                SettingsComponent.prototype.ngOnInit = function () {
                    this._userService.getUser();
                };
                SettingsComponent.prototype.ngOnDestroy = function () {
                    this.userSubscription.unsubscribe();
                };
                SettingsComponent = __decorate([
                    core_1.Component({
                        selector: 'settings',
                        templateUrl: 'src/app/settings/layout/settings.html',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgModel, listErrors_component_1.ListErrorsComponent],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], SettingsComponent);
                return SettingsComponent;
            })();
            exports_1("SettingsComponent", SettingsComponent);
        }
    }
});
//# sourceMappingURL=settings.component.js.map
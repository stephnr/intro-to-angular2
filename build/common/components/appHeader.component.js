/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/common', 'angular2/core', 'angular2/router', '../services/user.service', '../../auth/components/user'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, router_1, user_service_1, user_1;
    var AppHeader;
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
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            AppHeader = (function () {
                function AppHeader(_router, _location, _userService) {
                    var _this = this;
                    this._router = _router;
                    this._location = _location;
                    this._userService = _userService;
                    this.appName = 'conduit';
                    this.user = new user_1.User();
                    this.userExists = false;
                    this.userSubscription = this._userService.userAnnounced$.subscribe(function (user) {
                        _this.user = user;
                    });
                }
                /*=============================================>>>>>
                = HELPERS =
                ===============================================>>>>>*/
                AppHeader.prototype.isActive = function (component) {
                    return this._router.hostComponent.name === component;
                };
                AppHeader.prototype.isAuthorized = function (condition) {
                    return !(this._userService.isAuthorized() !== condition);
                };
                AppHeader.prototype.imageExists = function () {
                    return this.user.image ? this.user.image.length > 0 : false;
                };
                /*= End of HELPERS =*/
                /*=============================================<<<<<*/
                AppHeader.prototype.ngAfterContentChecked = function () {
                    if (this.user.id === 0 && !this.userExists && this._userService.isAuthorized()) {
                        // Lock the loop and fetch the user once
                        this.userExists = true;
                        this._userService.getUser();
                    }
                };
                AppHeader.prototype.ngOnDestroy = function () {
                    this.userSubscription.unsubscribe();
                };
                AppHeader = __decorate([
                    core_1.Component({
                        selector: 'app-header',
                        templateUrl: 'src/app/common/components/layout/appHeader.html',
                        directives: [common_1.NgIf, router_1.ROUTER_DIRECTIVES],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.Location, user_service_1.UserService])
                ], AppHeader);
                return AppHeader;
            })();
            exports_1("AppHeader", AppHeader);
        }
    }
});
//# sourceMappingURL=appHeader.component.js.map
/// <reference path="./definitions/user.d.ts"/>
System.register(['angular2/common', 'angular2/core', 'angular2/router', '../../common/components/listErrors.component', '../../common/services/user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, router_1, listErrors_component_1, user_service_1;
    var AuthFormComponent;
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
            function (listErrors_component_1_1) {
                listErrors_component_1 = listErrors_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            AuthFormComponent = (function () {
                function AuthFormComponent(_userService, _router) {
                    var _this = this;
                    this._userService = _userService;
                    this._router = _router;
                    this.isSubmitting = false;
                    this.formData = new common_1.ControlGroup({
                        username: new common_1.Control(''),
                        email: new common_1.Control(''),
                        password: new common_1.Control('')
                    });
                    this.errors = {};
                    this.authType = 'login';
                    this.subscription = this._userService.errorsAnnounced$.subscribe(function (errors) {
                        _this.errors = errors;
                    });
                }
                AuthFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.isSubmitting = true;
                    this._userService.attemptAuth(this.authType, JSON.stringify({
                        user: this.formData['value']
                    })).then(function () {
                        _this.isSubmitting = false;
                    }).catch(function () {
                        _this.isSubmitting = false;
                    });
                };
                AuthFormComponent.prototype.ngOnInit = function () {
                    this._userService.ensureAuthIs(false);
                };
                AuthFormComponent.prototype.ngOnDestroy = function () {
                    // prevent memory leak when component destroyed
                    this.subscription.unsubscribe();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AuthFormComponent.prototype, "authType", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AuthFormComponent.prototype, "submitTitle", void 0);
                AuthFormComponent = __decorate([
                    core_1.Component({
                        selector: 'auth-form',
                        templateUrl: 'src/app/auth/layout/authForm.html',
                        directives: [common_1.FORM_DIRECTIVES, listErrors_component_1.ListErrorsComponent],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
                ], AuthFormComponent);
                return AuthFormComponent;
            })();
            exports_1("AuthFormComponent", AuthFormComponent);
        }
    }
});
//# sourceMappingURL=authForm.component.js.map
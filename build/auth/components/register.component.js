/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/common', 'angular2/core', 'angular2/router', './authForm.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var common_1, core_1, router_1, authForm_component_1;
    var RegisterComponent;
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
            function (authForm_component_1_1) {
                authForm_component_1 = authForm_component_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            RegisterComponent = (function () {
                function RegisterComponent(_router) {
                    this._router = _router;
                    this.title = 'Sign Up';
                    this.authType = 'register';
                    this.submitTitle = 'Sign Up';
                }
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'register',
                        templateUrl: 'src/app/auth/layout/auth.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.NgIf, authForm_component_1.AuthFormComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], RegisterComponent);
                return RegisterComponent;
            })();
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map
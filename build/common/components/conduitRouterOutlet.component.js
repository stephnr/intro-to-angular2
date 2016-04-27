System.register(['angular2/core', 'angular2/router', '../constants/app.constants'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, app_constants_1;
    var ConduitRouterOutlet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            ConduitRouterOutlet = (function (_super) {
                __extends(ConduitRouterOutlet, _super);
                function ConduitRouterOutlet(_elementRef, _loader, _parentRouter, nameAttr) {
                    _super.call(this, _elementRef, _loader, _parentRouter, nameAttr);
                    this.parentRouter = _parentRouter;
                    this.publicRoutes = {
                        'home': true,
                        'login': true,
                        'register': true,
                        '@': true
                    };
                }
                ConduitRouterOutlet.prototype.activate = function (nextInstruction) {
                    var url = nextInstruction.urlPath.split('/').shift();
                    if (!this.publicRoutes[url] && !window.localStorage.getItem(app_constants_1.APP_CONSTANTS.jwtKey)) {
                        this.parentRouter.navigate(['Login']);
                    }
                    return _super.prototype.activate.call(this, nextInstruction);
                };
                ConduitRouterOutlet = __decorate([
                    core_1.Directive({
                        selector: 'conduit-router-outlet'
                    }),
                    __param(3, core_1.Attribute('name')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String])
                ], ConduitRouterOutlet);
                return ConduitRouterOutlet;
            })(router_1.RouterOutlet);
            exports_1("ConduitRouterOutlet", ConduitRouterOutlet);
        }
    }
});
//# sourceMappingURL=conduitRouterOutlet.component.js.map
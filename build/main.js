/// <reference path="../../typings/main.d.ts"/>
System.register(['rxjs/Rx', 'angular2/platform/browser', 'angular2/router', './app.component', 'angular2/core', 'angular2/http', './common/services/siteTitle.service', './common/services/jwt.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, app_component_1, browser_2, core_1, router_2, http_1, siteTitle_service_1, jwt_service_1;
    return {
        setters:[
            function (_1) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
                browser_2 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (siteTitle_service_1_1) {
                siteTitle_service_1 = siteTitle_service_1_1;
            },
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                browser_2.Title,
                siteTitle_service_1.SiteTitleService,
                jwt_service_1.JWTService,
                core_1.provide(router_2.APP_BASE_HREF, { useValue: '/' }),
                // Turn off Hash Strategy in PROD for extra 'fanciness' :)
                core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy }),
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map
/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './common/services/siteTitle.service', './common/components/conduitRouterOutlet.component', './common/components/appHeader.component', './common/components/appFooter.component', './article/article.component', './home/home.component', './auth/components/login.component', './auth/components/register.component', './editor/editor.component', './settings/settings.component', './profile/profile.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, siteTitle_service_1, conduitRouterOutlet_component_1, appHeader_component_1, appFooter_component_1, article_component_1, home_component_1, login_component_1, register_component_1, editor_component_1, settings_component_1, profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (siteTitle_service_1_1) {
                siteTitle_service_1 = siteTitle_service_1_1;
            },
            function (conduitRouterOutlet_component_1_1) {
                conduitRouterOutlet_component_1 = conduitRouterOutlet_component_1_1;
            },
            function (appHeader_component_1_1) {
                appHeader_component_1 = appHeader_component_1_1;
            },
            function (appFooter_component_1_1) {
                appFooter_component_1 = appFooter_component_1_1;
            },
            function (article_component_1_1) {
                article_component_1 = article_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (editor_component_1_1) {
                editor_component_1 = editor_component_1_1;
            },
            function (settings_component_1_1) {
                settings_component_1 = settings_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            /*= End of ROUTE COMPONENTS =*/
            /*=============================================<<<<<*/
            AppComponent = (function () {
                function AppComponent(_router, title, SiteTitleService) {
                    this._router = _router;
                    this.SiteTitleService = SiteTitleService;
                    _router.subscribe(function (url) {
                        title.setTitle(SiteTitleService.getSiteTitle(url) + " \u2014 Conduit");
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'conduit-app',
                        templateUrl: 'src/app/common/components/layout/appView.html',
                        directives: [router_1.ROUTER_DIRECTIVES, conduitRouterOutlet_component_1.ConduitRouterOutlet, appHeader_component_1.AppHeader, appFooter_component_1.AppFooter]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
                        { path: '/settings', name: 'Settings', component: settings_component_1.SettingsComponent },
                        { path: '/editor', name: 'Editor', component: editor_component_1.EditorComponent },
                        { path: '/editor/:slug', name: 'Edit-Article', component: editor_component_1.EditorComponent },
                        { path: '/article/:slug', name: 'View-Article', component: article_component_1.ArticleComponent },
                        { path: '/@/:username', name: 'Profile', component: profile_component_1.ProfileComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, browser_1.Title, siteTitle_service_1.SiteTitleService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
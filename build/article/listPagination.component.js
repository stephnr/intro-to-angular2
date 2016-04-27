/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/core', 'angular2/router', '../common/services/articles.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, articles_service_1;
    var ListPagination;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            ListPagination = (function () {
                function ListPagination(_articleService) {
                    this._articleService = _articleService;
                    this.onListChange = new core_1.EventEmitter();
                }
                ListPagination.prototype.changePage = function (pageNumber) {
                    var queryConfig = this.listConfig;
                    queryConfig.currentPage = pageNumber || 0;
                    // Add the offset filter
                    queryConfig.filters.offset = (this.limit * queryConfig.currentPage);
                    // Run the query via updating the list config
                    this.onListChange.next(queryConfig);
                };
                ListPagination.prototype.pageRange = function (totalPages) {
                    var pages = [];
                    for (var i = 0; i < totalPages; i++) {
                        pages.push(i);
                    }
                    return pages;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ListPagination.prototype, "limit", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListPagination.prototype, "listConfig", void 0);
                __decorate([
                    core_1.Output('updateListConfig'), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ListPagination.prototype, "onListChange", void 0);
                ListPagination = __decorate([
                    core_1.Component({
                        selector: 'list-pagination',
                        templateUrl: 'src/app/article/layout/listPagination.html',
                        directives: [router_1.RouterLink],
                        providers: [articles_service_1.ArticleService]
                    }), 
                    __metadata('design:paramtypes', [articles_service_1.ArticleService])
                ], ListPagination);
                return ListPagination;
            })();
            exports_1("ListPagination", ListPagination);
        }
    }
});
//# sourceMappingURL=listPagination.component.js.map
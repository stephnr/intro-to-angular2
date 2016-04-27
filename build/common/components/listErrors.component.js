System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var ListErrorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ListErrorsComponent = (function () {
                function ListErrorsComponent() {
                    this.errorKeys = [];
                }
                ListErrorsComponent.prototype.getErrors = function (key) {
                    if (this.errors.errors.hasOwnProperty(key)) {
                        return this.errors.errors[key];
                    }
                    else {
                        return [];
                    }
                };
                ListErrorsComponent.prototype.buildErrors = function () {
                    if (Object.keys(this.errors).length > 0) {
                        this.errorKeys = Object.keys(this.errors.errors);
                    }
                    else {
                        this.errors = { errors: {} };
                    }
                };
                ListErrorsComponent.prototype.hasErrors = function () {
                    this.buildErrors();
                    return Object.keys(this.errors).length > 0;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ListErrorsComponent.prototype, "errors", void 0);
                ListErrorsComponent = __decorate([
                    core_1.Component({
                        selector: 'list-errors',
                        templateUrl: 'src/app/common/components/layout/listErrors.html',
                        directives: [common_1.NgIf, common_1.NgFor]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListErrorsComponent);
                return ListErrorsComponent;
            })();
            exports_1("ListErrorsComponent", ListErrorsComponent);
        }
    }
});
//# sourceMappingURL=listErrors.component.js.map
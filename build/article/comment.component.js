/*=============================================>>>>>
= REQUIRED MODULES =
===============================================>>>>>*/
System.register(['angular2/src/facade/lang', 'angular2/common', 'angular2/core', 'angular2/router', '../auth/components/user', '../common/services/comments.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var lang_1, common_1, core_1, router_1, user_1, comments_service_1;
    var Comment;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (comments_service_1_1) {
                comments_service_1 = comments_service_1_1;
            }],
        execute: function() {
            /*= End of REQUIRED MODULES =*/
            /*=============================================<<<<<*/
            Comment = (function () {
                function Comment(_router, _commentService) {
                    this._router = _router;
                    this._commentService = _commentService;
                    this.del = new core_1.EventEmitter();
                }
                Comment.prototype.imageExists = function () {
                    if (!lang_1.isBlank(this.comment.author)) {
                        return this.comment.author.image ? this.comment.author.image.length > 0 : false;
                    }
                    else {
                        return false;
                    }
                };
                Comment.prototype.buildDate = function (date) {
                    return date.length > 0 ? new Date(date) : new Date();
                };
                Comment.prototype.canModify = function () {
                    return (this.user.username === this.comment.author.username);
                };
                Comment.prototype.deleteComment = function (commentId, index) {
                    return this.del.emit({
                        commentId: commentId,
                        index: index
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', user_1.User)
                ], Comment.prototype, "user", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Comment.prototype, "comment", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Comment.prototype, "index", void 0);
                __decorate([
                    core_1.Output('delete'), 
                    __metadata('design:type', Object)
                ], Comment.prototype, "del", void 0);
                Comment = __decorate([
                    core_1.Component({
                        selector: 'comment',
                        templateUrl: 'src/app/article/layout/comment.html',
                        providers: [comments_service_1.CommentService],
                        directives: [common_1.NgIf, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, comments_service_1.CommentService])
                ], Comment);
                return Comment;
            })();
            exports_1("Comment", Comment);
        }
    }
});
//# sourceMappingURL=comment.component.js.map
/// <reference path="./definitions/article.d.ts"/>
System.register([], function(exports_1) {
    var Article;
    return {
        setters:[],
        execute: function() {
            Article = (function () {
                function Article() {
                    this.title = '';
                    this.slug = '';
                    this.body = '';
                    this.createdAt = '';
                    this.updatedAt = '';
                    this.tagList = new Array();
                    this.description = '';
                    this.author = {};
                    this.favorited = true;
                    this.favoritesCount = 0;
                }
                return Article;
            })();
            exports_1("Article", Article);
        }
    }
});
//# sourceMappingURL=article.js.map
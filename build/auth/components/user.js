/// <reference path="./definitions/user.d.ts"/>
System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User() {
                    this.bio = '';
                    this.createdAt = '';
                    this.email = '';
                    this.id = 0;
                    this.image = 'https://static.productionready.io/images/smiley-cyrus.jpg';
                    this.token = '';
                    this.updatedAt = '';
                    this.username = '';
                    this.following = false;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map
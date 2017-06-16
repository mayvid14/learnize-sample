app.factory('blogfac', function ($http, $q) {
    return {
        getBlogs: function () {
            var q = $q.defer();
            $http.post('getblogs', {
                blogs: 1
            }).then(function (data) {
                q.resolve(data);
            }, function (err) {
                q.reject(err);
            });
            return q.promise;
        }
    };
});
app.factory('adminfac', function ($http, $q) {
    return {
        login: function (username, password) {
            var q = $q.defer();
            $http.post('/login', {
                username: username
                , password: password
            }).then(function (data) {
                q.resolve(data);
            }, function (err) {
                q.reject(err);
            });
            return q.promise;
        }
        , jobUpload: function (title, salary, location, desc) {
            var q = $q.defer();
            $http.post('/addjob', {
                title: title
                , salary: salary
                , location: location
                , desc: desc
            }).then(function (data) {
                q.resolve(data);
            }, function (err) {
                q.reject(err);
            });
            return q.promise;
        }
    };
});
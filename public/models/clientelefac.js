app.factory('clientelefac', function ($http, $q) {
    return {
        getClients: function () {
            var q = $q.defer();
            $http.post('getclients', {
                clients: 1
            }).then(function (data) {
                q.resolve(data);
            }, function (err) {
                q.reject(err);
            });
            return q.promise;
        }
    };
});
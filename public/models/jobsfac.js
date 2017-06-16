app.factory('jobsfac', function ($q, $http) {
    return {
        getJobs: function () {
            var q = $q.defer();
            $http.post('/getjobs', {
                jobs: 1
            }).then(function (data) {
                q.resolve(data);
            }, function (err) {
                q.reject(err);
            });
            return q.promise;
        }
    };
});
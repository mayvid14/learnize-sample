app.controller('joblistctrl', ['$scope', '$sessionStorage', 'jobsfac', function ($scope, $sessionStorage, jobsfac) {
    $scope.heading = 'Jobs Listing';
    var promise = jobsfac.getJobs();
    promise.then(function (data) {
        /*Materialize.toast('Done', 2000);*/
        $sessionStorage.put('jobs', data.data);
        $scope.jobs = $sessionStorage.get('jobs');
    }, function (err) {
        Materialize.toast('Error', 2000);
        console.log(err);
    });
    $scope.show = function(index){
        var job = $scope.jobs[index];
        $scope.jobs = [job];
        $scope.heading = 'Job: '+job.title;
    };
    $scope.reset = function(){
        $scope.heading = 'Jobs Listing';
        $scope.jobs = $sessionStorage.get('jobs');
    };
    $scope.applynow = function(title){
        var msg = "You applied for "+title;
        Materialize.toast(msg,2500);
    };
}]);
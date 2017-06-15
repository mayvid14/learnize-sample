app.controller('joblistctrl', ['$scope', function ($scope) {
    $scope.heading = 'Jobs Listing';
    $scope.jobs = [{
            title: 'Title'
            , salary: '₹2'
            , location: "home"
            , information: "Nah"
    }
        , {
            title: 'Title'
            , salary: '₹2'
            , location: "home"
            , information: "Nah"
    }];
}]);
app.controller('blogctrl', ['$scope', 'blogfac', function ($scope, blogfac) {
    var promise = blogfac.getBlogs();
    promise.then(function (data) {
        /*Materialize.toast('Done',3000);*/
        $scope.blogs = data.data;
    }, function (err) {
        Materialize.toast('Error', 3000);
        console.log(err);
    });
}]);
app.controller('adminctrl', ['$scope', '$sessionStorage', 'Upload', '$timeout', '$window', 'adminfac', function ($scope, $sessionStorage, Upload, $timeout, $window, adminfac) {
    if (!$sessionStorage.get('user')) {
        $scope.logged = false;
    }
    else {
        $scope.logged = true;
    }
    $scope.login = function () {
        var username = $scope.uname;
        var password = $scope.passwd;
        var p = adminfac.login(username, password);
        p.then(function (data) {
            if (data.data) {
                $sessionStorage.put('user', data.data);
                var str = "Welcome " + data.data.username;
                Materialize.toast(str, 2000);
                $scope.logged = true;
            }
            else {
                console.log(data.data);
                Materialize.toast("Invalid credentials", 2000);
            }
        }, function (err) {
            Materialize.toast('Error, retry', 2000);
        });
    };
    $scope.logout = function () {
        $sessionStorage.remove('user');
        $scope.logged = false;
    };
    $scope.blogupload = function () {
        Upload.upload({
            url: '/newblog'
            , method: 'POST'
            , data: {
                title: $scope.btitle
                , description: $scope.bdesc
                , file: $scope.blogpic
            }
        , }).then(function (response) {
            $timeout(function () {
                Materialize.toast('Uploaded', 3000);
                $window.location.reload();
            });
        }, function (response) {
            Materialize.toast('Failed', 3000);
        }, function (evt) {
            Materialize.toast('Uploading', 1000);
        });
    };
    $scope.cupload = function () {
        Upload.upload({
            url: '/newclient'
            , method: 'POST'
            , data: {
                title: $scope.ctitle
                , file: $scope.cpic
            }
        , }).then(function (response) {
            $timeout(function () {
                Materialize.toast('Uploaded', 3000);
                $window.location.reload();
            });
        }, function (response) {
            Materialize.toast('Failed', 3000);
        }, function (evt) {
            Materialize.toast('Uploading', 1000);
        });
    };
    $scope.jupload = function(){
        var promise = adminfac.jobUpload($scope.jtitle,$scope.salary,$scope.loc,$scope.jdesc);
        promise.then(function(data){
            $window.location.reload();
        },function(err){
            Materialize.toast('Error', 3000);
        });
    };
}]);
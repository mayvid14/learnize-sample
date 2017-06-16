app.controller('clientelectrl',['$scope','clientelefac',function($scope,clientelefac){
    var promise = clientelefac.getClients();
    promise.then(function(data){
        /*Materialize.toast('Done',3000);*/
        $scope.clientele = data.data;
    },function(err){
        Materialize.toast('Error',3000);
        console.log(err);
    });
}]);
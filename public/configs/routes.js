app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../views/home.html'
    }).when('/contact', {
        templateUrl: '../views/contact.html'
    }).when('/joblistings', {
        templateUrl: '../views/joblistings.html'
        , controller: 'joblistctrl'
    });
});
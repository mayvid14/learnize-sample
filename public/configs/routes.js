app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../views/home.html'
    }).when('/contact', {
        templateUrl: '../views/contact.html'
    }).when('/joblistings', {
        templateUrl: '../views/joblistings.html'
        , controller: 'joblistctrl'
    }).when('/media', {
        templateUrl: '../views/media.html'
    }).when('/testimonials', {
        templateUrl: '../views/testimonials.html'
    }).when('/clientele', {
        templateUrl: '../views/clientele.html'
        , controller: 'clientelectrl'
    }).when('/blog', {
        templateUrl: '../views/blog.html'
        , controller: 'blogctrl'
    }).when('/admin', {
        templateUrl: '../views/admin.html'
        , controller: 'adminctrl'
    });
});
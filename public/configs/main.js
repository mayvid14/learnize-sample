var app = angular.module('learnize', ['ngRoute', 'swxSessionStorage','ngFileUpload']);
app.filter('getDur', function () {
    return function (num) {
        var date = new Date(num * 1);
        /*console.log(date);console.log(moment());*/
        return moment(date).fromNow();
    }
});
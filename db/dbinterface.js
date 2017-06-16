var dbops = require('./dbops');
module.exports = {
    getJobs: function (res) {
        var promise = dbops.getJobs();
        promise.then(function (data) {
            res.send(data);
        }, function (err) {
            res.send(err);
        });
    }
    , getClients: function (res) {
        var promise = dbops.getClients();
        promise.then(function (data) {
            res.send(data);
        }, function (err) {
            res.send(err);
        });
    }
    , getBlogs: function (res) {
        var promise = dbops.getBlogs();
        promise.then(function (data) {
            res.send(data);
        }, function (err) {
            res.send(err);
        });
    }
    , login: function (username, password, res) {
        var promise = dbops.getUser(username, password);
        promise.then(function (data) {
            res.send(data);
        }, function (err) {
            res.send(err);
        });
    }
    , addBlog: function (title, description, pic, res) {
        var promise = dbops.addBlog(title, description, pic);
        promise.then(function (data) {
            res.send(data);
        }, function (err) {
            res.send(err);
        });
    }
    , addClient: function (title, pic, res) {
        var promise = dbops.addClient(title, pic);
        promise.then(function (data) {
            res.send(data);
        }, function (err) {
            res.send(err);
        });
    }
    , addJob: function (title,salary,location,desc, res) {
        var promise = dbops.addJob(title,salary,location,desc);
        promise.then(function (data) {
            res.send(data);
        }, function (err) {
            res.send(err);
        });
    }
};
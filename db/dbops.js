var jobs = require('./dbjobschema');
var clients = require('./dbclienteleschema');
var blogs = require('./dbblogschema');
var users = require('./dbuserschema');
module.exports = {
    getJobs: function () {
        return jobs.find().exec();
    }
    , getClients: function () {
        return clients.find().exec();
    }
    , getBlogs: function () {
        return blogs.find().exec();
    }
    , getUser: function (username, password) {
        return users.findOne({
            username: username
            , password: password
        }).exec();
    }
    , addBlog: function (title, description, pic) {
        var blog = new blogs({
            title: title
            , description: description
            , pic: pic
        });
        return blog.save();
    }
    , addClient: function (title, pic) {
        var client = new clients({
            title: title
            , pic: pic
        });
        return client.save();
    }
    , addJob: function (title, salary, location, desc) {
        var job = new jobs({
            title: title
            , salary: salary
            , location: location
            , information: desc
        });
        return job.save();
    }
};
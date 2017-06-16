var mongoose = require('mongoose');
mongoose.promise = require('bluebird');
var dburl = require('./dburl');
var db = mongoose.connect(dburl.dburl);
module.exports = {
    db: db
    , mongoose: mongoose
};
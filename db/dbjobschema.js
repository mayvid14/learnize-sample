var dbobject = require('./dbobject');
var jobObject = new dbobject.mongoose.Schema({
    title: {
        type: String
    }
    , salary: {
        type: Number
    }
    , location: {
        type: String
    }
    , information: {
        type: String
    }
});
module.exports = dbobject.db.model('jobs', jobObject);
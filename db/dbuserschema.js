var dbobject = require('./dbobject');
var user = dbobject.mongoose.Schema({
    username: {
        type: String
    }
    , password: {
        type: String
    }
});
module.exports = dbobject.db.model('users', user);
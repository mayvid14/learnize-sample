var dbobject = require('./dbobject');
var blog = dbobject.mongoose.Schema({
    title: {
        type: String
    }
    , description: {
        type: String
    }
    , pic: {
        type: String
    }
    , createdOn: {
        type: Number
        , default: Date.now
    }
    , user: {
        type: String
        , default: "Learnize"
    }
});
module.exports = dbobject.db.model('blogs', blog);
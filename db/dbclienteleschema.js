var dbobject = require('./dbobject');
var clientele = dbobject.mongoose.Schema({
    title: {
        type: String
    }
    , pic: {
        type: String
    }
    , addedOn: {
        type: Number
        , default: Date.now
    }
});
module.exports = dbobject.db.model('clienteles', clientele);
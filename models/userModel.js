var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    pass: String,
    createdAt: {
    	type: Date,
    default: Date.now
    	// type: ,
// default: new Date().now
    }
});

module.exports = mongoose.model('User', UserSchema);
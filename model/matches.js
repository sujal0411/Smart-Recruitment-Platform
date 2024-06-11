const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchesSchema = new Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }    
});
let MATCHES = mongoose.model('Matches',matchesSchema)
module.exports = MATCHES;
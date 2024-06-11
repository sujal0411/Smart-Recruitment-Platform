const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    Rating : {
        type : String,
        required : true
    },
    Review : {
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});
let FEEDBACK = mongoose.model('Feedback',FeedbackSchema)
module.exports = FEEDBACK
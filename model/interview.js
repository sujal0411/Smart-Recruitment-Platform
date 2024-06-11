const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
    CompanyName : {
        type : String,
        required : true
    },
    Palace : {
        type : String,
        required : true
    },
    Field : {
        type : String,
        required : true
    },
    Timeing : {
        type : String,
        required : true
    },
    Experience : {
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});
let INTERVIEW = mongoose.model('Interview',interviewSchema)
module.exports = INTERVIEW
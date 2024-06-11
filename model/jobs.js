const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobsSchema = new Schema({
    JobType : {
        type : String,
        required : true
    },
    JobTime : {
        type : String,
        required : true
    },
    Salary : {
        type : String,
        required : true
    },
    LaunchTime : {
        type : String,
        required : true
    },
    Resume : [{
        type : String,
        required : true
    }],
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});
let JOBS = mongoose.model('Jobs',jobsSchema)
module.exports = JOBS;
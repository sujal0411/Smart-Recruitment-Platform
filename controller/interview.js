let INTERVIEW = require("../model/interview");

exports.ScheduleInterview = async function (req, res, next) {
    try {
        req.body.userID = req.userID
        let Create = await INTERVIEW.create(req.body);
        res.status(201).json({
            status : "success",
            message : "Interview Scheduled successfully",
            data : Create
        });
    } catch (error) {        
        res.status(404).json({
            status : "fail",
            message : error.message        
        });
    }
};

exports.ViewInterview = async function (req, res, next) {
    try {
        // let Find = "hello"
        let Find = await INTERVIEW.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status : "success",
            message : "Interview Viewed Successfully",
            data : Find
        });
    } catch (error) {        
        res.status(404).json({
            status : "fail",
            message : error.message        
        });
    }
};

exports.UpdateInterview = async function (req, res, next) {
    try {
        let Update = INTERVIEW.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({
            status : "success",
            message : "Interview Updated Successfully",
            data : Update
        });
    } catch (error) {        
        res.status(404).json({
            status : "fail",
            message : error.message        
        });
    }
};

exports.DeleteInterview = async function (req, res, next) {
    try {
        await INTERVIEW.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status : "success",
            message : "Interview Deleted Successfully",            
        });
    } catch (error) {        
        res.status(404).json({
            status : "fail",
            message : error.message        
        });
    }
};
let JOBS = require("../model/jobs");
// let USER = require("../model/user");

exports.MatchCandidates = async function(req,res,next) {
    try {
        req.body.userID = req.userID
        let find = await JOBS.findById(req.params.id).populate("userID");
        res.status(201).json({
            status : "success",
            message : "Candidates Matched successfully",
            data : find
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message            
        });        
    }

}

exports.ViewMatches = async function(req,res,next) {
    try {
        req.body.userID = req.userID
        let find = await USER.findById(req.params.id).populate("userID").find({userID : req.userID});
        res.status(201).json({
            status : "success",
            message : "Matches Viewed successfully",
            data : find
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message            
        });        
    }

}


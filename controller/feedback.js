let FEEDBACK = require("../model/feedback");

exports.AddFeedback = async function (req, res, next) {
    try {
        req.body.userID = req.userID
        let Create = await FEEDBACK.create(req.body);
        res.status(201).json({
            status : "success",
            Message : "Thanks for your feedback",
            data : Create
        })        
    } catch (error) {
        res.status(404).json({
            status : "fail",
            Message : error.message            
        })
        
    }
};

exports.ViewFeedback = async function (req, res, next) {
    try {
        let Find = await FEEDBACK.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status : "success",
            Message : "Feedback Viewed Successfully", 
            data : Find
        })        
    } catch (error) {
        res.status(404).json({
            status : "fail",
            Message : error.message            
        })
        
    }
};
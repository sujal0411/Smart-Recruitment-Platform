let JOBS = require('../model/jobs');

exports.AddJob = async function (req, res, next) {
    try {
        
        req.body.Resume = req.files.map(el => el.filename)
        req.body.userID = req.userID
        let Create = await JOBS.create(req.body);
        res.status(201).json({
            status: 'success',
            message : "job added successfully",
            data : Create            
        })        
    } catch (error) {
        res.status(201).json({
            status: 'fail',
            message : error.message           
        })         
    }
};

exports.ViewJob = async function (req, res, next) {
    try {
        let Find = await JOBS.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status: 'success',
            message : "jobs viewed successfully",
            data : Find
        })        
    } catch (error) {
        res.status(201).json({
            status: 'fail',
            message : error.message           
        })         
    }
};

exports.UpdateJob = async function (req, res, next) {
    try {
        let Update = await JOBS.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({
            status: 'success',
            message : "jobs updated successfully",
            data : Update
        })        
    } catch (error) {
        res.status(201).json({
            status: 'fail',
            message : error.message           
        })         
    }
};

exports.DeleteJob = async function (req, res, next) {
    try {
        await JOBS.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status: 'success',
            message : "jobs deleted successfully"            
        })        
    } catch (error) {
        res.status(201).json({
            status: 'fail',
            message : error.message           
        })         
    }
};
let USER = require("../model/user")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.Sequre = async function (req,res,next) {
    try {
        let token = req.headers.authorization
        if (!token) {
            throw new Error("please attech token")            
        }
        let decoded = jwt.verify(token,'DEMO')
        req.userID = decoded.id
        let Check = await USER.findById(decoded.id)
        if (!Check) {
            throw new Error("user not found")            
        }
        next();
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message            
        })        
    }
};

exports.RegisterEmployer = async function (req,res,next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10);
        let Create = await USER.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'Employer Registered Successfully',
            data : Create
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message            
        })        
    }
};

exports.EmployerLogin = async function (req,res,next) {
    try {
        let Check = await USER.findOne({email : req.body.email});
        if (!Check) {
            throw new Error("user not found");            
        }
        let passverify = await bcrypt.compare(req.body.password, Check.password)
        if (!passverify) {
            throw new Error("password invalid");             
        }
        res.status(200).json({
            status: 'success',
            message: 'Employer Login Successfully',
            data : Check
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message            
        })        
    }
};

exports.RegisterCandidate = async function (req,res,next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10);
        let Create = await USER.create(req.body)
        res.status(201).json({
            status: 'success',
            message: 'Candidate Registered Successfully',
            data : Create
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message            
        })        
    }
};

exports.CandidateLogin = async function (req,res,next) {
    try {
        let Check = await USER.findOne({username : req.body.username});
        if (!Check) {
            throw new Error("user not found");            
        }
        let passverify = await bcrypt.compare(req.body.password, Check.password)
        if (!passverify) {
            throw new Error("password invalid");             
        }

        var token = jwt.sign({ id: Check._id }, 'DEMO');

        res.status(200).json({
            status: 'success',
            message: 'Candidate Login Successfully',
            data : Check,
            token
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message            
        })        
    }
};

exports.UpdateUserProfile = async function (req,res,next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10);
        let Edit = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({
            status: 'success',
            message: 'Candidate Updated Successfully',
            data : Edit
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message            
        })        
    }
};
    
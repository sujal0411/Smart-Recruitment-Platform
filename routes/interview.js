var express = require('express');
var router = express.Router();
var interviewC = require("../controller/interview");
var USERC = require('../controller/user');

/* GET home page. */
router.post('/ScheduleInterview',USERC.Sequre, interviewC.ScheduleInterview);
router.get('/', USERC.Sequre,interviewC.ViewInterview);
router.patch('/:id',USERC.Sequre, interviewC.UpdateInterview);
router.delete('/:id', USERC.Sequre,interviewC.DeleteInterview);


module.exports = router;

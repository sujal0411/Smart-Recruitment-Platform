var express = require('express');
var router = express.Router();
var USERC = require('../controller/user');

/* GET home page. */
router.post('/RegisterEmployer', USERC.RegisterEmployer);
router.post('/EmployerLogin', USERC.EmployerLogin);
router.post('/RegisterCandidate', USERC.RegisterCandidate);
router.post('/CandidateLogin', USERC.CandidateLogin);
router.patch('/:id', USERC.Sequre,USERC.UpdateUserProfile);

module.exports = router;

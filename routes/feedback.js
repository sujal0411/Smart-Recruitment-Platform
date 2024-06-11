var express = require('express');
var router = express.Router();
var feedbackC = require("../controller/feedback");
var USERC = require("../controller/user")

/* GET home page. */
router.post('/AddFeedback',USERC.Sequre, feedbackC.AddFeedback);
router.get('/',USERC.Sequre,feedbackC.ViewFeedback);

module.exports = router;

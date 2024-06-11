var express = require('express');
var router = express.Router();
var matchC = require("../controller/matches");
var USERC = require("../controller/user")

/* GET users listing. */
router.get('/:id', USERC.Sequre, matchC.MatchCandidates);
router.get('/:id',USERC.Sequre, matchC.ViewMatches);

module.exports = router;

var express = require('express');
var router = express.Router();
const multer  = require('multer');
var jobC = require("../controller/jobs");
var USERC = require('../controller/user');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage:storage })

/* GET home page. */
router.post('/AddJob', upload.array('Resume',10),USERC.Sequre,jobC.AddJob);
router.get('/',USERC.Sequre, jobC.ViewJob);
router.patch('/:id', upload.array('Resume',10),USERC.Sequre,jobC.UpdateJob);
router.delete('/:id',USERC.Sequre,jobC.DeleteJob);

module.exports = router;

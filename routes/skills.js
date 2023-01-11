var express = require('express');
var router = express.Router();

// Require the controller that exports skills CRUD functions
const skillsCtrl = require('../controllers/skills')

// ALL actual paths start with "/skills"
router.get('/', skillsCtrl.index);

module.exports = router;

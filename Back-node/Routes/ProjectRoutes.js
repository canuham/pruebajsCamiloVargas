let express = require('express');

let ProjectController = require('../Controllers/ProjectController');

let router = express.Router();

router.get('/get',ProjectController.getList);

module.exports = router;
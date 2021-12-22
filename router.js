const express = require('express');
const router = express.Router();

const viewsController = require('./controllers/viewsController');

router.get('/', viewsController.renderPage_home);



module.exports = router;
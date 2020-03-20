const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');



router.get('/',homeController.home);

router.use('/admins',require('./admin'));

router.use('/departments', require('./depart_route'));

router.use('/employees', require('./employee'));

router.use('/leaves', require('./leave'));

module.exports = router;

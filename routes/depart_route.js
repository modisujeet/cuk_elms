const express = require('express');
const router = express.Router();
const passport = require('passport'); 


const departController = require('../controllers/department_controller');



router.post('/create', departController.create);

router.get('/destroy/:id', passport.checkAuthentication, departController.destroy);

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport'); 

const adminController = require('../controllers/admin_controller');

router.get('/admin', passport.checkAuthentication, adminController.admin);

router.get('/sign-up', adminController.signUp);

router.get('/sign-in', adminController.SignIn);
router.post('/create',adminController.create);

// use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/admins/sign-in'},
) , adminController.createSession);

router.get('/sign-out', adminController.destroySession);
module.exports = router;  

router.get('/dashboard', adminController.dashBoard);

router.get('/add-department', adminController.addDepartment);

router.get('/add-leave', adminController.addLeave);

router.get('/add-employee', adminController.addEmployee);

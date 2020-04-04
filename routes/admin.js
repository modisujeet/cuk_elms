const express = require('express');
const router = express.Router();
const passport = require('passport'); 

const adminController = require('../controllers/admin_controller');
const departController = require('../controllers/department_controller');

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

// **************** routes for the dashboard *************
router.get('/dashboard', adminController.dashBoard);

// **************** routes for the add department *************
router.get('/add-department', adminController.addDepartment);

// **************** routes for the add leave *************
router.get('/add-leave', adminController.addLeave);

// **************** routes for the add employee *************
router.get('/add-employee', adminController.addEmployee);

// **************** routes for the manage department *************
router.get('/manage-department', departController.manageDepartment);

// ***************** routes for the edit department ******************

router.get('/edit-department/:id', departController.editDepartment);

router.get('/destroy/:id', departController.destroy);

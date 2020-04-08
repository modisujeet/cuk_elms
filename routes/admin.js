const express = require('express');
const router = express.Router();
const passport = require('passport'); 

const adminController = require('../controllers/admin_controller');
const departController = require('../controllers/department_controller');
const leaveController = require('../controllers/leave_controller');
const employeeController = require('../controllers/employee_controller');

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
// routes for delete the department from db
router.get('/destroy/:id', departController.destroy);

// ////////////////////////////////////////////////////////////////
router.get('/manage-leave', leaveController.manageLeave);

router.get('/edit-leave/:id', leaveController.editLeave);

router.get('/destroyData/:id', leaveController.destroyData);

// ///////////////////////////////////////////////////
router.get('/manage-employee', employeeController.manageEmployee);

router.get('/edit-employee/:id', employeeController.editEmployee);

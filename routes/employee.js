const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee_controller');

router.post('/create', employeeController.create);

module.exports = router;
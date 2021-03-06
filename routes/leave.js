const express = require('express');
const router = express.Router();

const leaveController = require('../controllers/leave_controller');

router.post('/create', leaveController.create);

router.post('/update-leave', leaveController.updateLeave);


module.exports = router;
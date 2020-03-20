const express = require('express');
const router = express.Router();

const addDepartController = require('../controllers/add_dep_controller');



router.post('/create', addDepartController.create);

module.exports = router;
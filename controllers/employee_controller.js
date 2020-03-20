const Employee = require('../models/employees');


//***************** adding employees data in Database *************
module.exports.create = function(req, res){
    Employee.create(req.body, function(err, employee){
        if(err){console.log('error in creating employee profile!'); return;}
        return res.redirect('back');
    });
}


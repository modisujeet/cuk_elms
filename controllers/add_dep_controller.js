const Department = require('../models/department');


// ************** add data in database for department **************

module.exports.create = function(req, res){
    Department.create(req.body, function(err, leave){
        if(err){console.log('error in creating department in database!'); return;}
        return res.redirect('back');
    });
} 

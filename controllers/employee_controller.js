const Employee = require('../models/employee');


//***************** adding employees data in Database *************
module.exports.create = function(req, res){
    Employee.create(req.body, function(err, employee){
        if(err){console.log('error in creating employee profile!'); return;}
        return res.redirect('back');
    });
}

// ******************** Render the manage employee page ***************
module.exports.manageEmployee = function(req, res){
    if(req.isAuthenticated()){
        Employee.find({}, function(err, employee){

            return res.render('manage_employee',{
                title : "Manage Employee",
                employee : employee
            });
        return res.redirect('/');
        });

    }
}

// **************** edit employee *********************
module.exports.editEmployee = function(req, res){
    Employee.findById(req.params.id, function(err, employee){
        if(!err){
            res.render('edit_employee', {
                title : "Update Employee",
                employee : employee
            });
        }
    });
}

// ****************** Update Employee *********************
module.exports.updateEmployee = function(req, res){
    Employee.findOneAndUpdate({ _id : req.body._id}, req.body, {new : true}, function(err, employee){
        if(!err){
            res.redirect('/admins/manage-employee');
        }
        else
        {
            console.log('error during record update:' +err);
        }
    });
}
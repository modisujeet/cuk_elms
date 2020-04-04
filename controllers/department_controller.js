const Department = require('../models/department');

// ************** add data in database for department **************

module.exports.create = function(req, res){
    Department.create(req.body, function(err, department){
        if(err){console.log('error in creating department in database!'); return;}
        return res.redirect('back');
    });
} 



// ******************** Render the manage department page ***************
module.exports.manageDepartment = function(req, res){
    if(req.isAuthenticated()){
        Department.find({}, function(err, departments){

            return res.render('manage_department',{
                title : "Manage Department",
                departments : departments
            });
        return res.redirect('/');
        });

    }
}

// ******************* Delete the list from database ******************
module.exports.destroy = function(req, res){
    Department.findByIdAndRemove(req.params.id, function(err, department){
        if(!err){
            res.redirect('/admins/manage-department');
        }
        else{
            console.log('error in deleting department list: ' +err);
        }
    });
}

//     Department.findById(req.params.id, function(err, department){
//     // .id means converting the object id into string 
//         if(department.admin == req.admin.id){
//             department.remove();
//         }
//         else{
//             return res.redirect('back');
//         }
//     });
// }

module.exports.editDepartment = function(req, res){
    Department.findById(req.params.id, function(err, department){
        if(!err){
            res.render('edit_department', {
                title : "Update Department",
                department : department
            });
        }
    });
}

module.exports.updateDepartment = function(req, res){
    Department.findOneAndUpdate({ _id : req.body._id}, req.body, {new : true}, function(err, department){
        if(!err){
            res.redirect('/admins/manage-department');
        }
        else
        {
            console.log('error during record update:' +err);
        }
    });
}
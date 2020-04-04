const Leave = require('../models/leave');

// **************** Adding leave type data in database ***************
module.exports.create = function(req, res){
    Leave.create(req.body, function(err, leave){
        if(err){console.log('error in creating leave in database!'); return;}
        return res.redirect('back');
    });
} 

// ******************** Render the manage leave page ***************
module.exports.manageLeave = function(req, res){
    if(req.isAuthenticated()){
        Leave.find({}, function(err, leaves){

            return res.render('manage_leave',{
                title : "Manage Leave",
                leaves : leaves
            });
        return res.redirect('/');
        });

    }
}

// ******************* Delete the list from database ******************
module.exports.destroyData = function(req, res){
    Leave.findByIdAndRemove(req.params.id, function(err, leave){
        if(!err){
            res.redirect('/admins/manage-leave');
        }
        else{
            console.log('error in deleting leave list: ' +err);
        }
    });
}



// **************** edit leave type *********************
module.exports.editLeave = function(req, res){
    Leave.findById(req.params.id, function(err, leave){
        if(!err){
            res.render('edit_leave', {
                title : "Update Leave",
                leave : leave
            });
        }
    });
}

// ****************** Update Department *********************
module.exports.updateLeave = function(req, res){
    Leave.findOneAndUpdate({ _id : req.body._id}, req.body, {new : true}, function(err, leave){
        if(!err){
            res.redirect('/admins/manage-leave');
        }
        else
        {
            console.log('error during record update:' +err);
        }
    });
}


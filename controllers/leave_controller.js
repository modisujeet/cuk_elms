const Leave = require('../models/leave');

// **************** Adding leave type data in database ***************
module.exports.create = function(req, res){
    Leave.create(req.body, function(err, leave){
        if(err){console.log('error in creating leave in database!'); return;}
        return res.redirect('back');
    });
} 

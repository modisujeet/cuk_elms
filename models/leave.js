const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    leavename : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true
    }
},{ 
    timestamps : true
});

const Leave = mongoose.model('Leave', leaveSchema);
module.exports = Leave;
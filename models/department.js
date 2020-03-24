const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    departmentname : {
        type : String, 
        required :true,
        unique : true
    },
    shortname :{
        type : String,
        required : true 
    },
    departmentcode : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : 'Admin'
    }
},{
    timestamps : true   
});

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;
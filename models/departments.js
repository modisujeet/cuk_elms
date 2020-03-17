const mongoose = require('mongoose');
const departmentSchema = new mongoose.Schema({
    departmentnam : {
        type : String,
        required : true,
        unique : true
    },
    departmentcode : {
        type : String,
        required : true
    },
    shortname : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;

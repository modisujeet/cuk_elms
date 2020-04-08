const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employee_code : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        required : true
    },
    firstname : {
        type  : String,
        required : true
    },
    lastname : {
        type : String,
        required  :true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
         type : String,
         required : true
    },
    reg_date : {
        type : Date,
        default : Date.now,
        required : true
    },
    dob : {
        type : Date,
        required : true 
    },
    department : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true,
        unique : true
     },
     pincode : {
         type : String,
         required :true
     },
     status : {
         type : String,
         default : 'Active'
     }
},{
    timestamps  : true
});

const  Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

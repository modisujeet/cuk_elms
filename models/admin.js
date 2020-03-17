const mongoose = require('mongoose');
const validator = require('validator');



const adminSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true, 'please Provide name!!']

    },
    email:{
        type : String,
        required : [true,'Please Provide Your Email!!'],
        unique : true,
        lowercase : true,
        validate : [validator.isEmail, 'please provide a valid email']
    },
    password : {
        type : String,
        required : [true,'please provide a password'],
        minlength : 8
    }
},{
    timestamps : true
});

const Admin = mongoose.model('Admin',adminSchema);

module.exports = Admin;

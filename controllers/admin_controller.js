// Import the Admin Achema from model
const Admin = require('../models/admin');

module.exports.admin = function(req, res){
    return res.render('_admin' ,{
        title : 'Admin Profile'
    })
}

// render the admin sign up pages
module.exports.signUp = function(req, res){
    // when admin is signed in restrict him to reach sign-up pages
    if(req.isAuthenticated()){
      return  res.redirect('/admins/admin');
    }
    return res.render('admin_signup',{
            title : "ELMS | Sign Up"
    })
}



// render the admin sign in page 
module.exports.SignIn = function(req, res){
    // when admin is signed in restrict him to reach sign-in  pages
    if(req.isAuthenticated()){
       return res.redirect('/admins/admin');
    }
    return res.render('admin_signin',{
        title : "ELMS | Sign In"
    })
}

// get the admin sign up data

module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password)
    {
        return res.redirect('back');
    }

    Admin.findOne({email : req.body.email}, function(err, admin){
        if(err) {console.log('error in finding the admin in singing up!'); return}

        if(!admin){
            Admin.create(req.body, function(err, admin){
                if(err) { console.log('error in creating the admin while signing up!'); return}

                return res.redirect('/admins/sign-in');
            })
        }

        else{
            return res.redirect('back');
        }
    });
}

// *************** createsession for admin sign in *****************
module.exports.createSession = function(req, res){

    return res.redirect('/admins/admin');
    
}
// removing admin session from cookies or SIGN_OUT 
module.exports.destroySession = function(req, res){

    req.logout(); 
    return res.redirect('/');
}

// **************** ADD DEPARTMENT BY ADMIN *************************
module.exports.addDepartment = function(req, res){
  if(req.isAuthenticated()){
       return res.render('add_department',{
           title :"Add Department"
       })
  }
  return res.redirect('/');
}
// *************** dashboard *************
module.exports.dashBoard = function(req, res){
    if(req.isAuthenticated()){
        return res.render('_dashboard',{
            title : "DashBoard"
        })
        return res.redirect('/');
    }
}

// ************** add leave type by admin **************
module.exports.addLeave = function(req, res){
    if(req.isAuthenticated()){
        return res.render('add_leave',{
            title : "Add Leave"
        })
        return res.redirect('/');
    }
}

// *************** add employee by admin **************
module.exports.addEmployee = function(req, res){
    if(req.isAuthenticated()){
        return res.render('add_employee',{
            title : "Add Employee"
        })
        return res.redirect('/');
    }
}

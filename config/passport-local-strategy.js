const passport = require('passport');

const LocalStrategy =  require('passport-local').Strategy;

const Admin = require('../models/admin');

// Authentication using passport
passport.use(new LocalStrategy({
    usernameField : 'email'
    },
     
    function(email, password, done){
    // find a user and establish identity
        Admin.findOne({email : email}, function(err, admin){
            if(err) {
                console.log('Error in finding admin --> Passport');
                return done(err);
            }

            if(!admin || admin.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }

            return done(null, admin);
        });
    }

));

// serializing the user to decide which key is to be kept in the cookies
    passport.serializeUser(function(admin, done){
        done(null, admin.id);
    });

// deserializing the user from the key in the cookies
    passport.deserializeUser(function(id, done){
        Admin.findById(id, function(err, admin){
            if(err){
                console.log('Error in finding admin --> Passport');
                return done(err);
            }
            return done(null, admin);
        });
    });
    // check if admin is authenticated
    passport.checkAuthentication = function(req, res, next){
        // if admin is signed in, then pass on the request to the next function(controller's action)
        if(req.isAuthenticated()){
            return next();
        }
        // if the admin is not signed in
        return res.redirect('/admins/sign-in');
    }

    passport.setAuthenticatedAdmin = function(req, res, next){
        if(req.isAuthenticated()){
            //req.admin contains the current signed in admin from session cookie -
            // -and we are just sending this to local for the views
            res.locals.admin = req.admin;

        }
        next();
    }

    module.exports = passport;
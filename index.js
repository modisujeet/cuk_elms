const express = require('express');
const cookieparser = require('cookie-parser');
const validator = require('validator');
const bcrypt = require('bcrypt');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
// importing mongoose library
const db = require('./config/mongoose');
//  used for session cookies and local authentication
const passport = require('passport');
const session = require('express-session');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);


app.use(express.urlencoded());
app.use(cookieparser());



// acccessing static folder 
app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// setup the view engine for accessing ejs or html file
app.set ('view engine','ejs');
app.set ('views', './views');


// Mongo store is store the mongo cookies in the DB

app.use(session({
    name : 'ELMS',
    // todo change the secret before deployement in production mode
    secret : 'blahsomething',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (1000 * 60 * 100)
    },
    store :new MongoStore(
        {
            mongooseConnection: db,
            autoRemove : 'disabled' 
        },

        function(err){
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedAdmin); 

// use express routers importing from index.js of routes
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the Server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});




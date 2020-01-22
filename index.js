const express = require('express');

const app = express();

const port = 8000;
// use express routers importing from index.js of routes
app.use('/', require('./routes'));




app.listen(port, function(err){
    if(err){
        console.log(`Error in running the Server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});
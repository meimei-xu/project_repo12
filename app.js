const express = require('express');
const path = require('path');

// Init App
const app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

//Start Server
app.listen(3000, function(){
    console.log('Server started on port 3000...')
});
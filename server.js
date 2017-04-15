'use strict';

let express = require('express');
let app = express();

 // set the port of our application
 // process.env.PORT lets the port be set by Heroku
let port = process.env.PORT || 8080;

// app.set('view engine', 'html');

 // make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

 // set the home page route
app.get('/', function(req, res) {

     // make sure index is in the right directory. In this case /app/index.html
     res.render('index');
});
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

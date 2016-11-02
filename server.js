var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var mongoose = require('mongoose');

var db = require('./config/db');
mongoose.connect(db.url);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

var port = process.env.PORT;

var router = express.Router();

// routes ==================================================
require('./app/routes')(router); // configure our routes

// var Cluster = require('./app/models/cluster.js');

// router.use(function(req, res) {
//     next(); 
// });

app.use('/api', router);

app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

app.listen(port);
console.log('Magic happens on port ' + port);
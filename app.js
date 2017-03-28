var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var index = require('./routes/index');
// var users = require('./routes/users');
var mongoose = require('mongoose');
var monk = require('monk');
var helmet = require('helmet');
mongoose.connect('mongodb://127.0.0.1:27017/employee');
var app = express();

app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'src')));

app.use(function(req, res, next) {
    req.db = mongoose;
    next();
})
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use('/', index);
// app.use('/users', users);


module.exports = app;
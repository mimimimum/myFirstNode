/*var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function(req, res, next) {
    console.log('Record timestamp');
    next();
});

app.use(bodyparser.json());

app.post('/', function(req, res, next) {
    var body = req.body;
    res.send('Hello World!' + body.a);
});

app.get('/help', function(req, res, next) {
    res.send('Help me');
});

app.listen(3000,function(){
    console.log('start');
}); */

import mongoose from './config/mongoose';
import express from './config/express';
import passport from './config/passport';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

var db = mongoose();
var app = express();
var psp = passport();

app.listen(process.env.PORT, () => {
       console.log('Starting node.js on port ' + process.env.PORT);
});

module.exports = app;

'use strict'

let express = require('express');

var app = express();

let project_routes = require('./Routes/ProjectRoutes')


app.use(express.urlencoded({extended:false}));

//app.use(express.json());

//
app.use('/api', project_routes);

module.exports = app;
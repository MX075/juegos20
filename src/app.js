const express = require('express');
const app = express();

const path = require('path');

// settings 
app.set('port', process.env.PORT || 4200);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
module.exports = app;
const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');

const app = express();

const router = require('./router.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '10mb', extended: true }));
//app.use(cookieParser());

app.use('/', router);



module.exports = app;
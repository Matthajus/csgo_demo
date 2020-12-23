var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
var parserRouter = require('./routes/parser-router');

var r = require('./routes/router');
const parser = require('./bin/parser');

var app = express();
var cors = require('cors');
const multer = require("multer");
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', r);
app.use('/parser', parserRouter);
app.post("/upload", multer({dest: "./uploads/"}).single("upload"), function (req, res) {
    res.send(parser.parse(req.file.path));
});

module.exports = app;

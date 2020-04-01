var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./MVC/models/db');

var adminRouter = require('./MVC/routes/admin.router')
var indexRouter = require('./MVC/routes/index');
var usersRouter = require('./MVC/routes/users');
var bodyParser = require('body-parser')
var app = express();
var formidableMiddleware = require('express-formidable');
// view engine setup
app.set('views', path.join(__dirname, 'MVC', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));


app.use('/admin', formidableMiddleware());
//app.use(/^\/(?!admin).*/, express.urlencoded({ extended: false }));

app.use(express.json({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

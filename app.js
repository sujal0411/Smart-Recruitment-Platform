var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var jobsRouter = require('./routes/jobs');
var matchesRouter = require('./routes/matches');
var interviewRouter = require('./routes/interview');
var feedbackRouter = require('./routes/feedback');

const mongoose = require('mongoose');
const { error } = require('console');

mongoose.connect('mongodb://127.0.0.1:27017/SmartRecruitmentPlatform')
  .then(() => console.log('Connected!'))
  .catch((error) => console.log(error.message))

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user',userRouter);
app.use('/jobs',jobsRouter);
app.use('/matches',matchesRouter);
app.use('/interview',interviewRouter);
app.use('/feedback',feedbackRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

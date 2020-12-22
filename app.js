var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var cors = require('cors')
//路由
var introduce = require('./routes/introduces');
var interests = require('./routes/interests');
var tickets = require('./routes/tickets');
var users = require('./routes/users');


//创建连接
mongoose.connect('mongodb://150.158.7.205:27017/vue3', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection;//连接数据库
//如果失败
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {//第一次连接成功
  console.log('连接成功');
});

var app = express();
app.use(cors);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//功能------------------------

app.use('/introduce', introduce);
app.use('/interests', interests);
app.use('/tickets', tickets);
app.use('/users', users);

//功能------------------------

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

console.log('Initialize Core...');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql= require('mysql');
var http = require('http');


// Routes
var index = require('./routes/index');
var getAll = require('./routes/getAll');
var get = require('./routes/get');
var post = require('./routes/post');
var put = require('./routes/put');
var del = require('./routes/delete');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Database connection
app.use(function(req, res, next){
	global.connection = mysql.createConnection({
	  	host     : 'localhost',
	  	user     : 'root',
			password : '',
  		database : 'rest-api-db'
	});
	connection.connect();
	next();
});

// API Use
app.use('/', index);
app.use('/api/v1/person', getAll);
app.use('/api/v1/person/', get);
app.use('/api/v1/person/', post);
app.use('/api/v1/person/', put);
app.use('/api/v1/person/', del);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
var server = http.createServer(app);
// Start server
server.listen(4001);
console.log('Running at port 3000');

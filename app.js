var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var linkedinRouter = require('./routes/linkedin');

var app = express();

var corsOptons = {
	origin: "http://localhost:3001"
	};
app.use (cors(corsOptons));
app.use (bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// multer file upload for image
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/profileImage/')
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' + Math.round(Math.random() * 1E9)+ '.' +extension)
  }
})

const upload = multer({ storage: storage })

// multer file upload for image ends here

app.use('/', upload.single('profileImage'),indexRouter);
app.use('/users', usersRouter);
app.use('/linkedin', linkedinRouter);




// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(4000, () => {
  console.log ("Server is running on port 4000." );
  });


module.exports = app;

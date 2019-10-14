var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

import models, { connectDb } from './models/models';
import {createStories} from './seeds/stories';
import { createFellowshipNights} from './seeds/fellowship_nights';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  req.context = {
    models
  };
  next();
})

app.get('/api/stories', async (req, res) => {
  const stories = await req.context.models.Story.find();
  return res.send(stories);
})

app.get('/api/fellowshipnights', async (req, res) => {
  const fsnight = await req.context.models.FellowshipNight.find();
  return res.send(fsnight);
})

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.Story.deleteMany({}),
      models.FellowshipNight.deleteMany({})
    ]);
    await createStories();
    await createFellowshipNights();
  }


  app.listen(process.env.PORT || 5000, () => 
    console.log(`Listening on port ${process.env.PORT || 5000}`),
  );
}).catch(err => console.log(`there's an error: ${err}`))

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

import models, { connectDb } from './models/models';
import {createStories} from './seeds/stories';
import { createFellowshipNights} from './seeds/fellowship_nights';
import { createPictures } from './seeds/pictures';
import { model } from 'mongoose';
import { createUpcoming } from './seeds/upcoming';

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

app.get('/api/pictures', async (req, res) => {
  const pictures = await req.context.models.Picture.find();
  return res.send(pictures);
})

app.get('/api/pictures/:type', async (req, res) => {
  const type = req.params.type;
  const picture = await req.context.models.Picture.findOne({type});
  return res.send(picture);
})

app.post('/api/pictures', async (req, res) => {
  const picture = new model.Picture({
    type: req.body.type,
    url: req.body.url
  })

  picture.save();
  return res.send(picture);
})

app.put('/api/pictures/:type', async (req, res) => {
  req.context.models.Picture.findById(req.body.id, (err, picture) => {
    if (err) return res.send(err);
    picture.url = req.body.url;
    picture.save(err => {
      if (err) return res.send(err);
      res.send(picture);
    })
  })
})

app.get('/api/upcoming', async (req, res) => {
  const allUpcoming = await req.context.models.Upcoming.find();
  const validUpcoming = Array.from(allUpcoming).filter( upcoming => {
    const now = new Date();
    if (upcoming.date - now < 2592000000 || upcoming.urgent) {
      return upcoming;
    }
  })

  return res.send(validUpcoming);

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
      models.FellowshipNight.deleteMany({}),
      models.Picture.deleteMany({}),
      models.Upcoming.deleteMany({})
    ]);
    await createStories();
    await createFellowshipNights();
    await createPictures();
    await createUpcoming();
  }


  app.listen(process.env.PORT || 5000, () => 
    console.log(`Listening on port ${process.env.PORT || 5000}`),
  );
}).catch(err => console.log(`there's an error: ${err}`))

module.exports = app;

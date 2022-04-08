import app from './app';

app.listen(process.env.PORT || 3001, function () {
  console.log('Express server listening on port %d in %s mode', process.env.PORT || 3001, app.settings.env);
});

define(function(require) {

  //imports:
  var $ = require('jquery');
  var jquery_ujs = require('jquery_ujs');
  var map = require('./views/map');
  var tweets = require('./models/tweets');

  tweets.fetch().then(function() {
    tweets.each(function(tweet) {
      console.log( tweet.getLat() );
    });
  });

  //implementation
  console.log('main.js connected');
});

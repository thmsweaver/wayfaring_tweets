//iframe embed functionality?
//hexcolor chronological progression?
//gallery focus which cycles through pictures, add comments?
//ability to tweet ftom mobile app?

define(function(require) {

  var $ = require('jquery');
  var jquery_ujs = require('jquery_ujs');
  var map = require('./views/map');
  var tweets = require('./models/tweets');
  var Search = require('./views/search');
  var searchView = new Search({collection: tweets});

  tweets.fetch()

  console.log('main.js connected');
});

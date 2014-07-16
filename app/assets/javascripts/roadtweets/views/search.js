
define(function(require) {

  var Backbone = require('backbone');
  var tweets = require('../models/tweets');

  var SearchView = Backbone.View.extend({
    el: '#search_form',

    events: {
      'submit' : 'search'
    },

    search: function(evt) {
      evt.preventDefault();
      tweets.fetch({
        data: {hashtag: this.$('#search_term').val()}
      });
    this.$('#search_term').val('');
    }
  });

  console.log('search.js connected');
  return SearchView;
});

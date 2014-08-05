
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
      $('.user-feedback').html('');
      $('.hashtag-feedback').html('');
      tweets.fetch({
        data: {hashtag: this.$('#search_hashtag').val(),
                  user: this.$('#search_username').val()
              }
      });

    $('.feedback').html($('#search_username').val() + ', ' + $('#search_hashtag').val()).hide().fadeIn('slow');
    this.$('#search_hashtag').val('');
    this.$('#search_username').val('');
    }
  });

  console.log('search.js connected');
  return SearchView;
});

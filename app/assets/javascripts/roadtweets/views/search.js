
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
      if(!this.$('#search_hashtag').val().length || !this.$('#search_username').val().length){
        tweets.reset();
      }else{
        tweets.fetch({
          data: {hashtag: this.$('#search_hashtag').val(),
                 user: this.$('#search_username').val()
                },
          error: function(){
            tweets.throwError();
          }
        });
      }

    this.$('#search_hashtag').val('');
    this.$('#search_username').val('');
    }
  });

  console.log('search.js connected');
  return SearchView;
});

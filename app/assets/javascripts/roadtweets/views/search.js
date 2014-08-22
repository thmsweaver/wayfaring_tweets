
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

      var handle = this.$('#search_handle');
      var hashtag = this.$('#search_hashtag');

      if(!handle.val().length && !hashtag.val().length){
        tweets.reset();
      }else{
        tweets.fetch({
          data: {user: handle.val(),
                 hashtag: hashtag.val()
                },
          error: function(){
            tweets.throwError();
          }
        });
      }

    handle.val('');
    hashtag.val('');
    }
  });

  console.log('search.js connected');
  return SearchView;
});

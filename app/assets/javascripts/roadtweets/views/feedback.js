
define(function(require) {

  var Backbone = require('backbone');
  var tweets = require('../models/tweets');

  var Feedback = Backbone.View.extend({

    el: '.feedback',

    initialize: function() {
      this.listenTo(this.collection, 'sync', this.displaySearch);
      this.listenTo(this.collection, 'reset', this.promptForSearch);
      this.listenTo(this.collection, 'errorOnFetch', this.displayError);
    },

    displayError: function(){
      this.$el.html('Tweets could not be located');
    },

    promptForSearch: function(){
      this.$el.html('Please enter a Twitter handle and hashtag');
    },

    displaySearch: function(){
      var first = this.collection.models[0];
      this.$el.html('@' + first.attributes.user.screen_name +
      ', #' +
      first.attributes.entities.hashtags[0].text).hide().fadeIn();
    }

  });

  console.log('feedback.js connected');
  return new Feedback({ collection: tweets });
});

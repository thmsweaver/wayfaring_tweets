
define(function(require) {

  var Backbone = require('backbone');
  var tweets = require('../models/tweets');

  var Feedback = Backbone.View.extend({

    el: '.feedback',

    initialize: function() {
      this.listenTo(this.collection, 'sync', this.displaySearch)
    },

    displaySearch: function() {
      var first = this.collection.models[0];
      this.$el.html('@' + first.attributes.user.screen_name +', #'+ first.attributes.entities.hashtags[0].text);
    }

  });

  console.log('feedback.js connected');
  return new Feedback({ collection: tweets });
});

  // //TODO: extrapolate this to another method that listens to the model updating.
  //     if($('#search_username').val().length && $('#search_hashtag').val().length) {
  //       $('.feedback').html($('#search_username').val() + ', ' + $('#search_hashtag').val()).hide().fadeIn('fast');
  //     }else{
  //       $('.feedback').html('please enter a Twitter handle and hashtag').hide().fadeIn('fast');
  //     }

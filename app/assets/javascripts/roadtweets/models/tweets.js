
define(function(require) {

  var Backbone = require('backbone');

  var Tweet = Backbone.Model.extend({
    defaults: {
      user: {screen_name: '', created_at: ''},
      text: '',
      media: [],
      geo: {type: '', coordinates: []}
    },

    getLat: function() {
      var coords = this.get('geo');
      return coords.coordinates[0];
    },

    getLng: function() {
      var coords = this.get('geo');
      return coords.coordinates[1];
    }
  });

  var TweetsCollection = Backbone.Collection.extend({

    url: '/tweets',
    model: Tweet,

    parse: function(data) {
      return data.statuses;
    }
  });

  console.log('tweets.js connected')
  return new TweetsCollection();
});


define(function(require) {

  var Backbone = require('backbone');

  var Tweet = Backbone.Model.extend({
    defaults: {
      screen_name: '',
      created_at: '',
      text: '',
      media_url: '',
      coordinates: {type: '', coordinates: []}
    },

    getLat: function() {
      var coords = this.get('coordinates');
      return coords.coordinates[0];
    },

    getLng: function() {
      var coords = this.get('coordinates');
      return coords.coordinates[1];
    }
  });

  var Tweets = Backbone.Collection.extend({

    model: Tweet,
    url: '/tweets',

    parse: function(data) {
      return data.statuses;
    }
  });

  console.log('turtle.js connected')
});
